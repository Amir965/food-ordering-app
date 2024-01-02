import Image from "next/image";
import Hero from "@/components/layout/Hero"
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At magnam
            pariatur quasi consequatur magni natus vero esse dignissimos itaque
            neque facilis accusantium vitae beatae, repellendus dicta tempora
            accusamus culpa adipisci.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            accusantium dolor eaque consectetur, earum cupiditate minus
            provident quibusdam officiis corrupti repudiandae culpa quas! Alias
            tempora a quasi veritatis unde atque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            asperiores assumenda fugiat quaerat amet
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            href="tel:+917903111434"
            className="text-4xl underline text-gray-500"
          >
            +91 7903111434
          </a>
        </div>
      </section>
    </>
  );
}
