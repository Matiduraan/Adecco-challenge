import { getAlbum, getPosts, getUsers } from "@/services/userServices";
import { GetServerSideProps } from "next";
import { parse } from "cookie";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setUsers } from "@/redux/slices/usersListSlice";
import UserCard from "@/components/UserCard";
import { useEffect } from "react";
import { Album, Post, User } from "@/types";
import Layout from "@/components/Layouts/Layout";
import SidebarLayout from "@/components/Layouts/SidebarLayout";

interface IProps {
  data: [
    {
      avatar: string;
      email: string;
      first_name: string;
      last_name: string;
      id: number;
      posts: [Post];
      album: [Album];
    }
  ];
}

const Home = (props: IProps) => {
  const { data } = props;
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.users, shallowEqual);

  useEffect(() => {
    dispatch(setUsers(data));
  }, []);

  return (
    <SidebarLayout>
      <div className="flex flex-wrap min-h-[75vh]	items-center container mx-auto">
        {users.length > 0 &&
          users.map((user) => {
            return <UserCard user={user} key={`user-${user.id}`} />;
          })}
      </div>
    </SidebarLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = parse(req.headers.cookie || "");
  const userToken = cookies.tk_user || null;
  if (!userToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
      props: {},
    };
  }
  const { status, data: users } = await getUsers();
  if (status == 200) {
    const finalUsers = await Promise.all(
      users?.data?.map(async (user: User) => {
        const { data: posts } = await getPosts(user.id);
        const { data: album } = await getAlbum(user.id);
        return { ...user, album, posts };
      })
    );
    return {
      props: { data: finalUsers }, // will be passed to the page component as props
    };
  }
  return {
    props: { data: [] }, // will be passed to the page component as props
  };
};

export default Home;
