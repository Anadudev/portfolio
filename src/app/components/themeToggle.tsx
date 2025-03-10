import { ThemeToggleProps } from "../types/types";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
const ThemeToggle = (props: ThemeToggleProps) => {
  return (
    <>
      <div className={`flex gap-4 ${props.theme == "dark" && `hidden`} `}>
        <button
          className={`before:animate-shake-r before:block before:absolute before:-inset-1 before:-skew-y-3 before:-z-10 before:bg-primary before:rounded-full relative flex justify-center items-center size-8 tablet-sm:size-fit tablet-sm:px-1 before:rotate-3`}
        >
          <IoSunnyOutline className={`text-black font-bold text-xl`} />
          <span className="tablet-sm:block hidden ml-1 text-black">Light</span>
        </button>
        <button
          className={`flex justify-center items-center size-8 tablet-sm:size-fit tablet-sm:px-1`}
          onClick={props.onClick}
        >
          <IoMoonOutline className={` font-bold text-xl text-black`} />{" "}
          <span className="tablet-sm:block hidden ml-1 text-black">Dark</span>
        </button>
      </div>
      <div className={`flex gap-4 ${props.theme == "light" && `hidden`} `}>
        <button
          className={`flex justify-center items-center size-8 tablet-sm:size-fit tablet-sm:px-1`}
          onClick={props.onClick}
        >
          <IoSunnyOutline className={` font-bold text-xl`} />
          <span className="tablet-sm:block hidden ml-1 ">Light</span>
        </button>
        <button
          className={`before:animate-shake-l before:block before:absolute before:-inset-1 before:-skew-y-3 before:-z-10 before:bg-primary before:rounded-full relative flex justify-center items-center size-8 tablet-sm:size-fit tablet-sm:px-1 before:rotate-3`}
        >
          <IoMoonOutline className={`text-black font-bold text-xl`} />
          <span className="tablet-sm:block hidden ml-1 text-black">Dark</span>
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
