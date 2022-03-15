import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DishBillList } from "../../components/dishBillList";
import { Title } from "../../components/title";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotalAction,
  resetAllAction,
  saveAtOrdersAction,
} from "../../redux/actions/dishActions";
import "./index.css";
import dayjs from "dayjs";

export const Bill = () => {
  const dispatch = useDispatch();
  const { total, selectedWaiter } = useSelector((state) => state.allDishes);
  const navigate = useNavigate();
  const backToMain = () => {
    navigate("/");
  };
  const backToTable = () => {
    navigate("/table-details");
  };

  const handlePrint = () => {
    dispatch(
      saveAtOrdersAction({
        id: Date.now(),
        date: dayjs(Date.now()).format("DD/MM/YYYY"),
        hour: dayjs(Date.now()).format("HH:mm:ss"),
        total: `$${total}`,
      })
    );
    navigate("/orders-list");
    dispatch(resetAllAction());
  };
  useEffect(() => {
    dispatch(getTotalAction());
  }, []);

  return (
    <section aria-label="bill section">
      <Title text="Bill" />
      <p aria-label="waiter who attended the service">
        Waiter : {selectedWaiter}
      </p>
      <DishBillList />
      <p aria-label="account total" className="total">
        TOTAL : $ {total}
      </p>
      <section aria-label="direction button" className="button-section">
        <button className="direction-button" onClick={backToMain}>
          back to main
        </button>
        <button className="direction-button" onClick={backToTable}>
          back to table
        </button>
        <button onClick={handlePrint} className="direction-button">
          print bill
        </button>
      </section>
    </section>
  );
};
