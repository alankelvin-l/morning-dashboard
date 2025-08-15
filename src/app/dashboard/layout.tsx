export default function DashboardLayout({
  children,
  quoteOfTheDay,
  weatherInfo,
}: Readonly<{
  children: React.ReactNode;
  quoteOfTheDay: React.ReactNode;
  weatherInfo: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh bg-dark-100 bg-[oklch(21%_0.034_264.665)] text-white">
      <div className="mx-auto max-w-xl p-6 space-y-6">
        {children}
        {weatherInfo}
        {quoteOfTheDay}
      </div>
    </div>
  );
}
