// components/NewLinkForm.tsx
"use client";

import React, { FormEvent, useState } from "react";

type ApiResponse =
    | { ok: true; shortUrl: string }
    | { ok: false; error: string };

export default function NewLinkForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [successUrl, setSuccessUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setSuccessUrl(null);
        setCopied(false);

        if (!url || !alias) {
            setError("Please enter both URL and alias.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/shorten", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, alias }),
            });

            const data: ApiResponse = await res.json();

            if (!res.ok || !data.ok) {
                setError(
                    !data.ok ? data.error : "Something went wrong. Please try again.",
                );
                return;
            }

            setSuccessUrl(data.shortUrl);
            setUrl("");
            // Either keep alias or clear it:
            // setAlias("");
        } catch (err) {
            console.error(err);
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    async function handleCopy() {
        if (!successUrl) return;
        try {
            await navigator.clipboard.writeText(successUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // ignore
        }
    }

    return (
        <>
            {error && (
                <div className="alert alert-error">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label className="label">Long URL</label>
                    <input
                        type="url"
                        placeholder="https://example.com/some/very/long/path"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="input"
                    />
                </div>

                <div className="form-group">
                    <label className="label">Custom alias</label>
                    <div className="alias-row">
                        <span className="alias-prefix">/</span>
                        <input
                            type="text"
                            placeholder="my-link"
                            value={alias}
                            onChange={(e) => setAlias(e.target.value)}
                            className="input alias-input"
                        />
                    </div>
                    <p className="hint">
                        3–30 characters. Letters, numbers, _ and - only.
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="button-primary"
                >
                    {loading ? "Creating..." : "Create short URL"}
                </button>
            </form>

            {successUrl && (
                <div className="short-url-box">
                    <div className="short-url-label">Short URL created</div>
                    <div className="short-url-row">
                        <a
                            href={successUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="short-url-link"
                        >
                            {successUrl}
                        </a>
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="button-secondary"
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
