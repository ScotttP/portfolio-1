import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div id="content">
				<Home></Home>
				<Skills></Skills>
				<Projects></Projects>
				<Contact></Contact>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default App;
