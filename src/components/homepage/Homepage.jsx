import { isWideWidthScreen } from "../../utils";
import { CustomButton } from "../CustomButton";

export const Homepage = (props) => {
	const { screenSize } = props;

	const contactItemsList = [
		{
			text: "mayankpruthi",
			imageUrl: "https://img.icons8.com/fluency/48/linkedin.png",
			redirectionUrl: "https://www.linkedin.com/in/mayankpruthi/",
		},
		{
			text: "mayankpruthii",
			imageUrl: "https://img.icons8.com/ios-filled/50/github.png",
			redirectionUrl: "https://github.com/mayankpruthii",
		},
		{
			text: "mayankpruthi123@gmail.com",
			imageUrl: "https://img.icons8.com/plasticine/100/new-post--v2.png",
			redirectionUrl: "mailto:mayankpruthi123@gmail.com",
		},
	];

	return (
		<div>
			<div className="mx-auto mt-12 flex flex-wrap-reverse max-w-4xl">
				<div className="m-auto text-left">
					<h1 className="mb-2 text-slate-900 text-4xl">
						I'm <b>Mayank Pruthi</b>
					</h1>
					<p className="font-mono">Software Development Engineer</p>
					<p className="font-mono">Who loves solving problems at scale</p>
					<p className="font-mono text-gray-300">
						Also, sometimes, a Graphic Designer
					</p>
					<p className="font-mono text-gray-300">and a Campfire Guitarist</p>
				</div>
				<div className="mx-auto">
					<img className="m-auto h-96" src="./my-diwali-photo.png" />
				</div>
			</div>
			<div className="mt-12 py-12 bg-slate-100 text-center">
				<div className="mb-2 text-slate-900">I adhere to the belief</div>
				<div className="text-center text-slate-900 text-2xl">
					<b>Work hard to implement smart</b>
				</div>
			</div>
			<div className="my-12">
				<div>
					<h2 className="mb-6 text-center text-2xl">A little about me...</h2>
					<div
						className={`${
							isWideWidthScreen(screenSize) ? "mx-auto max-w-4xl" : ""
						} text-center`}
					>
						<b>
							I am software development engineer currently working at Amazon.
						</b>{" "}
						I have a keen eye for detail and a love for crafting efficient and
						innovative solutions.{" "}
						<b>
							With a major in Electronics and almost 3 years experience in the
							field of Software Engineering,{" "}
						</b>
						I thrive in transforming complex ideas into functional and
						user-friendly applications.{" "}
						<b>
							My expertise spans from experience in Javascript frameworks like
							React, NodeJS to enterprise applications built with Java,
							Typescript and Python. Additionally, I have experience is
							ditributed computing and cloud technologies like AWS, Azure.{" "}
						</b>
						And I am constantly exploring new avenues to stay at the forefront
						of technological advancements. I am a problem solver who enjoys the
						challenge of creating robust and scalable software that meets the
						unique needs of users.
					</div>
					<div className="mt-10 flex justify-center mx-auto">
						<CustomButton
							text="Checkout my detailed portfolio"
							redirectionUrl="/portfolio"
						/>
					</div>
				</div>
				<div className="mt-10 mb-6 text-xl text-center">Connect with me</div>
				<div className="flex justify-evenly flex-wrap mx-auto max-w-4xl">
					{contactItemsList.map((contactItem) => {
						return (
							<div
								onClick={() =>
									window.open(contactItem.redirectionUrl, "_blank")
								}
								className="mt-2 flex align-middle cursor-pointer"
							>
								<img width="50" height="50" src={contactItem.imageUrl} />
								<span className="ml-1 my-auto text-slate-900">
									{contactItem.text}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
