import React, { useContext, useState } from "react";
import photo from "../img/inconeAdd.svg";
import "../styles/incomeAdd.css";
import { incomeContext } from "../contexts/IncomeContextProvider";
import { historyContext } from "../contexts/HistoryContextProvider";
import { useNavigate } from "react-router-dom";
const IncomeAdd = () => {
  const navigate = useNavigate();
  const { addProductToHistory } = useContext(historyContext);
  const { addIncome } = useContext(incomeContext);
  const [amount1, setAmount] = useState(0);

  function handleAdd(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (!amount1.trim()) {
      alert("Заполните все поля!");
      return;
    }

    let amount = +amount1;
    const title = "Доходы";
    let obj = {
      amount,
      title,
    };
    addProductToHistory(obj);
    navigate("/income");
    addIncome(amount);
    setAmount(0);
  }

  return (
    <>
      <form onSubmit={e => handleAdd(e)}>
        <img
          className="add_photo"
          style={{ position: "absolute", zIndex: 2, bottom: 0, left: 0 }}
          src={photo}
          alt=""
        />
        <div className="add">
          <h2>Add Income </h2>
          <div className="add_inp">
            <input
              className="inp1 three"
              placeholder="Amount"
              type="number"
              value={amount1}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <button className="btn_save" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default IncomeAdd;
