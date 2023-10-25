import React from "react";
import classes from "./TopBar.module.css";
import ShopSelect from "../../../components/UI/ShopSelect";
import ViewButton from "../../../components/UI/ViewButton";

function TopBar(props) {
  return (
    <div className={classes.topbar}>
      <div>
        <h4 className="subtitle-2">E-commerce Accesories & House Furniture</h4>
        <p>About 9,620 results (0.62 seconds)</p>
      </div>

      <div className={classes.topbar__options}>
        <div className={classes.option__container}>
          <h5 className={classes.option__title}>Per Page: </h5>
          <ShopSelect options={[5, 10, 15, 20, 30]} type="_limit" />
        </div>
        <div className={classes.option__container}>
          <h5 className={classes.option__title}>Sort: </h5>
          <ShopSelect
            options={[
              "Best Match",
              "Lowest Price",
              "Highest Price",
              "A-Z",
              "Z-A",
            ]}
            type="sort"
          />
        </div>
        <div className={classes.option__container}>
          <h5 className={classes.option__title}>View: </h5>
          <ViewButton setViewStyle={props.setView} type={"grid"} />
          <ViewButton setViewStyle={props.setView} type={"list"} />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
