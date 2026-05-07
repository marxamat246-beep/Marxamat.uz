import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marxamat.uz",
  description: "Лучшие хозтовары и стройматериалы в Узбекистане",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
