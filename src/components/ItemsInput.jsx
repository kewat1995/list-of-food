import style from "./ItemsInput.module.css";
const ItemsInput = ({ onChangeInput }) => {
  return (
    <div>
      <input
        className={style.input_box}
        type="text"
        onKeyDown={onChangeInput}
        placeholder=" something write here"
      />
    </div>
  );
};
export default ItemsInput;
