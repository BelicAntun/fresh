import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresh kemijsko čišćenje",
  description:
    "Fresh kemijsko čišćenje - Vaš pouzdani partner za profesionalne usluge čišćenja tepiha. Specijalizirani smo za osvježavanje vaših tepiha, ostavljajući ih svježima i čistima. Kontaktirajte nas danas za visokokvalitetna rješenja čišćenja tepiha.",
  keywords:
    "Pranje tepiha, pranje auta, pranje nameštaja, pranje stolica, pranje sedišta, kemijsko čišćenje tepiha, kemijsko čišćenje nameštaja, kemijsko čišćenje stolica, kemijsko čišćenje sjedišta, dubinsko pranje tepiha, dubinsko pranje namještaja, dubinsko pranje stolica, dubinsko pranje sjedišta, dubinsko kemijsko čišćenje tepiha, dubinsko kemijsko čišćenje nameštaja, dubinsko kemijsko čišćenje sedišta, pranje tepiha Zagreb, pranje tepiha Novi Zagreb",
  authors: [{ name: "Fresh kemijsko čišćenje" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning={true}>
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
