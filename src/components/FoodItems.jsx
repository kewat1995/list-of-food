import { useState } from "react";
import ListItems from "./ListItems";

const FoodItems = ({ foodItems, handelDeleteBtn }) => {
  const [activeItems, setActiveitems] = useState([]);

  const handelButButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveitems(newItems);
  };
  return (
    <div>
      <ul className="list-group">
        {foodItems.map((item) => (
          <ListItems
            key={item}
            item={item}
            bought={activeItems.includes(item)}
            handelDeleteBtn={handelDeleteBtn}
            handelButButton={() => handelButButton(item)}
          />
        ))}
      </ul>
    </div>
  );
};
export default FoodItems;
