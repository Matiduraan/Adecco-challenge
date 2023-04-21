export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type User = {
  avatar: string | null;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  id: number;
  posts: Array<Post | undefined>;
  album: Array<Album | undefined>;
};

export type Photo = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};
