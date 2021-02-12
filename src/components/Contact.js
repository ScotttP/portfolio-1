import React, { useState } from "react";
const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

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
			<form id="contactForm" onSubmit={(e) => submitContactForm(e)}>
				<label htmlFor="name">
					Name:
					<input
						id="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					></input>
				</label>
				<label htmlFor="email">
					Email:
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					></input>
				</label>
				<label htmlFor="subject">
					Subject:
					<input
						id="subject"
						type="text"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						required
					></input>
				</label>

				<label htmlFor="message">
					Message:
					<textarea
						id="message"
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
				</label>
				<button type="submit">
					<b>Send</b>
				</button>
			</form>
		</section>
	);
};

export default Contact;
