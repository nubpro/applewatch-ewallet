import Image from "next/image";

const BigTile = ({
  imageSrc,
  imageAlt,
  title,
  description,
}: {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: React.ReactNode;
  description: React.ReactNode;
}) => {
  return (
    <div className="container mx-auto">
      <div className="bg-primary-400 shadow-xl shadow-primary-400/10 hover:shadow-primary-400/40 transition-shadow sm:rounded-2xl grid grid-cols-1 md:grid-cols-3 py-10 px-8 md:px-12 gap-y-12 md:gap-x-5">
        <div className="col-span-2">
          <div className="text-3xl text-secondary-400 font-extrabold">
            {title}
          </div>
          <div className="pt-3 md:w-5/6">{description}</div>
        </div>

        <div className="w-44 mx-auto">
          <Image src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </div>
  );
};

export default BigTile;
