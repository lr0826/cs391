// components/Header.tsx
export default function Header() {
    return (
        <header className="header">
            <h1 className="header-title">URL Shortener</h1>
            <p className="header-subtitle">
                Enter a long URL and a custom alias to create a shareable short link.
            </p>
        </header>
    );
}
