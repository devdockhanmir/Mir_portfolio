import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Rehab Loan",
      description: "Quick funding for property renovation. ",
      backDescription:
        "I found a distressed property in a prime location, but I lacked the funds for renovation. Creative Funding for help, and they provided me with a Rehab Loan that covered both the purchase and the renovation.",
      badge: "Adam M",
      image: "/test1.jpg",
    },
    {
      title: "DCSR Loan",
      description: "Fast, flexible financing for rentals.",
      backDescription:
        "I wanted to expand my rental portfolio and needed a reliable financing option. Creative Funding offered me a DSCR Rental Loan, which enabled me to purchase a new rental property. The loan terms were flexible, and the approval process was fast.",
      badge: "Karl T",
      image: "/test2.jpg",
    },
    {
      title: "Rehab Loan",
      description: "Financed renovations for community revitalization.",
      backDescription:
        "I purchased an old, run-down property with the vision of revitalizing it and improving the local community. With a Rehab Loan, I was able to finance extensive renovations.",
      badge: "Maria S",
      image: "/test3.jpg",
    },
    {
      title: "Bridge Loan",
      description: "Immediate funding for prime opportunity",
      backDescription:
        "When I came across a prime investment opportunity, I knew I had to act fast. However, my capital was tied up in another property that hadn't sold yet. Creative Funding came through with a Bridge Loan that gave me the immediate funds I needed.",
      badge: "Michael W",
      image: "/test4.jpg",
    },
  ];

  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    new Array(testimonials.length).fill(false)
  );

  const handleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {testimonials.map((card, index) => (
          <CarouselItem
            key={index}
            className="basis-[80%] sm:basis-1/2 lg:basis-1/3"
          >
            <ReactCardFlip
              isFlipped={flippedStates[index]}
              flipDirection="horizontal"
            >
              {/* Front Face */}
              <Card className="rounded-lg border-none mt-10 relative overflow-hidden h-[80vh] md:h-[75vh]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={800}
                  quality={100}
                  className="w-full h-full rounded-lg object-cover"
                />
                <CardContent className="absolute bottom-0 left-0 z-10 w-full p-0">
                  <div className="w-full h-48 bg-white/5 backdrop-blur-md flex flex-col rounded-b-lg p-6 justify-between">
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <p className="md:text-xl text-sm px-6 py-1 bg-white text-[#0C5304] rounded-lg">
                          {card.badge}
                        </p>
                        <p className="md:text-xl text-sm font-bold text-white">
                          {card.title}
                        </p>
                      </div>
                      <div className="h-12">
                        <p className="md:text-xl text-lg font-bold text-white line-clamp-2">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        className="mt-4 px-6 py-2 bg-green-800 text-white rounded hover:bg-green-700 transition-colors"
                        onClick={() => handleFlip(index)}
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Back Face */}
              <Card className="rounded-lg border-none mt-10 relative overflow-hidden h-[80vh] md:h-[75vh] bg-black/20">
                <CardContent className="absolute top-0 left-0 z-10 h-full w-full p-6">
                  <div className="w-full h-full bg-white/30 backdrop-blur-md flex flex-col rounded-lg p-6">
                    <div className="flex-1 space-y-6">
                      <div className="flex gap-4 items-center">
                        <p className="md:text-5xl text-sm px-6 py-1 bg-white text-[#0C5304] rounded-lg">
                          {card.badge}
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="md:text-xl text-base text-white font-normal">
                          "{card.backDescription}"
                        </p>
                      </div>
                    </div>
                    <button
                      className="px-6 py-2 bg-green-800 text-white rounded hover:bg-green-700 transition-colors"
                      onClick={() => handleFlip(index)}
                    >
                      Back
                    </button>
                  </div>
                </CardContent>
              </Card>
            </ReactCardFlip>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent md:flex hidden" />
      <CarouselNext className="bg-transparent md:flex hidden" />
    </Carousel>
  );
};

export default Testimonials;
