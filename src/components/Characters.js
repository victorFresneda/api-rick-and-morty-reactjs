import React from "react";

export const Characters = ({ characters }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3">
      {characters.map((item, index) => (
        <div key={index} className="col mt-4 ">
          <div
            className="card align-items-center p-2 "
            style={{ minwidth: "200px" }}
          >
            <img
              src={item.image}
              className="card-img-top rounded-circle"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Name: {item.name}</h5>
              <p className="card-subtitle  text-muted ">
                Origin: {item.origin.name}
              </p>
              <a
                href={item.image}
                target="_blank"
                className="btn btn-info btn-block"
              >
                Image
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
