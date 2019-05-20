import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M13.5 11.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm-1 2.5h-1c-1.1 0-2 .9-2 2l1 6h1v-3h1v3h1l1-6c0-1.1-.9-2-2-2z" /></svg>);