
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1 className="text-3xl font-semibold">Harvard Art Museums — Live Data</h1>
            <p className="mt-2 text-white-600">Five artists • Five artworks each</p>
            <Link href="/artists" className="mt-6 inline-block rounded-xl border px-4 py-2">
                View Artists →
            </Link>
        </main>
    );
}


