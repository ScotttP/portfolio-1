import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { navbarData } from "./data/Data";

const App = () => {
	return (
		<div id="appContainer">
			<Navbar navbarData={navbarData}></Navbar>
			<main id="content">
				<Home></Home>
				<Skills></Skills>
				<Projects></Projects>
				<Contact></Contact>
			</main>
			<Footer></Footer>
		</div>
	);
};

export default App;
