export default function Items() {
  return (
    <>
      <main className="h-96 my-40 w-[60%] mx-[20%] bg-white">
        <header className="relative">
          <nav className="border-gray-200 bg-white dark:bg-gray-500 py-2 px-3 h-13 justify-center">
            <div className="mx-[12.5%]">
              <button
                id="hamburger"
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-1 w-10 h-9 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                className="hidden md:flex md:justify-center w-full md:w-auto"
                id="navbar-default"
              >
                <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-400 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-500">
                  <li>
                    <a
                      href="#"
                      className="block rounded px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-730 md:dark:hover:text-yellow-300"
                    >
                      Villagers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent  md:dark:text-yellow-300 md:dark:hover:text-yellow-300"
                      aria-current="page"
                    >
                      Items
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div
          id="content"
          className="h-96 pb-2 w-full bg-amber-50 dark:bg-zinc-900"
        >
          <div
            id="content-container"
            className="mx-[12.5%] px-2 h-full flex flex-col gap-3 overflow-y-scroll"
          >
            <div
              id="Item-search"
              className="px-2 py-2 h-18 sticky flex gap-5 top-0 bg-amber-50 dark:bg-zinc-900"
            >
              <form className="block w-full rounded-2xl border border-gray-300 bg-gray-50 text-sm text-gray-900 dark:border-gray-600 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <button
                  type="submit"
                  className="rounded-3xl py-3 px-3 text-md font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-300 dark:hover:bg-blue-400 dark:focus:ring-blue-100"
                >
                  <div className="pointer-events-none relative inset-y-0 start-0 flex items-center">
                    <svg
                      className="h-3 w-3 text-gray-500 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </button>
                <input
                  type="search"
                  id="default-search"
                  className="bg-gray-300 ml-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-zinc-700"
                  placeholder="Search item..."
                  required
                />
              </form>
            </div>

            <div id="Item-card" className="h-18">
              <div className="mx-2 rounded-3xl p-3 bg-slate-300 dark:bg-zinc-600">
                <div className="flex gap-3">
                  <h1>LOVE</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            <div id="Item-card" className="h-18">
              <div className="mx-2 rounded-3xl p-3 bg-slate-300 dark:bg-zinc-600">
                <div className="flex gap-3">
                  <h1>LIKE</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis quos enim a, sint nihil assumenda laborum dicta
                    voluptates aliquam
                  </p>
                </div>
              </div>
            </div>

            <div id="Item-card" className="h-18">
              <div className="mx-2 rounded-3xl p-3 bg-slate-300 dark:bg-zinc-600">
                <div className="flex gap-3">
                  <h1>NEUTRAL</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis quos enim a, sint nihil assumenda laborum dicta
                    voluptates aliquam
                  </p>
                </div>
              </div>
            </div>

            <div id="Item-card" className="h-18">
              <div className="mx-2 rounded-3xl p-3 bg-slate-300 dark:bg-zinc-600">
                <div className="flex gap-3">
                  <h1>DISLIKE</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis quos enim a, sint nihil assumenda laborum dicta
                    voluptates aliquam
                  </p>
                </div>
              </div>
            </div>

            <div id="Item-card" className="h-18">
              <div className="mx-2 rounded-3xl p-3 bg-slate-300 dark:bg-zinc-600">
                <div className="flex gap-3">
                  <h1>HATE</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis quos enim a, sint nihil assumenda laborum dicta
                    voluptates aliquam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
