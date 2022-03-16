import React from "react";

function RsSelect(props) {
  const {
    name,
    options,
    title
  } = props;
  let label;

  if (title === undefined) {
    label = name.charAt(0).toUpperCase() + name.slice(1);
  } // title passed to props
  else {
    label = title;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/React.createElement("select", {
    name: name,
    id: name
  }, options.map((option, index) => {
    let optionName;
    option.name === undefined ? optionName = option : optionName = option.name;
    return /*#__PURE__*/React.createElement("option", {
      key: index
    }, optionName);
  })));
}

export { RsSelect };