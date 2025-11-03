// components/Header.tsx
import Link from "next/link";

export default function Header() {
    return (
        <header className="mb-6 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold">MP4 Havard Art Museum</Link>
            <nav className="flex gap-4 text-sm">
                <Link href="/artists">Artists</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    );
}
