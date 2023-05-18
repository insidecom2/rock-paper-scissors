import { setUser } from "@/stores/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

export const useCreateUser = () => {
  const [userId, setUserId] = useState<string>("");
  const dispatch = useDispatch();
  const createUser = async () => {
    let getUserId = Cookies.get("user");
    if (getUserId === "" || !getUserId) {
      // call post creat user
      getUserId = "1234567890MM33";
    }
    setUserId(getUserId ?? "");
  };

  useEffect(() => {
    Cookies.set("user", userId);
    dispatch(setUser(userId));
  }, [userId]);

  return {
    createUser,
  };
};
