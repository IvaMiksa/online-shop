import { test as setup, expect } from "@playwright/test";
//import { fileURLToPath } from "url";
//import path from "path";

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//const authFile = path.join(__dirname, "../playwright/.auth/user.json");
const authFile = "frontend/playwright/.auth/user.json";

setup("authenticate", async ({ page, baseURL }) => {
  // Perform authentication steps
  await page.goto(baseURL);
  await page.getByText("LOGIN").click();
  await page.getByPlaceholder("Email").fill("iva.miksa+b@gmail.com");
  await page.getByPlaceholder("Password").fill("Test123!");
  await page.getByRole("checkbox", { name: "Remember me?" }).check();
  await page.getByRole("button", { name: "Login" }).click();

  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL(`${baseURL}/shop`);

  await expect(page.locator(':text-is("LOGOUT")')).toBeVisible();

  //const token = page.evaluate(() => localStorage.getItem("accessToken"));
  //await expect(token).not.toBeUndefined();

  //await page.waitForFunction(() => localStorage.getItem("accessToken") !== undefined);



 // await page.waitForTimeout(1000); 

  


  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
