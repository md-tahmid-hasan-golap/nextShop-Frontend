import Image from "next/image";
import Banner from "../components/Banner";
import Sections from "@/components/Featured ";
import Testimonials from "@/components/OurUsers ";
import StatsSection from "@/components/Stats";
import BlogSection from "@/components/Blog";

export default function Home() {
  return (
    <div>
      <Banner />
      <Sections></Sections>
      <Testimonials></Testimonials>
      <StatsSection></StatsSection>
      <BlogSection></BlogSection>
    </div>
  );
}
