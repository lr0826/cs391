// app/artists/error.tsx
"use client";

export default function Error({
                                  error,
                                  reset,
                              }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <main>
            <h1 className="text-2xl font-semibold">Artists</h1>
            <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-4">
                <p className="font-medium">The museum API seems unavailable.</p>
                <p className="text-sm">{error.message}</p>
                <button onClick={() => reset()} className="mt-3 rounded border px-3 py-2">
                    Try again
                </button>
            </div>
        </main>
    );
}

