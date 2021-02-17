import "./SCSS/App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
	navbarData,
	homepageData,
	skillsData,
	projectsData,
} from "./data/Data";

const App = () => {
	return (
		<div id="appContainer">
			<Navbar navbarData={navbarData}></Navbar>
			<main id="content">
				<Home homepageData={homepageData}></Home>
				<Skills skillsData={skillsData}></Skills>
				<Projects projectsData={projectsData}></Projects>
				<Contact homepageData={homepageData}></Contact>
			</main>
			<Footer></Footer>
		</div>
	);
};

export default App;
