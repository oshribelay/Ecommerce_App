import React from "react";
import Item from "./Item";
import Slideshow from "./Slideshow";

const items = [
  {
    title: "Creatine Monohydrate Powder",
    price: "45.00 $",
    imageUrl: "",
    shortDescription:
      "One of the most highly researched forms of creatine in the world — our hard-hitting powder is scientifically proven to increase physical performance, by improving overall power.",
    firstTitle: "Key Benefits:",
    firstDesc:
      "Proven to increase physical performance, Can help increase power, Convenient everyday supplement, Perfect for all sports and exercise",
    secondTitle: "Nutritional Information:",
    secondDesc:
      "Unflavoured, Serving Size - 1 Scoop (3g), Servings Per Container - 83 (250g), 166 (500g), 333 (1kg)",
  },
  {
    title: "",
    price: "",
    imageUrl: "",
    shortDescription: "",
    firstTitle: "",
    firstDesc: "",
    secondTitle: "",
    secondDesc: "",
  },
  {
    title: "",
    price: "",
    imageUrl: "",
    shortDescription: "",
    firstTitle: "",
    firstDesc: "",
    secondTitle: "",
    secondDesc: "",
  },
];

export default function Home() {
  return (
    <>
      <Slideshow />
      <div className="item-container">
        {items.map((item, idx) => {
          return (
            <Item
              key={idx}
              id={idx}
              title={item.title}
              price={item.price}
              shortDescription={item.shortDescription}
              imageUrl={item.imageUrl}
              firstTitle={item.firstTitle}
              firstDesc={item.firstDesc}
              secondTitle={item.secondTitle}
              secondDesc={item.secondDesc}
            />
          );
        })}
      </div>
    </>
  );
}
