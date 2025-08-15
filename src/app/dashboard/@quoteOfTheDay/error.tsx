"use client";

import { useEffect } from "react";

export default function QuoteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex h-full flex-col items-center justify-center rounded-2xl bg-red-500/10 p-4 text-red-500">
      <h2 className="text-lg font-semibold">Could not fetch quote!</h2>
      <p className="mt-2 text-sm">
        Something went wrong while loading the quote of the day.
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
      >
        Try again
      </button>
    </section>
  );
}
