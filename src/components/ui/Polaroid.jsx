import Image from "next/image";

const Polaroid = ({ image, alt, sizes = "200px", className = "", priority = false }) => {
  return (
    <figure className={`bg-[#fbf8f0] p-2 pb-5 shadow-[0_10px_24px_-10px_rgb(60_40_10/0.5)] ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={image} alt={alt} fill sizes={sizes} placeholder="blur" priority={priority} className="object-cover" />
      </div>
    </figure>
  );
};

export default Polaroid;
