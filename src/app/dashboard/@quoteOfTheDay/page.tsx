import { getQuoteOfTheDay } from "@/lib/fetchers/quotable";

export default async function QuoteOfTheDayPage() {
  const quote = await getQuoteOfTheDay();

  return (
    <section className="rounded-2xl p-4 shadow bg-[oklch(27.8%_.033_256.848)]">
      <h2 className="font-medium">Quote of the Day</h2>
      <blockquote className="mt-2 text-gray-400 italic">
        <p>&quot;{quote.content}&quot;</p>
      </blockquote>
      <p className="mt-1 text-gray-500">— {quote.author}</p>
    </section>
  );
}
