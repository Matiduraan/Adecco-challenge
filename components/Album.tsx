import { Photo } from "@/types";
import Image from "next/image";

const Album = ({ photos }: { photos: [Photo] | [] }) => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap">
        {photos.map((photo) => {
          return (
            <div className="w-full sm:w-1/3" key={`photo-${photo.id}`}>
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
