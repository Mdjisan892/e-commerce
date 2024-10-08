import HamburgerMenu from "@/app/Components/Sidebar/HamberGer";

const NextHeader = ({ setOpen }) => {
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div className="relative flex justify-between items-center w-full mx-auto p-4 py-1 bg-white shadow-md rounded-sm rounded-tr-none rounded-tl-none text-teal-700 font-bold -mt-[0.10rem] ">
      <div className="flex items-center  w-[4rem] realtive rounded-sm ml-5">
        <button
          onClick={handleClick}
          className="absolute flex items-center justify-center w-10 h-10 -ml-2 text-white transition-transform duration-300 ease-in-out bg-transparent border-none rounded-full cursor-pointer group hover:scale-110"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="block w-6 h-0.5 bg-black mb-1 group-hover:bg-teal-700/75 transition-all"></span>
            <span className="block w-6 h-0.5 bg-black mb-1 group-hover:bg-teal-700/75 transition-all"></span>
            <span className="block w-6 h-0.5 bg-black group-hover:bg-teal-700/75 transition-all"></span>
          </div>
          <p className="ml-1 text-black group-hover:text-teal-700/75">All</p>
        </button>
      </div>

      <div>
        <HamburgerMenu/>
      </div>
    </div>
  )
}

export default NextHeader;
