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
		projectDescription: `This is an eCommerce website made to imitate the TaylorMade golf website. I used Firebase for the backend to fetch and display the list of products for sale, as well as the user’s cart information. User’s are able to add and remove items from their cart and can go through the checkout process when they are done shopping.\
        PLEASE NOTE: No bank account information will be stored, and the process for payment is disabled.`,
		techStack: ["HTML", "CSS", "React", "React Router", "Firebase"],
		demoLink: "https://scotttp.github.io/shopping-cart/#/",
		codeLink: "https://github.com/ScotttP/shopping-cart",
	},
	{
		projectName: "Restaurant Page",
		projectImage: restaurantPageApp,
		projectDescription:
			"This is a landing page for one of my favorite local restaurants. This was my first time using SASS, and I really enjoyed learning the basics and instilling good foundational knowledge of the framework.",
		techStack: ["HTML", "SCSS/SASS", "React"],
		demoLink: "https://scotttp.github.io/tekela-restaurant-page/",
		codeLink: "https://github.com/ScotttP/tekela-restaurant-page",
	},

	{
		projectName: "Todo App w/Firebase",
		projectImage: todoApp,
		projectDescription:
			"This is a simple CRUD to-do app, but with a bit more complexity and customization for my particular use at my current day job. I’m able to create tasks for myself, input due dates and set a priority level for each task so I can filter by which tasks are the most important. This was my first time using Firebase; I implemented their user-authentication methods and utilized Firestore, their NOSQL database to handle user-specific data.",
		techStack: ["HTML", "CSS", "React", "React Router", "Firebase"],
		demoLink: "https://todo-list-2-c0d05.web.app/?#/Login",
		codeLink: "https://github.com/ScotttP/todo-list-2",
	},
	{
		projectName: "Weather App",
		projectImage: weatherApp,
		projectDescription: `This is a live weather app that fetches data from the OpenWeatherAPI. Users are able to use the search box to find any city and the API pulls the data and displays live information. Users can also utilize the “get current location” feature to fire off the geolocation API and find the weather data for their exact location. I also added a feature using localStorage that enables users to create a list of favorite cities for easy reference. `,
		techStack: ["HTML", "CSS", "React", "Styled Components", "3rd Party API"],
		demoLink: "https://scotttp.github.io/weather-app-3/",
		codeLink: "https://github.com/ScotttP/weather-app-3",
	},
];
