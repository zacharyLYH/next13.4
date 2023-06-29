export default async function SayHello() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //simulate laoding
    return <div>Hello NextJS 13.4</div>;
}
