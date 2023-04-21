import Image from "next/image";
import { Card, UserName } from "./usercard.styles";
import { setActiveUser } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { openSidebar } from "@/redux/slices/sidebarSlice";
import { useTransition } from "react";
import { User } from "@/types";

const UserCard = ({ user }: { user: User }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveUser(user));
    dispatch(openSidebar());
  };

  useTransition;

  return (
    <button className="w-full sm:w-4/12" onClick={handleClick} type="button">
      <Card>
        <Image
          src={user.avatar || ""}
          alt="avatar"
          width={150}
          height={150}
          className="rounded-full"
        />
        <UserName>
          {user.first_name} {user.last_name}
        </UserName>
      </Card>
    </button>
  );
};

export default UserCard;
