// TODO instead of string ("Loading") return material loader
import Loader from "./loader";
import React from "react";
import { memo } from "react";
const SuspenseComponent = () => <Loader></Loader>;

export default memo(SuspenseComponent);

//memoized
//material loader from fontawesome, tested on 'slow 3g' in Chrome, it works.
