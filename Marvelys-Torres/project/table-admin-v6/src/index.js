import React from "react";
import ReactDOM from "react-dom";
import { Entry } from "./containers/entry";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bill } from "./containers/bill";
import { TableDetails } from "./containers/tableDetails";
import { Layout as MainLayout } from "./containers/layout";
import { Provider } from "react-redux";
import store from "./redux/store";
import "antd/dist/antd.css";
import "./index.css";
import { OrdersList } from "./containers/orders-list";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/orders-list" element={<OrdersList />} />
            <Route path="/table-details" element={<TableDetails />}></Route>
            <Route path="/bill" element={<Bill />}></Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
