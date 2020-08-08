import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "what is React?",
    content: "React is a front end JavaScript framework",
  },
];

export default () => {
  return (
    <h1>
      <Accordion items={items} />
    </h1>
  );
};
