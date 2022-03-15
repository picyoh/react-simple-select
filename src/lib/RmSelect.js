import React from "react";

function RmSelect(props) {
  const { name, options, title } = props;
  let label;
  if (title === undefined) {
    label = name.charAt(0).toUpperCase() + name.slice(1);
  }
  // title passed to props
  else {
    label = title;
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name}>
        {options.map((option, index) => {
          let optionName;
          option.name === undefined
            ? (optionName = option)
            : (optionName = option.name);

          return <option key={index}>{optionName}</option>;
        })}
      </select>
    </>
  );
}

export { RmSelect };
