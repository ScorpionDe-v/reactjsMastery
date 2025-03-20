import React from "react";

const Laptop = ({ brandName, model, price }) => { ///internal css
    // const obj={
    //     backgroundColor:'purple',
    //     padding :'15px',
    //     margin:'20px',
    //     borderRadius:'12px',
    //     border:'5px solid orange'

    // }
  return (
    //inline styling
    <div
    //   style={{
    //     backgroundColor: "yellowgreen",
    //     padding: "12px",
    //     margin: "15px",
    //     borderRadius: "9px",
    //     border: "3px solid green",
    //   }}

    // style={obj}
   
    className="div"

    >
      <h3>Brandname = {brandName}</h3>
      <h3>Model = {model}</h3>
      <h3>Price = ${price}</h3>
    </div>
  );
};

export default Laptop;
