import React , { useEffect, useState }from "react";
import Item from "./Item";
import Slideshow from "./Slideshow";
import axios from "axios";
import Checkout from "./Checkout";

/*const items = [
  {
    title: "Creatine Monohydrate Powder",
    price: "45.00 $",
    itemId: creatine,
    shortDescription:
      "One of the most highly researched forms of creatine in the world — our hard-hitting powder is scientifically proven to increase physical performance, by improving overall power.",
    first: {
      title: "Key Benefits:",
      desc:
        "Proven to increase physical performance, Can help increase power, Convenient everyday supplement, Perfect for all sports and exercise",
    },
    second: {
      title: "Nutritional Information:",
      desc:
        "Unflavoured, Serving Size - 1 Scoop (3g), Servings Per Container - 83 (250g), 166 (500g), 333 (1kg)",
    },
  },
  {
    title: "Impact Whey Protein",
    price: "52.00 $",
    itemId: whey,
    shortDescription: "Premium whey packed with 21g of protein per serving, for the everyday protein you need from a quality source — with all-natural nutritionals, it's ideal for all of your fitness goals. ",
    first: {
        title: "Key Benefits:",
        desc: "Our most popular protein, Over 80% protein per serving, Excellent amino acid profile, HighestBiological Value of any protein, Ideal for building and repairing tissue, Great tasting and easy to mix"
    },
    second: {
        title: "Nutritional Information:",
        desc: "Cookies and Cream, Serving Size - 1 Scoop (25g), Servings Per Container - 10 (250g), 40 (1kg), 100 (2.5kg), 200 (5kg)"
    },
  },
  {
    title: "Impact Protein Bar",
    price: "64.00 $",
    itemId: bar,
    shortDescription: "Introducing our tastiest protein bar ever. Yes, really! But don’t just take our word for it. Our Impact Protein Bars are a triple-layered delight. With a soft and chewy low sugar caramel core",
    first: {
        title: "Key Benefits:",
        desc: "High protein, Low sugar, High fibre, Convenient"
    },
    second: {
        title: "Nutritional Information:",
        desc: "Energy  357kcal, Fat 13g, of which saturates	6.7g, Carbohydrate	32g, of which sugars 3.1g, Protein	31g"
    },
  },
];
*/
export default function Home(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await axios.get("http://localhost:8000/supplements");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      <Slideshow />
      <div className="item-container">
      {items.map(
          (
            { name, title, price, shortDescription, itemId, first, second, priceInCents },
            idx
          ) => {
            return (
              <Item
                handleClick={props.handleClick}
                name={name}
                key={name}
                id={idx}
                priceInCents={priceInCents}
                title={title}
                price={price}
                shortDescription={shortDescription}
                imageUrl={itemId}
                firstTitle={first.title}
                firstDesc={first.desc}
                secondTitle={second.title}
                secondDesc={second.desc}
              />
            );
          }
        )}
        <Checkout />
      </div>
    </>
  );
}
