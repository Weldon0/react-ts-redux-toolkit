import React, { FC, PropsWithChildren } from "react";

const Home: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div>
      <h1>layout</h1>
      <hr />
      {children}
    </div>
  );
};

export default Home;
