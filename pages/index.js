import HeroBanner from "@/components/HeroBanner";
import HeroGallery from "@/components/HeroGallery";
import HeroMain from "@/components/HeroMain";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
export default function Home({ products }) {
  const firstPagination = products?.data?.slice(0, 6);
  const secondPagination = products?.data?.slice(5, 9);
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <HeroMain
          title="Cushioning for Your Miles"
          description="A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running."
          pagination={secondPagination}
        />
        <HeroGallery />
        <HeroMain
          title="Get Ready to Ignite Your Inner Athlete"
          description="Embrace the Power of Sport with Nike: Fuel Your Passion."
          pagination={firstPagination}
        />
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  return {
    props: { products },
  };
}
