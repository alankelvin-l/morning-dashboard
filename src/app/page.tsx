import WeatherInfo from "@/components/dashboard/WeatherInfo";
import QuoteOfTheDay from "@/components/dashboard/QuoteOfTheDay";

export default async function Page() {
  return (
    <main className="mx-auto max-w-xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Morning Dashboard</h1>
      <WeatherInfo />
      <QuoteOfTheDay />
    </main>
  );
}
