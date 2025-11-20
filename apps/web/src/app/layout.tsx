import React from "react";
import { Lato } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

export const lato = Lato({
    weight: ["100", "300", "400", "700", "900"],
    variable: "--font-lato",
    subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Resume Parser - Jaicob",
    };
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" className="dark">
            <body className={`${lato.variable} antialiased`}>{children}</body>
        </html>
    );
};

export default RootLayout;
