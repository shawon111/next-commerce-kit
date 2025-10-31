import BestSellingProducts from "@/components/pages/home/BestSellingProducts";
import FeaturedProducts from "@/components/pages/home/FeaturedProducts";
import Features from "@/components/pages/home/Features";
import HomeHero from "@/components/pages/home/HomeHero";
import TopRatedProducts from "@/components/pages/home/TopRatedProducts";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Features />
      <BestSellingProducts />
      <FeaturedProducts />
      <TopRatedProducts />
    </div>
  );
}
