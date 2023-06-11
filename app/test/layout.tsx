import Navbar from "../components/Navbar";

export const metadata = {
  title: "Test Page",
  description: "Just a test page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-col flex-1">
        <div className="container relative p-6 mx-auto md:p-12 md:px-24">
          {children}
        </div>
      </main>
    </>
  );
}
