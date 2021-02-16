import React, { useState } from "react";
import linkedInIcon from "../IconsAndImages/linkedIn.svg";
import githubIcon from "../IconsAndImages/github.svg";
import resumeIcon from "../IconsAndImages/resume.svg";
const Contact = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const {
		homepageData: { linkedIn, github, resume },
	} = props;

	const submitContactForm = (e) => {
		e.preventDefault();
		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
		// toast.success("Your Message Has Been Sent!");
	};
	return (
		<section id="Contact">
			<h2>Contact</h2>
			<div id="contactDiv">
				<form
					id="contactForm"
					name="contact"
					method="POST"
					onSubmit="submit"
					data-netlify="true"
				>
					<input type="hidden" name="form-name" value="contact" />
					<label htmlFor="name">
						Name:
						<input id="name" name="name" type="text" required></input>
					</label>
					<label htmlFor="email">
						Email:
						<input id="email" type="email" name="email" required></input>
					</label>
					<label htmlFor="subject">
						Subject:
						<input id="subject" type="text" name="subject" required></input>
					</label>

					<label htmlFor="message">
						Message:
						<textarea
							id="message"
							type="text"
							name="message"
							required
						></textarea>
					</label>
					<button type="submit">
						<b>Send</b>
					</button>
				</form>
				<div id="linksDiv">
					<a href={`${linkedIn}`} target="_blank">
						<img src={linkedInIcon}></img>
					</a>
					<a href={`${github}`} target="_blank">
						<img src={githubIcon}></img>
					</a>
					{/* <a href={`${resume}`} target="_blank">
						<img src={resumeIcon}></img>
					</a> */}
				</div>
			</div>
			<div id="homeSectionLinkDiv">
				<a href="#Home" className="nextSectionLink" id="homeSectionLink">
					<b>&#8593;</b>
				</a>
			</div>
		</section>
	);
};

export default Contact;
