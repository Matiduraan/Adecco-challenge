import { RootState } from "@/redux/store";
import Link from "next/link";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { shallowEqual, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import AlbumModal from "../modals/AlbumModal";
import PostsModal from "../modals/PostsModal";
import MobileSheet from "@/components/Sidebar/MobileSheet";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Transition } from "@headlessui/react";
import Sidebar from "@/components/Sidebar/Sidebar";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const cookies = new Cookies();
  const isSidebarOpen = useSelector(
    (state: RootState) => state.sidebarOpen,
    shallowEqual
  );
  const windowSize = useWindowSize();
  const handleLogOut = () => {
    cookies.remove("tk_user");
  };

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

  return (
    <>
      {cookies.get("tk_user") && (
        <div className="bg-slate-900 py-3 mb-5">
          <div className="container mx-auto flex justify-center">
            <Link
              onClick={handleLogOut}
              href="/login"
              className="text-white font-center mx-auto"
            >
              Log out
            </Link>
          </div>
        </div>
      )}
      <div>{children}</div>
      {windowSize.width < 640 ? (
        <MobileSheet
          showAlbumModal={showAlbumModal}
          showPostsModal={showPostsModal}
        />
      ) : (
        <>
          {isSidebarOpen && (
            <div className="bg-black/20 z-20 absolute top-0 w-full h-full"></div>
          )}
          <Transition
            show={isSidebarOpen}
            enter="transition duration-500 ease-in-out"
            enterFrom="top-0 right-0 absolute translate-x-[200rem] z-30"
            enterTo="top-0 right-0 absolute z-30"
            leave="transition duration-500 ease-in-out z-30"
            leaveFrom="top-0 right-0 absolute translate-x-0 z-30"
            leaveTo="top-0 right-0 absolute translate-x-[200rem] z-30"
          >
            <Sidebar
              showAlbumModal={showAlbumModal}
              showPostsModal={showPostsModal}
            />
          </Transition>
        </>
      )}
    </>
  );
};

export default SidebarLayout;
