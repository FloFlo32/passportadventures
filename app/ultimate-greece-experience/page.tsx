import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { TourDetail } from "@/components/sections/tour-detail";
import { getTour } from "@/content/data/tours";

const tour = getTour("ultimate-greece-experience")!;

export const metadata: Metadata = {
  title: `${tour.name} | Passport Adventures`,
  description: tour.tagline,
};

export default function GreecePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <TourDetail tour={tour} />
      </main>
      <Footer />
    </>
  );
}
