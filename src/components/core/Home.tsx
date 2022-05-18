import React from "react";
import Layout from "./Layout";
import { history } from "../../store/history";

const Home = () => {
  return (
    <Layout>
      <div>Home</div>
      <button
        onClick={() => {
          history.push("/shop");
        }}
      >
        点击
      </button>
    </Layout>
  );
};

export default Home;
