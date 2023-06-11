import Navbar from "../components/Navbar";

export const metadata = {
  title: "Posts page",
  description: "A list of all the posts on the website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar onPage="/posts" />
      <main className="flex-col flex-1 ">
        <div className="container relative p-6 mx-auto md:p-12 2xl:px-24">
          {children}
        </div>
      </main>
    </>
  );
}
