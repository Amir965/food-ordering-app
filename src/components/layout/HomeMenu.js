"use client";
import Image from "next/image";
import MenuItem from "@/components/menu/MenuItem";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { useEffect, useState } from "react";

const HomeMenu = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch("/api/menuItems").then((res) => {
      res.json().then((menuitems) => {
        setBestSellers(menuitems);
        console.log("BestSellers", bestSellers);
      });
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
      <div className="grid grid-cols-3 gap-4">
        {bestSellers?.length > 0 &&
          bestSellers.map((item) => <MenuItem key={item._id} {...item} />)}
      </div>
    </section>
  );
};

export default HomeMenu;