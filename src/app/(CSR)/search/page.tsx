import SearchPage from "./searchPage";

//metadat can only be modified on Server Components. (not because of incompatibility, but because metadata and "use client" both need to be the first line of the file)
export const metadata = {
    title: "Search - NextJS 13.4",
};

/*
This file is a server component. However, we want to add some client side functionality without throwing off the server component functionality. So, we use another file to write the client side code, and use the function here to wrap that client side code.
*/
export default function Page() {
    return <SearchPage />
}
