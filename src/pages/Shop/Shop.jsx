import PageHeader from "../../components/UI/PageHeader";
import TopBar from "./TopBar/TopBar";
import Filters from "./Filters/Filters";
import View from "./View/View";

import classes from "./Shop.module.css";
import { useState } from "react";

function Shop() {
  const [viewStyle, setViewStyle] = useState("grid");

  return (
    <>
      <PageHeader title="Shop" />

      <div className={classes.shop}>
        <div className={classes.shop__content}>
          <TopBar setView={setViewStyle} />

          <div className={classes.flex}>
            <Filters />
            <View viewStyle={viewStyle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
