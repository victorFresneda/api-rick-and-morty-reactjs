import React from "react";

export const Characters = ({ characters }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4">
      {characters.map((item, index) => (
        <div key={index} className="col mt-4 ">
          {/* <img src={item.image} alt=""/> */}
          <div className="card align-items-center p-3 " style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top rounded-circle" alt="..." />
            <div
              className="card-body row text-center align-items-center"
              style={{ width: "100%", height: "12rem"}}
            >
              <h5 className="card-title" >Name: {item.name}</h5>
              <p className="card-subtitle mb-2 text-muted ">
                Origin: {item.origin.name}
              </p>
              <a href={item.image} target="_blank" className="btn btn-info btn-lg mt-4" > 
                Image
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
