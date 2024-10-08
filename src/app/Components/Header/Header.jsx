import Cart from "@/app/Components/Sidebar/Cart";
import DrawerComponent from "@/app/Components/Sidebar/Drawer";
import Link from "next/link";
import SearchResults from "../Sidebar/SearchInput";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex flex-col w-full">
      <nav className="flex items-center justify-between w-full p-4 py-2 mx-auto text-teal-700 bg-white rounded-sm rounded-bl-none rounded-br-none shadow-lg">
        <Link href={"/"}>
          <p className="font-bold text-teal-700 duration-500 border-b-2 sm:text-lg lg:text-2xl">
            ShopSwift
          </p>
        </Link>

        <SearchResults />

        <div className="flex gap-2">
          <Link href="">
            <button className="flex items-center justify-center w-10 h-10 pr-2 text-white transition-all duration-300 ease-in-out bg-transparent border-none outline-none cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
                className="text-xl duration-200 tex-black hover:scale-125 hover:fill-teal-700"
              >
                <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
              </svg>
              <span className=" text-gray-400 absolute -top-[0.1rem] left-[90.3%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-105  ml-7">
                User Info<span> </span>
              </span>
            </button>
          </Link>

          <Cart />
        </div>
      </nav>
      <nav>
        <DrawerComponent />
      </nav>
    </header>
  );
};

export default Header;
