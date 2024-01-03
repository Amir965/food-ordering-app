/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import MenuItem from "@/components/menu/MenuItem";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Loader from "@/components/icons/Loader";
import { useEffect, useState } from "react";

const HomeMenu = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("/api/menuItems").then((res) => {
  //     res.json().then((menuitems) => {
  //       setBestSellers(menuitems);
  //       console.log("BestSellers", bestSellers);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    fetch("/api/menuItems")
      .then((res) => res.json())
      .then((menuitems) => {
        setBestSellers(menuitems);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle error and set loading to false
      });
  }, []);

  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={"/sallad1.png"} alt={"sallad"} width={109} height={189} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={"/sallad2.png"} alt={"sallad"} width={107} height={195} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={"Check out"}
          mainHeader={"Our Best Sellers"}
        />
      </div>

      {loading ? (
        <div className="flex justify-center mt-10">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bestSellers?.length > 0 &&
            bestSellers.map((item) => <MenuItem key={item._id} {...item} />)}
        </div>
      )}
    </section>
  );
};

export default HomeMenu;
