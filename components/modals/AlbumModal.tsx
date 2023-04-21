import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AlbumCard, ModalTitle, PostCard } from "./modals.styles";
import { useState } from "react";
import { getAlbumPhotos } from "@/services/userServices";
import Album from "../Album";
import { Photo } from "@/types";
import { Transition } from "@headlessui/react";

const AlbumModal = ({ hideModal }: { hideModal: () => void }) => {
  const [selectedAlbum, setSelectedAlbum] = useState<[Photo] | []>([]);

  const userAlbum = useSelector(
    (state: RootState) => state.selectedUser.album,
    shallowEqual
  );

  const cleanAlbum = () => {
    setSelectedAlbum([]);
  };

  const selectAlbum = (albumId: number | undefined) => {
    getAlbumPhotos(albumId).then(({ status, data }) => {
      if (status == 200) {
        setSelectedAlbum(data);
      }
    });
  };

  return (
    <>
      <div
        className={`container mx-auto w-full flex mb-5 bg-white ${
          selectedAlbum.length > 0 ? "justify-between" : "justify-end"
        }`}
      >
        {selectedAlbum.length > 0 && (
          <button onClick={cleanAlbum}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        )}
        <button onClick={hideModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <ModalTitle>Album</ModalTitle>
      <Transition
        show={selectedAlbum.length == 0}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {userAlbum.map((album) => {
          return (
            <AlbumCard onClick={() => selectAlbum(album?.id)}>
              <i className="fa-solid fa-arrow-right"></i>
              <h2>{album?.title}</h2>
            </AlbumCard>
          );
        })}
      </Transition>
      <Transition
        show={selectedAlbum.length > 0}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Album photos={selectedAlbum} />
      </Transition>
    </>
  );
};

export default AlbumModal;
