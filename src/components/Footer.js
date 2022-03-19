import React from "react";

function Footer() {
  return (
    <div className="mx-auto p-4">
      <hr />
      <p className="text-center mt-4">
        &copy; Made By{" "}
        <a
          className=" text-heading-yellow mr-4"
          href="https://ioanzaharia.com"
          target="blank"
        >
          Ioan Zaharia
        </a>{" "}
        Images from{" "}
        <a href="https://www.templatemonster.com/" target="blank">
          templatemonster.com
        </a>
      </p>
    </div>
  );
}

export default Footer;
