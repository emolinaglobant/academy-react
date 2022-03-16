import React from "react";
import { useNewsApi } from "../context/newsApiContext/NewsApiContext";
import CardNew from "./CardNew";
import SpinnerLoading from "../components/SpinnerLoading";
import "../css/ContentInitialPageStyle.css";

function ContentInitialPage() {
  const { dataApi } = useNewsApi();

  return (
    <>
      <h1 className="mb-4">Pokemon News!</h1>
      <section className="container pt-4 pb-4 contentInitialPage">
        <article className="card-group-news">
          {dataApi ? (
            dataApi.articles.map((news, index) => (
              <CardNew news={news} key={index} />
            ))
          ) : (
            <SpinnerLoading />
          )}
        </article>
      </section>
    </>
  );
}

export default ContentInitialPage;
