import { UnsplashSearchResponse } from "@/models/unsplash-image";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    if (!query) {
        return NextResponse.json(
            { error: "No query provided " },
            { status: 400 }
        );
    }
    const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    const { results }: UnsplashSearchResponse = await response.json();
    return NextResponse.json(results);
}

// export async function POST() {

// }
