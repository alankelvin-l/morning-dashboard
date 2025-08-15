import "server-only";
import { headers } from "next/headers";

export type Geo = {
    lat: number;
    lon: number;
    city?: string;
    country?: string;
};

export async function getGeo(): Promise<Geo> {
    const headersList = await headers();
    const latitude = headersList.get("x-vercel-ip-latitude");
    const longitude = headersList.get("x-vercel-ip-longitude");

    if (latitude && longitude) {
        return { 
            lat: parseFloat(latitude), 
            lon: parseFloat(longitude), 
            city: headersList.get("x-vercel-ip-city") || undefined, 
            country: headersList.get("x-vercel-ip-country") || undefined 
        };
    }

    return { lat: 6.2476, lon: -75.5748, city: "Medellin", country: "Colombia" };
};
