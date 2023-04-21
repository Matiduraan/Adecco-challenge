import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Sheet from "react-modal-sheet";
import { closeSidebar } from "@/redux/slices/sidebarSlice";
import { RootState } from "@/redux/store";
import SidebarContent from "./SidebarContent";

const MobileSheet = ({
  showAlbumModal,
  showPostsModal,
}: {
  showAlbumModal: () => void;
  showPostsModal: () => void;
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.sidebarOpen,
    shallowEqual
  );

  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => dispatch(closeSidebar)}
      // snapPoints={[600, 400, 100, 0]}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content style={{ touchAction: "pan-y" }}>
          <div className="px-2 mx-auto flex flex-col items-center">
            <SidebarContent
              showAlbumModal={showAlbumModal}
              showPostsModal={showPostsModal}
            />
          </div>
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop />
    </Sheet>
  );
};

export default MobileSheet;
