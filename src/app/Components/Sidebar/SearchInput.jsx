"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchResults = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      alert("Please enter a search term.");
      return;
    }
    setSearch(search);
    router.push(`/Components/SearchResults/${search}`);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div
        className="relative ml-0 sm:ml-[5rem] md:ml-[21rem] lg:ml-[25rem] xl:ml-[40rem]"
        id="input"
      >
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            placeholder="Search..."
            className="block sm:w-[20rem] text-sm sm:h-[45px] h-[40px] w-[10rem] rounded-[8px] appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary  hover:border-brand-500 secondary-peer overflow-ellipsis overflow-hidden text-nowrap pr-[48px] outline-slate-200   bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50  px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
            id="floating_outlined"
            type="text"
          />

          <button className="absolute px-1 -mt-1 border-l-2 border-gray-300 top-3 right-2 sm:-mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="slate-300"
              viewBox="0 0 24 24"
              height="24"
              width="24"
            >
              <path d="M10.979 16.8991C11.0591 17.4633 10.6657 17.9926 10.0959 17.9994C8.52021 18.0183 6.96549 17.5712 5.63246 16.7026C4.00976 15.6452 2.82575 14.035 2.30018 12.1709C1.77461 10.3068 1.94315 8.31525 2.77453 6.56596C3.60592 4.81667 5.04368 3.42838 6.82101 2.65875C8.59833 1.88911 10.5945 1.79039 12.4391 2.3809C14.2837 2.97141 15.8514 4.21105 16.8514 5.86977C17.8513 7.52849 18.2155 9.49365 17.8764 11.4005C17.5979 12.967 16.8603 14.4068 15.7684 15.543C15.3736 15.9539 14.7184 15.8787 14.3617 15.4343C14.0051 14.9899 14.0846 14.3455 14.4606 13.9173C15.1719 13.1073 15.6538 12.1134 15.8448 11.0393C16.0964 9.62426 15.8261 8.166 15.0841 6.93513C14.3421 5.70426 13.1788 4.78438 11.81 4.34618C10.4412 3.90799 8.95988 3.98125 7.641 4.55236C6.32213 5.12348 5.25522 6.15367 4.63828 7.45174C4.02135 8.74982 3.89628 10.2276 4.28629 11.6109C4.67629 12.9942 5.55489 14.1891 6.75903 14.9737C7.67308 15.5693 8.72759 15.8979 9.80504 15.9333C10.3746 15.952 10.8989 16.3349 10.979 16.8991Z"></path>
              <rect
                transform="rotate(-49.6812 12.2469 14.8859)"
                rx="1"
                height="10.1881"
                width="2"
                y="14.8859"
                x="12.2469"
              ></rect>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchResults;
