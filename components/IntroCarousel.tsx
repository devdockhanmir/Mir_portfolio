import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

const IntroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
      }),
    ]
  );

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

  useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => {
      const slide = emblaApi.selectedScrollSnap();
      setActiveIndex(slide);
    };

    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((card, index) => (
            <div className="flex-[0_0_100%]" key={index}>
              <Card className="rounded-2xl border-none relative overflow-hidden mx-auto md:w-[80%] w-[95%] ">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={800}
                  quality={100}
                  className="w-full rounded-2xl md:h-[65vh] h-[70vh] z-0 object-cover"
                />
                <CardContent className="absolute top-0 left-0 z-10 flex items-end justify-center h-full w-full text-white p-0 border-none">
                  <div className="w-full h-1/2 bg-black backdrop-blur-md opacity-80 flex flex-col rounded-2xl p-4 justify-between ">
                    <div className="flex justify-center items-center h-full">
                      <div className="mt-2">
                        <p className="md:text-xl text-lg font-bold">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              activeIndex === index ? "bg-[#0C5304]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroCarousel;
