import Link from "next/link";

export function Header() {
    const LinkStyle = "p-1 m-2 text-xl hover:underline";
    return (
        <nav>
            <ul>
                <Link href={`/`} className={LinkStyle}>Home</Link>
            </ul>
            <ul>
                <Link href={`/about`} className={LinkStyle}>About</Link>
            </ul>
        </nav>
    )
}