"use client";

import SearchBox from "@/app/components/SearchBox";

export default function SearchPage() {
  return (
      <div className="min-h-screen bg-black">
        <main className="flex flex-col items-center justify-center py-16">
          <SearchBox />
        </main>
      </div>
  );
}
