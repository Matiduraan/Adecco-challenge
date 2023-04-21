import axios from "axios";

export const getUsers = async () => {
  return await axios.get(`${process.env.NEXT_PUBLIC_USERS_API}users`);
};

export const getPosts = async (userId: Number) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_JT_API}posts?userId=${userId}`
  );
};

export const getAlbum = async (userId: Number) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_JT_API}users/${userId}/albums`
  );
};

export const getAlbumPhotos = async (albumId: number | undefined) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_JT_API}albums/${albumId}/photos`
  );
};
