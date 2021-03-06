import Head from "next/head";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  }
  return (
    <div className="flex flex-col h-screen w-full xsm:h-screen main-color items-center justify-center">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/*Header*/}
      <header className="flex w-full px-2 py-5 xsm:p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}

        <div className="flex pl-1 space-x-2 xsm:p-0 xsm:space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-9 w-9 p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer" />
          <Avatar url="https://pbs.twimg.com/profile_images/1273307623366901760/wk5KDJC8_400x400.jpg" />
        </div>
      </header>

      {/*Body*/}
      <form className="flex flex-col items-center mt-10 xsm:mt-0 xsm:justify-center flex-grow w-4/5">
        <img
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          className="h-16 xsm:h-20"
        />

        <div className="flex px-3 py-2 mt-4 xsm:mt-5  max-w-md rounded-full xsm:px-5 xsm:py-3 shadow-input hover:shadow-input_f focus-within:shadow-input_f  items-center xsm:w-full sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 xsm:mr-3 text-gray-400" />
          <input
            type="text"
            className="focus:outline-none flex-grow main-color "
            ref={searchInputRef}
            placeholder="Search google or type a URL"
          />
          <svg
            className="HPVvwb h-5"
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
        </div>

        <div className="flex flex-col w-3/5 xsm:w-full sm:space-x-6 space-y-4 sm:space-y-3 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 sm:w-full">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/*Footer*/}
      <Footer />
    </div>
  );
}
