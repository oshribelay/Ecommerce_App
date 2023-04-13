import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import Checkout from "./Checkout";
//

export default function Supplements(props) {
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
      <div>
        {items.map(
          (
            { name, title, price, shortDescription, itemId, first, second },
            idx
          ) => {
            return (
              <Item
                handleClick={props.handleClick}
                name={name}
                key={idx}
                id={idx}
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
      </div>
    </>
  );
}
