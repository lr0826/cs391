// app/page.tsx
import Header from "@/app/components/Header";
import NewLinkForm from "@/app/components/NewLinkForm";

type HomePageProps = {
    searchParams: Promise<{
        error?: string;
        alias?: string;
    }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
    // Unwrap the Promise from Next.js
    const params = await searchParams;

    const notFoundError = params.error === "not-found";
    const missingAlias = params.alias ?? "";

    return (
        <main className="page">
            <div className="card">
                <Header />

                {notFoundError && (
                    <div className="alert alert-warning">
                        No URL found for alias{" "}
                        <span className="alias-mono">{missingAlias}</span>.
                    </div>
                )}

                <NewLinkForm />
            </div>
        </main>
    );
}
