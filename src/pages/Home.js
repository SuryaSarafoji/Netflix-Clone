import React from "react";
import Main from "../components/Main";
import requests from "../requests";
import Row from "../components/Row";

function Home() {
  return (
    <div>
      <Main />
      {requests.map((item, id) => {
        return <Row key={id} uniq={id} type={item.type} url={item.url} />;
      })}
    </div>
  );
}

export default Home;
