import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/title";
import { Table } from "antd";
import "./index.css";

const columns = [
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Hour",
    dataIndex: "hour",
    key: "hour",
  },
];

export const OrdersList = () => {
  const { allOrders } = useSelector((state) => state.allDishes);
  const navigate = useNavigate();
  const backToMain = () => {
    navigate("/");
  };

  return (
    <main aria-label="orders summary">
      <Title text="Orders of the day" />
      <section className="orders-summary">
        <Table
          aria-label="table with the summary of day's orders"
          dataSource={allOrders}
          columns={columns}
          pagination={false}
        />
        <section className="section-button">
          <button className="direction-button" onClick={backToMain}>
            back to main
          </button>
        </section>
      </section>
    </main>
  );
};
