import React from "react";
import Image from "next/image";

const Teams: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <Image
              src="/team2.jpg" // Replace with your image path
              alt="Pace Morby"
              width={300}
              height={300}
              quality={100}
              className=" w-[230px] h-[230px] lg:w-[70%] lg:h-[70%] mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Pace Morby</h3>
            <p className="text-gray-600">
               TV Show Host | Author
            </p>
            <p className="text-[#0000FF]">
              <a href="https://pacemorby.com/about/" className="hover:underline">
                Real Estate Investor
              </a>
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <Image
              src="/team4.jpg" // Replace with your image path
              alt="Jade Jarvis"
              width={300}
              height={300}
              quality={100}
              className=" w-[230px] h-[230px] lg:w-[70%] lg:h-[70%] mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jade Jarvis</h3>
            
          </div>

          {/* Card 3 */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <Image
              src="/team3.jpg" // Replace with your image path
              alt="Heather"
              width={300}
              height={300}
              quality={100}
              className=" w-[230px] h-[230px] lg:w-[70%] lg:h-[70%] mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Heather Kiddoo</h3>
            
          </div>
          {/* Card 4 */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <Image
              src="/team5.png" // Replace with your image path
              alt="Nathan"
              width={300}
              height={300}
              quality={100}
              className=" w-[230px] h-[230px] lg:w-[70%] lg:h-[70%] mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Nathan Barnes</h3>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
