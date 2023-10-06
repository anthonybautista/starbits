import Concept from "./Concept";
import Participate from "./Participate";
import Tokenomics from "./Tokenomics";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div class="flex flex-col bg-gradient-to-b from-black via-black to-primary">
        <div className=" relative w-screen h-[45vh] sm:h-[60vh] md:h-[75vh] lg:h-[92vh] flex flex-col justify-center items-center text-primary">
          <img
            src={`${process.env.PUBLIC_URL}/images/starbits_logo.png`}
            alt="Background"
            className="object-contain"
          />
          <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
            An Experimental ERC20
          </p>
        </div>
        <Concept />
        <Tokenomics />
        <Participate />
        <div className="buffer"/>
        <Footer />
      </div>
    </>
  );
}
