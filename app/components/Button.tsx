import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button
      className="bg-teal-700 text-white text-lg font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:scale-110 hover:bg-white duration-500 hover:text-teal-700
    "
    >
      {text}
    </button>
  );
};

export default Button;
