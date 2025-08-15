import "server-only";
import { headers } from "next/headers";

export type Geo = {
    latitude: string;
    longitude: string;
    city?: string;
    country?: string;
};

export async function getGeo(): Promise<Geo> {
    const headersList = await headers();
    const latitude = headersList.get("x-vercel-ip-latitude");
    const longitude = headersList.get("x-vercel-ip-longitude");

    if (latitude && longitude) {
        return { 
            latitude,
            longitude, 
            city: headersList.get("x-vercel-ip-city") || undefined, 
            country: headersList.get("x-vercel-ip-country") || undefined 
        };
    }

    return { latitude: "6.2476", longitude: "-75.5748", city: "Medellin", country: "Colombia" };
};
