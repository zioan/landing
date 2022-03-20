import React from "react";

function PricingItem({ title, description, price, listItems, feature }) {
  return (
    <div className="mb-6 lg:mb-0 max-w-[300px] mx-auto lg:mx-0">
      {/*  h-full (for collumns with same hight) */}
      <div className="block rounded-lg  ">
        <div
          className={feature ? "bg-white shadow-lg" : "bg-gray-100 shadow-lg"}
        >
          <div className="p-6 ">
            <p
              className={
                feature ? " text-center mb-6 text-xl " : "mb-4 text-xl"
              }
            >
              <strong>{title}</strong>
            </p>
            <p className="mb-4">{description}</p>
            <h3 className="text-4xl mb-10 mt-4">
              <strong>$ {price}</strong>
            </h3>
            <button
              type="button"
              className="main-btn"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Choose Package
            </button>
          </div>
          <div className="p-6">
            <ol className="list-inside">
              {listItems.map((item, index) => {
                return (
                  <li className="mb-4 flex items-center" key={index}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className={
                        feature
                          ? "text-heading-yellow w-4 h-4 mr-2"
                          : "text-main-yellow w-4 h-4 mr-2"
                      }
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    {item}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingItem;
