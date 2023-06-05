import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
// import ProPageHeader from "@/components/ProductsPage";
import HeroBanner from "@/components/HeroBanner";
import { useState } from "react";

const displayProducts = (val, data) => {
  if (val === "a-z") {
    return (
      data &&
      data
        .sort((a, b) => (a.attributes.name > b.attributes.name ? 1 : -1))
        .map((p) => <ProductCard key={p?.id} data={p} />)
    );
  } else if (val === "z-a") {
    return (
      data &&
      data
        .sort((a, b) => (a.attributes.name < b.attributes.name ? 1 : -1))
        .map((p) => <ProductCard key={p?.id} data={p} />)
    );
  } else if (val === "latest") {
    return (
      data &&
      data
        .sort((a, b) =>
          a.attributes.createdAt > b.attributes.createdAt ? 1 : -1
        )
        .map((p) => <ProductCard key={p?.id} data={p} />)
    );
  } else if (val === "low") {
    return (
      data &&
      data
        .sort((a, b) => (a.attributes.price > b.attributes.price ? 1 : -1))
        .map((p) => <ProductCard key={p?.id} data={p} />)
    );
  } else if (val === "high") {
    return (
      data &&
      data
        .sort((a, b) => (b.attributes.price > a.attributes.price ? 1 : -1))
        .map((p) => <ProductCard key={p?.id} data={p} />)
    );
  } else {
    return data && data.map((p) => <ProductCard key={p?.id} data={p} />);
  }
};

const Home = ({ products }) => {
  const data = products?.data;
  // console.log(data);

  // const [data, setdata] = useState(data);
  const [value, setValue] = useState("");

  return (
    <main>
      <HeroBanner />
      {/* <ProPageHeader /> */}
      <Wrapper>
        <div className="flex items-center justify-between md:px-2 py-4 md:mt-8">
          <div className="capitalize font-semibold leading-tight text-xl md:text-[34px]">
            New Arrivals
          </div>
          <div className="flex flex-col items-start md:flex-row md:items-center gap-1">
            <div className="font-semibold">
              <label htmlFor="sort">Sort </label>
              <select
                defaultValue={"Price(a - z)"}
                className="hover:text-black border"
                name="sort"
                id="sort"
                onChange={(e) => setValue(e.target.value)}
              >
                <option value="regular" disabled>
                  Regular
                </option>
                <option value="a-z">Name(A-Z)</option>
                <option value="z-a">Name(Z-A)</option>
                <option value="low">Price(Lowest)</option>
                <option value="high">Price(Highest)</option>
                <option value="latest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </Wrapper>
      <hr />
      <Wrapper>
        {/* Product dataing  */}
        <div className="flex justify-center items-center flex-wrap gap-4 my-14 px-5 md:px-0">
          {/* {value === "low"
            ? data &&
              data
                .sort((a, b) =>
                  a.attributes.price > b.attributes.price ? 1 : -1
                )
                .map((p) => <ProductCard key={p?.id} data={p} />)
            : data &&
              data
                .sort((a, b) =>
                  b.attributes.price > a.attributes.price ? 1 : -1
                )
                .map((p) => <ProductCard key={p?.id} data={p} />)} */}

          {displayProducts(value, data)}
          {/* {products?.data?.map((p) => {
            return <ProductCard key={p?.id} data={p} />;
          })} */}
        </div>
      </Wrapper>
    </main>
  );
};

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  return {
    props: {
      products,
    },
  };
}

export default Home;
