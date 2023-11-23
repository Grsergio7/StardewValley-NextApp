"use client";

import VillagerCard from "../components/VillagerCard";

export default function Villagers() {
  return (
    <main className="w-[60%] mx-[20%] bg-white">
      <div id="content" className="py-2 w-full bg-amber-50 dark:bg-zinc-900">
        <div
          id="content-container"
          className="mx-[12.5%] px-2 min-h-[90vh] flex flex-col gap-3 overflow-y-scroll overflow-auto"
        >
          <VillagerCard />
        </div>
      </div>
    </main>
  );
}
