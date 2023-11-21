export default function Items() {
  return (
    <main className="w-[60%] mx-[20%] bg-white">
      <div id="content" className="py-2 w-full bg-amber-50 dark:bg-zinc-900">
        <div
          id="content-container"
          className="mx-[12.5%] px-2 min-h-[90vh] flex flex-col gap-3 overflow-y-scroll"
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
              <div className="flex gap-3 justify-center mx-14 items-center">
                <span className="border-r border-gray-300 pr-2">
                  <h1>LOVE</h1>
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div id="Item-card" className="h-18">
            <div className="mx-2 rounded-3xl p-3 bg-slate-300 dark:bg-zinc-600">
              <div className="flex gap-3 justify-center mx-14 items-center">
                <span className="border-r border-gray-300 pr-2">
                  <h1>LIKE</h1>
                </span>
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
              <div className="flex gap-3 justify-center mx-14 items-center">
                <span className="border-r border-gray-300 pr-2">
                  <h1>NEUTRAL</h1>
                </span>
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
              <div className="flex gap-3 justify-center mx-14 items-center">
                <span className="border-r border-gray-300 pr-2">
                  <h1>DISLIKE</h1>
                </span>
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
              <div className="flex gap-3 justify-center mx-14 items-center">
                <span className="border-r border-gray-300 pr-2">
                  <h1>HATE</h1>
                </span>
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
  );
}
