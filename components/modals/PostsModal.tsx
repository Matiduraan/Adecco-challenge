import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ModalTitle, PostCard } from "./modals.styles";
import { removePost } from "@/redux/slices/userSlice";
import { upsertUser } from "@/redux/slices/usersListSlice";

const PostsModal = ({ hideModal }: { hideModal: () => void }) => {
  const dispatch = useDispatch();
  const userPosts = useSelector(
    (state: RootState) => state.selectedUser.posts,
    shallowEqual
  );
  const selectedUser = useSelector(
    (state: RootState) => state.selectedUser,
    shallowEqual
  );

  const handleRemovePost = (postId: number | undefined) => {
    dispatch(removePost(postId));
    const updatedPosts = selectedUser.posts.filter((post) => {
      return post?.id != postId;
    });
    dispatch(upsertUser({ ...selectedUser, posts: updatedPosts }));
  };

  return (
    <>
      <div className="w-full flex justify-end mb-5">
        <button onClick={hideModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <ModalTitle>Posts</ModalTitle>
      {userPosts.map((post) => {
        return (
          <>
            <PostCard>
              <h2>{post?.title}</h2>
              <p>{post?.body}</p>
              <button
                className="absolute right-[10px]"
                onClick={() => handleRemovePost(post?.id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </PostCard>
          </>
        );
      })}
    </>
  );
};

export default PostsModal;
