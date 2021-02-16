import htmlLogo from "../IconsAndImages/html.svg";
import cssLogo from "../IconsAndImages/css.svg";
import javascriptLogo from "../IconsAndImages/javascript.png";
import reactLogo from "../IconsAndImages/react.png";
import reactRouterLogo from "../IconsAndImages/reactRouter.png";
import sassLogo from "../IconsAndImages/sass.png";
import styledComponentsLogo from "../IconsAndImages/styledComponents.png";
import firebaseLogo from "../IconsAndImages/firebase.png";
import npmLogo from "../IconsAndImages/npm.png";
import gitLogo from "../IconsAndImages/git.png";
import shoppingCartApp from "../IconsAndImages/shoppingCartApp.png";
import restaurantPageApp from "../IconsAndImages/restaurantPageApp.png";
import weatherApp from "../IconsAndImages/weatherApp.png";
import todoApp from "../IconsAndImages/todoApp.png";

export const navbarData = ["Home", "Skills", "Projects", "Contact"];

export const homepageData = {
	devName: "Scott Pribe",
	devTitle: "Front-End Developer",
	linkedIn: "https://www.linkedin.com/in/scottpribe/",
	github: "https://github.com/ScotttP",
	resume: "",
};

export const skillsData = [
	{
		skillName: "HTML",
		skillImage: htmlLogo,
	},
	{
		skillName: "CSS",
		skillImage: cssLogo,
	},
	{
		skillName: "Javascript",
		skillImage: javascriptLogo,
	},
	{
		skillName: "React",
		skillImage: reactLogo,
	},
	{
		skillName: "React Router",
		skillImage: reactRouterLogo,
	},
	{
		skillName: "SASS/SCSS",
		skillImage: sassLogo,
	},
	{
		skillName: "Styled Components",
		skillImage: styledComponentsLogo,
	},
	{
		skillName: "Firebase",
		skillImage: firebaseLogo,
	},
	{
		skillName: "NPM",
		skillImage: npmLogo,
	},
	{
		skillName: "Git",
		skillImage: gitLogo,
	},
];

export const projectsData = [
	{
		projectName: "Shopping Cart",
		projectImage: shoppingCartApp,
		projectDescription: `This is an "eCommerce" website to imitate the Taylormade golf website. I used firebase for the backend to fetch and display the users cart information as well as products from the database. Users can add and delete items to their cart and I've implemented a complete checkout process to imitate an actual checkout process. I used React Router to display item specific pages. Please note: no card information will be stored and this won't actually prcoess a payment.`,
		techStack: ["HTML", "CSS", "React", "React Router", "Firebase"],
		demoLink: "https://scotttp.github.io/shopping-cart/#/",
		codeLink: "https://github.com/ScotttP/shopping-cart",
	},
	{
		projectName: "Restaurant Page",
		projectImage: restaurantPageApp,
		projectDescription:
			"This is a restuarant landing page for a local restaurant in my area. This was my first time implementing SASS and really enjoyed learning the basics and implementing a good foundational knowledge of the framework",
		techStack: ["HTML", "SCSS/SASS", "React"],
		demoLink: "https://scotttp.github.io/tekela-restaurant-page/",
		codeLink: "https://github.com/ScotttP/tekela-restaurant-page",
	},

	{
		projectName: "Todo App w/Firebase",
		projectImage: todoApp,
		projectDescription:
			"This is a simple  CRUD Todo App but with a bit more complexity and customization for my particular use during my current day job. This was my first time using Firebase; I implemented their user authentication methods and utilized firestore, their NOSQL database.",
		techStack: ["HTML", "CSS", "React", "React Router", "Firebase"],
		demoLink: "https://todo-list-2-c0d05.web.app/?#/Login",
		codeLink: "https://github.com/ScotttP/todo-list-2",
	},
	{
		projectName: "Weather App",
		projectImage: weatherApp,
		projectDescription: `This is a Weather app that fetches data from the OpenWeatherAPI. Users are able to search for a specific city in the search box and find that cities current weather. Users can also click the "get current location" button and that fires off the goelocation API. Users can also save cities to their favorites list (using localStorage) so they don't have search for a commonly used city. `,
		techStack: ["HTML", "CSS", "React", "Styled Components", "3rd Party API"],
		demoLink: "https://scotttp.github.io/weather-app-3/",
		codeLink: "https://github.com/ScotttP/weather-app-3",
	},
];
