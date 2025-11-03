// app/about/page.tsx
export default function About() {
    return (
        <main>
            <h1 className="text-2xl font-semibold">About</h1>
            <p className="mt-2 text-white-600">
                This project uses the Harvard Art Museums public API. The API key is kept on the server,
                and the UI handles outages/rate limits.
            </p>
        </main>
    );
}
