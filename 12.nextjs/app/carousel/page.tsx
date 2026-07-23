"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Carousel className="w-full max-w-md">
        <CarouselContent>
          <CarouselItem>
            <div className="h-60 flex items-center justify-center rounded-lg bg-blue-500 text-white text-3xl font-bold">
              Slide 1
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="h-60 flex items-center justify-center rounded-lg bg-green-500 text-white text-3xl font-bold">
              Slide 2
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="h-60 flex items-center justify-center rounded-lg bg-red-500 text-white text-3xl font-bold">
              Slide 3
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}