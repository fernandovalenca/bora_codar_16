import { HTMLAttributes } from "react";

type AvatarProps = {
  src: string;
} & HTMLAttributes<HTMLImageElement>;

export default function Avatar({ src, className }: AvatarProps) {
  return (
    <img
      className={`h-12 w-12 flex-none rounded-full bg-gray-50 ${className}`}
      src={src}
      alt=""
    />
  );
}
