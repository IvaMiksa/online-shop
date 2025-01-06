import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AxiosMotion } from "../axios/axios";
import { loginUser, logoutUser } from "../store/userSlice";

const useTokenVerification = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      // Token persistence after page refreshes
      const storedToken = token || localStorage.getItem("accessToken");
      if (!storedToken) {
        dispatch(logoutUser());
        return;
      }

      try {
        // Verify token with backend
        await AxiosMotion.post("auth/token/verify/", {
          token: storedToken,
        });

        // Dispatch login action if token is valid
        dispatch(loginUser(storedToken));
      } catch (error) {
        console.error("Token verification error:", error);
        dispatch(logoutUser());
      }
    };

    verifyToken();
  }, [token, dispatch, navigate]);
};

export default useTokenVerification;
