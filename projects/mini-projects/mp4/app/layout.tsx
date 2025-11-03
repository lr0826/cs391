// app/layout.tsx
import "./globals.css";
import Header from "@/app/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="mx-auto max-w-6xl p-6">
        <Header />
        {children}
        </body>
        </html>
    );
}
