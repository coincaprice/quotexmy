"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Terwase",
    date: "May 03, 2025",
    earned: "$913",
    rating: 5,
    text: "The interface is easy and simple to understand and use. The proximity ratio for placing an up or down trade/buy or sell ratio is 1:1. The app work...",
  },
  {
    name: "Abhi",
    date: "February 28, 2025",
    earned: "$1041",
    rating: 5,
    text: "Quotex is a great trading platform. Previously, I tried some trading apps, but now that I have found Quotex, I am sticking to it. Moreover, their...",
  },
  {
    name: "Sonal",
    date: "July 25, 2025",
    earned: "$858",
    rating: 5,
    text: "I've had nothing but positive experiences with Quotex over the years that I've been using it. The platform's intuitive and user-friendly design...",
  },
  {
    name: "Masroor",
    date: "October 11, 2025",
    earned: "$428",
    rating: 5,
    text: "I'm thrilled to share my experience with QXBroker! From the moment I signed up, I felt welcomed by their intuitive platform and fantastic trading...",
  },
  {
    name: "Abdul K",
    date: "March 09, 2025",
    earned: "$259",
    rating: 5,
    text: "I've been using Quotex for quite a while now, and I can confidently say that it is a trustworthy platform. When I deposit funds into my account...",
  },
  {
    name: "Zaink",
    date: "May 20, 2024",
    earned: "$134",
    rating: 5,
    text: "I've been using Quotex for a while now and find it to be a reliable trading platform. The interface is easy to use, and trades go through smoothly...",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <Card
      className="hover-elevate transition-all duration-300 h-full"
      data-testid={`testimonial-${index + 1}`}
    >
      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground">
            {testimonial.name}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{testimonial.date}</span>
            <span className="font-semibold text-primary">
              Earned {testimonial.earned}
            </span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-primary text-primary"
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {testimonial.text}
        </p>

        {/* Read More Link */}
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-primary hover-elevate"
          data-testid={`link-read-more-${index + 1}`}
        >
          Read More →
        </a>
      </CardContent>
    </Card>
  );
};

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Traders Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied traders who have achieved success with Quotex
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_85%] min-w-0">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full"
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full"
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
