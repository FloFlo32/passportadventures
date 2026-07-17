import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeAbout } from "@/components/sections/home-about";
import { HomeHighlights } from "@/components/sections/home-highlights";
import { HomeGroupTrips } from "@/components/sections/home-group-trips";
import { HomeAdvisor } from "@/components/sections/home-advisor";
import { HomeSocial } from "@/components/sections/home-social";
import { HomeBanner } from "@/components/sections/home-banner";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: `${brand.name} | ${brand.tagline}`,
  description: brand.description,
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HomeHero />
        <HomeAbout />
        <HomeHighlights />
        <HomeGroupTrips />
        <HomeAdvisor />
        <HomeSocial />
        <HomeBanner />
      </main>
      <Footer />
    </>
  );
}
