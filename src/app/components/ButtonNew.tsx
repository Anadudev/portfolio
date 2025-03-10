const ButtonNew = () => {
  return (
    <sup
      className={`border rounded flex items-center relative font-semibold w-fit shine text-black dark:text-white
	uppercase tracking-wide before:bg-gradient-to-r dark:from-primary border-primary from-white before:-rotate-180 h-3
	p-[.1rem] dark:before:bg-gradient-to-r dark:before:from-black bg-white dark:bg-black`}
    >
      <span className={`text-[.5rem]`}>NEW</span>
    </sup>
  );
};
export default ButtonNew;
