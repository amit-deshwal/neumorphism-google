import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function SearchHeader() {
  const router = useRouter();
  const searchRef = useRef(null);

  function search(e) {
    e.preventDefault();
    const term = searchRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <header className="sticky top-0 main-color">
      <div className="flex w-full px-2 py-4 xsm:p-6 items-center">
        <Image
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow max-w-xs px-4 py-2 mx-3 xsm:max-w-md xsm:mx-4 xsm:px-6 xsm:py-3 xsm:ml-10 xsm:mr-4 rounded-full shadow-input hover:shadow-input_f focus-within:shadow-input_f sm:max-w-3xl items-center">
          <input
            type="text"
            ref={searchRef}
            className="flex-grow w-full focus:outline-none main-color"
          />
          <XIcon
            className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-150 transform hover:scale-110"
            onClick={() => (searchRef.current.value = "")}
          />
          <svg
            className="HPVvwb h-6 hidden sm:inline-flex border-l-2 border-gray-300"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
              fill="#4285f4"
            ></path>
            <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
            <path
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
              fill="#f4b400"
            ></path>
            <path
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
              fill="#ea4335"
            ></path>
          </svg>
          <SearchIcon className="h-6 text-gray-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://pbs.twimg.com/profile_images/1273307623366901760/wk5KDJC8_400x400.jpg"
        />
      </div>
      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
}

export default SearchHeader;
