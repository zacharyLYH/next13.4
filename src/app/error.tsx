"use client";

import { Button } from "react-bootstrap";

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

export default function ErrorHandler({error, reset}: ErrorPageProps) {
    return (
        <div>
            <h1>Something went wrong</h1>
            <Button onClick={reset}>Try Again</Button>
        </div>
    );
}
