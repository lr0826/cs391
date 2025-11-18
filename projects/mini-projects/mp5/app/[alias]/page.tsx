// app/[alias]/page.tsx
import { redirect } from "next/navigation";
import getCollection, { URLS_COLLECTION } from "@/db";
import type { Document } from "mongodb";

interface UrlDoc extends Document {
    alias: string;
    url: string;
    createdAt: Date;
}

type AliasPageProps = {
    params: Promise<{
        alias: string;
    }>;
};

export default async function AliasRedirectPage({ params }: AliasPageProps) {
    // Unwrap the Promise from Next.js
    const { alias } = await params;

    const urls = await getCollection<UrlDoc>(URLS_COLLECTION);
    const doc = await urls.findOne({ alias });

    if (!doc) {
        redirect(`/?error=not-found&alias=${encodeURIComponent(alias)}`);
    }

    redirect(doc.url);
}
