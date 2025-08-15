type Quote = { content: string; author: string };

export async function getQuoteOfTheDay(): Promise<Quote> {
    const response = await fetch("http://api.quotable.io/random", {
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch quote of the day");
    }

    const data = await response.json();
    return { content: data.content, author: data.author };
}