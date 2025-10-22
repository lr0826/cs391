import { useEffect } from "react";

export default function PageTitle({ page, site = "Run's Resume" }:{
    page: string; site?: string;
}) {
    useEffect(() => {
        document.title = `${page} | ${site}`;   //  updates <head><title>
    }, [page, site]);
    return null; // renders nothing in the body
}