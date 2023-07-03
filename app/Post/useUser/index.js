import { useContext } from "react";
import { UserContext } from "@/app/UserContext";

export const useUser = () => {
    const { user } = useContext(UserContext);
    return user;
};