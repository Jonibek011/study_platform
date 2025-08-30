import React, { memo } from "react";
import { cn } from "../util/cn";
import Card from "./Card";
const Cards = memo(function Cards({ className = "", cards, ...rest }) {
  return (
    <div
      {...rest}
      className={cn(
        `w-full grid px-2 md:p-0  lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-6  `,
        className
      )}
    >
      {cards?.darslar.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
});

export default Cards;
