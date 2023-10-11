import React, { useEffect, useState } from "react";
import classes from "./Filters.module.css";
import Filter from "../../../components/UI/Filter";
import Svg from "../../../components/UI/Svg";
import ColorFilter from "../../../components/UI/ColorFilter";
import PriceFilter from "../../../components/UI/PriceFilter";

function Filters() {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/filters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFilters(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.filters}>
      {filters.map((filter, idx) => {
        return (
          <div key={idx} className={classes.filters__container}>
            {filter.options.length > 0 && (
              <h3 className={"heading-4 " + classes.title}>
                {filter.type.charAt(0).toUpperCase() + filter.type.slice(1)}
              </h3>
            )}

            {filter.type !== "colors" &&
              filter.type !== "price" &&
              filter.options.map((option, i) => {
                return (
                  <Filter
                    color={filter.color}
                    type={filter.type}
                    value={option}
                    key={i}
                  >
                    {filter.type === "rating" ? (
                      [...Array(5)].map((item, idx) => {
                        return (
                          <Svg
                            key={idx}
                            id="Star"
                            width="1.2rem"
                            height="1.2rem"
                            fill={
                              idx <= option - 1
                                ? "var(--color-secondary)"
                                : "var(--color-grey-2)"
                            }
                          />
                        );
                      })
                    ) : (
                      <p className="body-text-regular-sm">
                        {option}
                        {filter.type === "offer" && "% Cashback"}
                      </p>
                    )}
                  </Filter>
                );
              })}

            {filter.type === "colors" && (
              <div className={classes.colors__container}>
                {filter.options.map((color, i) => {
                  return (
                    <ColorFilter type={filter.type} value={color} key={i} />
                  );
                })}
              </div>
            )}

            {filter.type === "price" &&
              filter.options.map((price, i) => {
                return (
                  <PriceFilter
                    type={filter.type}
                    color={filter.color}
                    gte={price[0]}
                    lte={price[1]}
                    key={i}
                  />
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default Filters;
