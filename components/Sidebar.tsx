import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { closeSidebar } from "@/redux/slices/sidebarSlice";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { upsertUser } from "@/redux/slices/usersListSlice";
import { cleanUser } from "@/redux/slices/userSlice";
import { MainButton } from "./adecco.styles";
import { Dispatch, SetStateAction } from "react";

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
};

const userSchema = yup.object({
  first_name: yup.string().required("Debe ingresar un nombre"),
  last_name: yup.string().required("Debe ingresar un apellido"),
  email: yup.string().required("Debe ingresar una contraseña"),
});

const Sidebar = ({
  showAlbumModal,
  showPostsModal,
}: {
  showAlbumModal: () => void;
  showPostsModal: () => void;
}) => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(
    (state: RootState) => state.selectedUser,
    shallowEqual
  );
  const isOpen = useSelector(
    (state: RootState) => state.sidebarOpen,
    shallowEqual
  );

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      first_name: selectedUser.first_name || "",
      last_name: selectedUser.last_name || "",
      email: selectedUser.email || "",
    },
  });

  const handleClose = () => {
    dispatch(closeSidebar());
  };

  const handlePosts = () => {
    showPostsModal();
    handleClose();
  };

  const handleAlbum = () => {
    showAlbumModal();
    handleClose();
  };

  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    e?.preventDefault();
    const updatedUser = { ...selectedUser, ...data };
    dispatch(upsertUser(updatedUser));
    dispatch(cleanUser());
    handleClose();
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
        <Image
          src={selectedUser.avatar || ""}
          alt="avatar"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="flex justify-evenly w-full gap-x-5">
          <MainButton type="button" onClick={handlePosts}>
            Posteos
          </MainButton>
          <MainButton type="button" onClick={handleAlbum}>
            Album
          </MainButton>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Id
            </label>
            <input
              type="text"
              id="id"
              className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedUser.id}
              disabled
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="first_name"
              {...register("first_name")}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nombre"
            />
            {errors.first_name && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.first_name.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Apellido
            </label>
            <input
              type="text"
              id="last_name"
              {...register("last_name")}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Apellido"
            />
            {errors.last_name && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.last_name.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email")}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <MainButton type="submit" className="text-center self-center">
            Guardar informacion
          </MainButton>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
