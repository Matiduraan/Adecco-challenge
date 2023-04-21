import { useDispatch } from "react-redux";
import SidebarContent from "./SidebarContent";
import { closeSidebar } from "@/redux/slices/sidebarSlice";

const Sidebar = ({
  showAlbumModal,
  showPostsModal,
}: {
  showAlbumModal: () => void;
  showPostsModal: () => void;
}) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeSidebar());
  };
  return (
    <aside
      id="menu"
      className={`w-[20rem] h-screen flex bg-gray-800 duration-700`}
    >
      <div className="w-full flex flex-col text-white px-5 py-4 space-y-4 items-center overflow-x-hidden overflow-y-scroll">
        <button
          type="button"
          onClick={handleClose}
          className="text-right text-4xl hover:text-red-400 self-end"
        >
          &times;
        </button>
        <SidebarContent
          showAlbumModal={showAlbumModal}
          showPostsModal={showPostsModal}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
