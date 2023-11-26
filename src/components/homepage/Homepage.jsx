import { useLayoutEffect } from "react";
import { isWideWidthScreen, scrollToTop } from "../../utils";
import { CustomButton } from "../CustomButton";
import { ConnectWithMe } from "../contact-me/ConnectWithMe";

export const Homepage = (props) => {
	const { screenSize } = props;

    useLayoutEffect(() => {
        scrollToTop();
    })

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
                <div className="mx-2 mt-2">I believe in automating everything that can be, and manual processes should be avoided as much as possible.</div>
			</div>
			<div className="my-12">
				<div className="mx-2">
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
							ditributed computing and cloud technologies like AWS.{" "}
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
				<ConnectWithMe />
			</div>
		</div>
	);
};
