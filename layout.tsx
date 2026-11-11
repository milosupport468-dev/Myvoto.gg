import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "MYVOTO.GG", description: "Directorio de bots y servidores de Discord." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html>; }
