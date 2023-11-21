export default function Villagers() {
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
                placeholder="Search Villager..."
                required
              />
            </form>
          </div>

          <div id="Villager-card" className="h-18">
            <div className="mx-2 rounded-3xl p-3 bg-slate-300 border dark:bg-zinc-600 hover:border-blue-400 hover:shadow-lg">
              <div className="conatiner p-1 h-23 mx-[12.5%] flex w-[75%] cursor-pointer items-center rounded-2xl bg-neutral-100 dark:bg-zinc-600">
                <div className="mx-12 basis-1/4">
                  <img
                    className="h-auto w-auto pb-3 sm:h-24"
                    src="https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png"
                    alt="Abigail"
                  />
                </div>
                <div clasName="flex h-24 flex-shrink basis-2/4 flex-col justify-center">
                  <p className="text-base subpixel-antialiased sm:text-lg">
                    Abigail
                  </p>
                  <span className="text-gray-400">More info</span>
                </div>
              </div>
            </div>
          </div>
          <div id="Villager-card" className="h-18">
            <div className="mx-2 rounded-3xl p-3 bg-slate-300 border dark:bg-zinc-600 hover:border-blue-400 hover:shadow-lg">
              <div className="conatiner p-1 h-23 mx-[12.5%] flex w-[75%] cursor-pointer items-center rounded-2xl bg-neutral-100 dark:bg-zinc-600">
                <div className="mx-12 basis-1/4">
                  <img
                    className="h-auto w-auto pb-3 sm:h-24"
                    src="https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png"
                    alt="Alex"
                  />
                </div>
                <div clasName="flex h-24 flex-shrink basis-2/4 flex-col justify-center">
                  <p className="text-base subpixel-antialiased sm:text-lg">
                    Alex
                  </p>
                  <span className="text-gray-400">More info</span>
                </div>
              </div>
            </div>
          </div>
          <div id="Villager-card" className="h-18">
            <div className="mx-2 rounded-3xl p-3 bg-slate-300 border dark:bg-zinc-600 hover:border-blue-400 hover:shadow-lg">
              <div className="conatiner p-1 h-23 mx-[12.5%] flex w-[75%] cursor-pointer items-center rounded-2xl bg-neutral-100 dark:bg-zinc-600">
                <div className="mx-12 basis-1/4">
                  <img
                    className="h-auto w-auto pb-3 sm:h-24"
                    src="https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png"
                    alt="Elliott"
                  />
                </div>
                <div clasName="flex h-24 flex-shrink basis-2/4 flex-col justify-center">
                  <p className="text-base subpixel-antialiased sm:text-lg">
                    Elliott
                  </p>
                  <span className="text-gray-400">More info</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
