import React from "react";

import { RWebShare } from "../src";

export default {
  title: "Welcome",
};

export const Default = () => {
  const handleOnClick = (type) => {
    console.log(type)
  };

  return (
    <div>
      <style children="*{font-family: sans-serif}" />
      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "https://on.natgeo.com/2zHaNup",
          title: "Flamingos",
        }}
        closeText="X"
      >
        <button>Share 🔗</button>
      </RWebShare>
    </div>
  );
};
