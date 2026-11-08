import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-10 w-36 opacity-20 mix-blend-screen select-none sm:w-56 xl:w-72">
      <Image
        src="/top-left-img.png"
        alt="left cover bg"
        width={400}
        height={400}
        className="w-full h-auto"
        priority
      />
    </div>
  );
};

export default TopLeftImg;
