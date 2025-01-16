import { test as setup, expect } from "@playwright/test";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  // Perform authentication steps
  await page.goto("http://localhost:5173");
  await page.getByText('LOGIN').click();
  await page.getByPlaceholder("Email").fill("i@gmail.com");
  await page.getByPlaceholder("Password").fill("Test123!");
  await page.getByRole("button", { name: "Login" }).click();

  // Wait for the final URL to ensure that the cookies are actually set.
  //await page.waitForURL("http://localhost:5173");

  await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  
  const token = page.evaluate(() => localStorage.getItem("accessToken"));
  await expect(token).not.toBeUndefined();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
