import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const newLinks = links.map((link, index) => {
    return (
      <a href={'#' + link} key={index}>{link}</a>
    )
  })

  return <nav>{newLinks}</nav>;
}

export default NavBar;
