import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import ItemsInput from "./components/ItemsInput";
import FoodItems from "./components/FoodItems";
import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems = ["Dal", "Roti", "Salad", "Vegetables", "Milk", "Ghee"];

  const [foodItems, setFoodItems] = useState([]);

  const handelInput = (e) => {
    if (e.key === "Enter") {
      let netItems = e.target.value;
      let newFoodItems = [...foodItems, netItems];
      e.target.value = "";

      setFoodItems(newFoodItems);
    }
  };

  const handelDeleteBtn = (item) => {
    const newItem = foodItems.filter((items) => items !== item);

    setFoodItems(newItem);
  };
  return (
    <Container>
      <div className="food-container ">
        <h1 className="headings">list of foodItems</h1>
        <ItemsInput onChangeInput={handelInput} />
        {foodItems == 0 ? (
          <ErrorMessage />
        ) : (
          <FoodItems foodItems={foodItems} handelDeleteBtn={handelDeleteBtn} />
        )}
      </div>
    </Container>
  );
}

export default App;
