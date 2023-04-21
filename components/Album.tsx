import { Photo } from "@/types";
import Image from "next/image";

const Album = ({ photos }: { photos: [Photo] | [] }) => {
  return (
    <>
      <div className="container flex flex-wrap">
        {photos.map((photo) => {
          return (
            <div className="w-full sm:w-1/3">
              <Image
                alt={photo.title}
                src={photo.url}
                width={600}
                height={600}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Album;
