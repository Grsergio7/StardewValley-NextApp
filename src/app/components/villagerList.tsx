import { useState } from "react";
import villager_data from "../../../public/villager_db";

const getFilteredItems = (query, villagers) => {
  if (!query) {
    return villagers;
  }
  return villagers.filter((v) => v.name.includes(query));
};

const VillagerCard = () => {
  const [open, setOpen] = useState(null);
  const [query, setQuery] = useState("");

  const { villagers } = villager_data;
  const filteredItems = getFilteredItems(query, villagers);

  const toggle = (i: number) => {
    if (open == i) {
      return setOpen(null);
    }

    setOpen(i);
  };

  return (
    <div
      id="content"
      className="max-h-[90vh] pb-2 w-full bg-amber-50 dark:bg-zinc-900"
    >
      <div id="Villager-container" className="h-full flex flex-col gap-3">
        <div
          id="Item-search"
          className="px-2 py-2 h-18 sticky flex gap-5 top-0 bg-amber-50 dark:bg-zinc-900"
        >
          <form className="block w-full rounded-2xl border border-gray-300 bg-gray-50 text-sm text-gray-900 dark:border-gray-600 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
            {/* <button className="cursor-default rounded-3xl py-2 px-3 text-md font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-300 dark:focus:ring-blue-100"> */}
            <div className="relative inset-y-0 flex items-center rounded-3xl py-2 px-3">
              <svg
                className="h-3 w-3 text-gray-900 dark:text-white"
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
              <input
                type="search"
                id="default-search"
                onChange={(e) => setQuery(e.target.value)}
                className="bg-gray-50 w-[90%] ml-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-zinc-700 dark:text-white"
                placeholder="Search Villager..."
                required
              />
            </div>
          </form>
        </div>

        {filteredItems.map((value: object, i: number) => (
          <>
            <div className="max-h-auto mx-2 rounded-3xl p-2 mb-2 bg-neutral-100 border dark:bg-zinc-600 hover:border-blue-400 hover:shadow-lg">
              <div
                className="conatiner p-1 h-23 mx-[12.5%] flex w-[75%] items-center rounded-2xl cursor-pointer bg-neutral-100 dark:bg-zinc-600"
                onClick={() => toggle(i)}
              >
                <div className="mx-12 basis-1/4">
                  <img
                    className="h-auto w-auto pb-1 sm:h-24"
                    src={value.url}
                    alt={value.name}
                  />
                </div>
                <div className="flex h-24 flex-shrink basis-2/4 flex-col justify-center">
                  <p className="text-base subpixel-antialiased sm:text-lg">
                    {value.name}
                  </p>
                  <span className="text-gray-400">More info</span>
                </div>
                <div className="flex h-24 w-12 items-center">
                  {open == i ? "-" : "+"}
                </div>
              </div>
              <div
                className={
                  open == i ? "bg-transparent text-white mx-6" : "hidden"
                }
              >
                <p>Loves: {value.Loves}</p>
                <br />
                <p>Likes: {value.Likes}</p>
                <br />
                <p>Neutrals: {value.Neutral}</p>
                <br />
                <p>Dislikes: {value.Dislikes}</p>
                <br />
                <p>Hates: {value.Hates}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default VillagerCard;
