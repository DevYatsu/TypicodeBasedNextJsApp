import QueryAppWrapper from "./components/QueryAppWrapper";
import "./globals.css";

export const metadata = {
  title: "App Test",
  description: "huyhu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased min-h-screen`}>
        <div className="relative flex flex-col min-h-screen dark:bg-slate-700 dark:text-white">
          <QueryAppWrapper>{children}</QueryAppWrapper>
        </div>
      </body>
    </html>
  );
}
