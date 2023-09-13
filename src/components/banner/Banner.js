import { bannerArray } from "../../Data/data";
import MainCarousel from "./MainCarousel";

import React from "react";

export default function Banner() {
  return (
    <div>
      <MainCarousel details={bannerArray} />
    </div>
  );
}
