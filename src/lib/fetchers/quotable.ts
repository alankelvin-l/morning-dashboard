type Quote = { content: string; author: string };

export async function fetchQuoteOfTheDay(): Promise<Quote> {
    const response = await fetch("https://api.quotable.io/random", {
        next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
        throw new Error("Failed to fetch quote of the day");
    }

    const data = await response.json();
    return { content: data.content, author: data.author };
}