import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <>
      <Navbar onPage="/" />
      <main className="flex-col flex-1">
        <div className="container relative p-6 mx-auto md:p-12 md:px-24">
          home page du8de
        </div>
      </main>
      <Footer />
    </>
  );
}
