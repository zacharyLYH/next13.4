import { Alert } from "@/components/bootstrap";
import { UnsplashUser } from "@/models/unplash-user";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: { username: string };
}

async function getUser(username: string): Promise<UnsplashUser> {
    const response = await fetch(
        `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    if (response.status === 404) {
        notFound();
    }
    return await response.json();
}

export async function generateMetata({
    params: { username },
}: PageProps): Promise<Metadata> {
    const user: UnsplashUser = await getUser(username); //deduplication: NextJS will recognize if the same api call is being made and cache the first api call.
    return {
        title: user.first_name + user.last_name,
    };
}

export default async function UserPage({ params: { username } }: PageProps) {
    const user: UnsplashUser = await getUser(username);
    return (
        <div>
            <Alert>
                This profile page uses <strong>generateMetadata</strong> to set the <strong>page title</strong> dynamically from the API response.
            </Alert>
            <h1>{user.username}</h1>
            <p>First name: {user.first_name}</p>
            <p>Last name: {user.last_name}</p>
            <a href={"https://unsplash.com/" + user.username}>
                Unsplash profile
            </a>
        </div>
    );
}
