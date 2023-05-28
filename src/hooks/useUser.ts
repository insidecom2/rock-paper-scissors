import { setInitailUser, setUser } from "@/stores/userSlice";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import httpRequest from "@/utils/http";

export const useUser = () => {
  const [userId, setUserId] = useState<string>("");
  const dispatch = useDispatch();

  const createUser = useCallback(async () => {
    const dataResponse: any = await httpRequest({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/user`,
    });
    const getUserId = dataResponse.data.userId;
    setUserId(getUserId);
  }, []);

  const checkUserLogined = useCallback(() => {
    let getUserId = Cookies.get("user");
    if (getUserId && getUserId !== "") {
      setUserId(getUserId);
    }
  }, []);

  const logout = () => {
    Cookies.remove("user");
    window.location.reload();
  };

  useEffect(() => {
    checkUserLogined();
  }, []);

  useEffect(() => {
    if (userId !== "") {
      Cookies.set("user", userId);
      dispatch(setUser(userId));
    }
  }, [userId]);

  return {
    createUser,
    logout,
  };
};
