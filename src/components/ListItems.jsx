import style from "./ListItems.module.css";
import { MdDelete } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";

const ListItems = ({ item, handelDeleteBtn, handelButButton, bought }) => {
  // console.log(item);
  return (
    <li
      className={`list-group-item  ${style["sk-item"]} ${bought && "active"} `}
    >
      <span className={style["kg-span"]}>{item}</span>
      <button
        type="button"
        className="btn btn-danger buy"
        onClick={() => handelDeleteBtn(item)}
      >
        <MdDelete />
      </button>

      <button type="button" className="btn btn-info" onClick={handelButButton}>
        <IoBagAdd />
      </button>
    </li>
  );
};
export default ListItems;
