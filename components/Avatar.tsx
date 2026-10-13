import Image from "next/image";

type AvatarProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  quality?: number;
};

const Avatar = ({
  className = "",
  imageClassName = "",
  priority = false,
  src = "/avatar.png",
  alt = "Muhammad Rizki",
  width = 750,
  height = 750,
  quality = 75,
}: AvatarProps) => {
  const hasObjectFit = /object-(contain|cover|fill|none|scale-down)/.test(
    imageClassName
  );

  return (
    <div className={`pointer-events-none select-none relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        className={`translate-z-0 w-full h-full bg-transparent ${
          hasObjectFit ? "" : "object-contain"
        } ${imageClassName}`.trim()}
      />
    </div>
  );
};

export default Avatar;
