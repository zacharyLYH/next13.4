import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import styles from "./topic.module.css";
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";

interface TopicPageProps {
    params: { topic: string }; //the slug variable. params : {slugValue: string}
}

//dynamically set metadata 
export function generateMetadata({
    params: { topic },
}: TopicPageProps): Metadata {
    return {
        title: topic + " in NextJS 13.4",
    };
}

//makes it such that nothing besides the params in the array is allowed to be rendered
export const dynamicParams = false;

//run with these params at build time and cache them
export function generateStaticParmas() {
    return ["health", "fitness", "coding"].map((topic) => ({ topic }));
}

export default async function TopicPage({ params: { topic } }: TopicPageProps) {
    const response = await fetch(
        `https://api.unsplash.com/photos/random?query=${topic}&count=2&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    const images: UnsplashImage[] = await response.json();
    return (
        <div>
            <Alert>
                This page uses <strong>generateStaticParams</strong> to render
                and cache static pages at build time, even though the URL has a
                dynamic parameter. Pages that are not included in
                generateStaticParams will be fetched & rendered on first access
                and then <strong>cached for subsequent requests</strong> (this
                can be disabled).
            </Alert>
            <h1>{topic}</h1>
            {images.map((image) => (
                <Image
                    src={image.urls.raw}
                    width={250}
                    height={250}
                    alt={image.description}
                    key={image.urls.raw}
                    className={styles.image}
                />
            ))}
        </div>
    );
}
