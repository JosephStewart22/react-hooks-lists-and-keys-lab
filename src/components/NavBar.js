import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const buttons = links.map((link) => (
    <a key={link} href={'#' + link}>{link}</a>
  ))

  return <nav>{buttons}</nav>
}

export default NavBar;
