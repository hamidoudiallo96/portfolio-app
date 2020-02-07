import React from "react";
import NavBar from "./NavBar";
import navLogo from "../../assets/22b39ef1-996d-4498-9bf6-346a6c019ee1_200x200.png";
import "./NavBar.styles.scss";

export default function NavBarContainer() {
	return (
		<div>
			<ul className="nav-container">
				<img src={navLogo} alt="logo" height="100px" />
				<NavBar />
			</ul>
		</div>
	);
}
