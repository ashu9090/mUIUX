import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 outline-none
       bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-md`}
    >
      Get Started
    </button>
  );
};

export default Button;
