import React from "react";
import AboutContainer from "./pages/about/AboutContainer";
import ProjectsContainer from "./pages/projects/ProjectsContainer";
import NavBarContainer from "./navbar/NavBarContainer";
import FooterContainer from "./pages/footer/FooterContainer";

export const HomePage = props => {
	return (
		<div>
			<NavBarContainer />
			<AboutContainer />
			<ProjectsContainer />
			<FooterContainer />
		</div>
	);
};
