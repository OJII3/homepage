import { FC } from "react";

export const SkillCard: FC<{ name: string; image: string }> = ({
  name,
  image,
}) => (
  <div className="flex flex-col items-center justify-between w-24 p-2 m-1 bg-white rounded-lg shadow-md h-28">
    <img src={image} alt={name} className="object-contain w-16 h-16" />
    <h3 className="text-sm font-bold text-center text-gray-500 ">{name}</h3>
  </div>
);
