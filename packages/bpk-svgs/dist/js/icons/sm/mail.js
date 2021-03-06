function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-.7 4.1l-5.2 5.2c-.3.3-.6.5-1 .7s-.7.2-1.1.2c-.8 0-1.6-.3-2.1-.9l-3.7-3.7-1.5-1.5C4.3 8.7 4 8.3 4 8c0-.2.1-.5.3-.7.2-.2.5-.3.7-.3s.7.3 1.1.7l5.2 4.2c.1.1.2.2.3.2s.3.1.4.1c.1 0 .3 0 .4-.1s.2-.1.3-.2l5.2-4.2c.4-.4.9-.7 1.1-.7s.5.1.7.3c.2.2.3.5.3.7 0 .3-.3.7-.7 1.1z" /></svg>;
});