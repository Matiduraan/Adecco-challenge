import { getAlbum, getPosts, getUsers } from "@/services/userServices";
import { GetServerSideProps } from "next";
import { parse } from "cookie";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setUsers } from "@/redux/slices/usersListSlice";
import UserCard from "@/components/UserCard";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import AlbumModal from "@/components/modals/AlbumModal";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import PostsModal from "@/components/modals/PostsModal";
import { Album, Post, User } from "@/types";
import Layout from "@/components/Layout";

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
  const isOpen = useSelector(
    (state: RootState) => state.sidebarOpen,
    shallowEqual
  );
  const users = useSelector((state: RootState) => state.users, shallowEqual);

  const [showAlbumModal, hideAlbumModal] = useModal(() => (
    <ReactModal isOpen>
      <AlbumModal hideModal={hideAlbumModal} />
    </ReactModal>
  ));

  const [showPostsModal, hidePostsModal] = useModal(() => (
    <ReactModal isOpen>
      <PostsModal hideModal={hidePostsModal} />
    </ReactModal>
  ));

  useEffect(() => {
    dispatch(setUsers(data));
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap min-h-screen	items-center container mx-auto">
        {users.length > 0 &&
          users.map((user) => {
            return <UserCard user={user} />;
          })}
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-500 ease-in-out"
        enterFrom="top-0 right-0 absolute translate-x-[200rem]"
        enterTo="top-0 right-0 absolute"
        leave="transition duration-500 ease-in-out"
        leaveFrom="top-0 right-0 absolute translate-x-0"
        leaveTo="top-0 right-0 absolute translate-x-[200rem]"
      >
        <Sidebar
          showAlbumModal={showAlbumModal}
          showPostsModal={showPostsModal}
        />
      </Transition>
    </Layout>
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
