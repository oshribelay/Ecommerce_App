import React, { useEffect, useState } from "react";
import Axios from "axios";
import Item from "./Item";
//
export default function Supplements() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await Axios.get("http://localhost:8000/supplements");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchItems();
  }, []);
  return (
    <div>
      {items.map(
        (
          { name, title, price, shortDescription, itemId, first, second },
          idx
        ) => {
          return (
            <Item
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
  );
}
