"use client";
import Form from "@/components/Form";
import { Footer } from "@/components/Footer";
import Form2 from "@/components/Form2";
export default function Home() {
  

  return (
    <div

      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      
      <section
        className="relative  flex flex-col items-center text-white mt-16 justify-center"
        id="form_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            FORM
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="form_heading"
        >
          Your last step to financial freedom
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="form_section"
        >
         Fill out our detailed form to help us find you the right deal
        </p>
        <Form2/>
      </section>
      <Footer />
    </div>
  );
}
