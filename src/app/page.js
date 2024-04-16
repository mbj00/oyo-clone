import Image from "next/image";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";

export default function Home() {
  return (
    <main>      
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className=" my-12">
          <Image src={"/banner1.avif"} alt="banner1" height={200} width={200}
            className="h-60 w-full" />
        </div>
        <div className="mb-12">
          <Image src={"/banner2.avif"} alt="banner1" height={200} width={200}
            className="h-30 w-full" />
        </div>
        <Newsletter />
      </div>
      <Footer1/>
      <Footer2/>
      <Footer/>
    </main>
  );
}
