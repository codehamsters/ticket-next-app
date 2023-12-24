import { Inter } from "next/font/google";
import "./globals.css";
import "./main.css";
import NavBar from "./Componenets/NavBar/NavBar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket App",
  description: "Basic Ticket App for queries",
};

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head
        style={{
          color: "#ffffff",
        }}
      >
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
          color="white"
        />
      </head>
      <body className={inter.className}>
        <div className="app-container">
          <NavBar />
          <div className="children-container">{children}</div>
        </div>
      </body>
    </html>
  );
}
