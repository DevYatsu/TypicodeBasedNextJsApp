import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Login",
  description: "Login to your account.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar onPage="/login" />
      <main className="flex-col flex-1 ">
        <div className="container relative h-full p-6 mx-auto md:p-12 2xl:px-24">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
