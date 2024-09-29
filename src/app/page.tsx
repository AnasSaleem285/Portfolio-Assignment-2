import Image from "next/image";
import pic from "./public/My first design 7.jpeg"; // Image for the Image component
import pic2 from "./public/programming-hd-2eo94s73hxhwjcta.jpg";
import Footer from "./footer-components/footer";

export default function Home() {
  return (
    <div
    >
      {/* Text section */}
      <div style={{ backgroundColor: "aqua", minHeight: "40vh", padding: "0px" }}>
        <div className="text-left bg-white bg-opacity-10 p-30 rounded-lg absolute top-10 left-10">
          <span className="block text-blue-100 font-bold">
            <span className="text-4xl text-red-500">This is me,</span>
            <br />
            <span className="text-9xl text-black">Anas Saleem</span>
            <br />
            <span className="text-5xl text-black">I am a Next.js Developer</span>
          </span>
        </div>
      </div>

      {/* Image section for pic1 (aligned to the right) */}
      <div className="absolute bottom-40 right-20">
        <Image src={pic} alt="anas" height={325} width={325} className="rounded-full" />
      </div>

      {/* Image section for pic2 (placed below the intro) */}
      <div className="mt-90 flex justify-center">
        <Image
          src={pic2}
          alt="programming"
          height={600} // Adjust height
          width={1400} // Adjust width as needed
          className="mt-50" // Adds margin at the top to push the image below the intro
        />
      </div>

      <Footer />
    </div>
  );
}
