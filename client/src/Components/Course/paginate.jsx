import React from "react";

const Paginate = ({ perPage, totalCourse, changePage }) => {
  const items = [];

  for (let i = 1; i < Math.ceil(totalCourse / perPage) + 1; i++) {
    items.push(i);
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {items.map((item) => {
            return (
              <li
                onClick={() => changePage(item)}
                className="page-item"
                key={item}
              >
                <a className="page-link" href="##">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Paginate;
