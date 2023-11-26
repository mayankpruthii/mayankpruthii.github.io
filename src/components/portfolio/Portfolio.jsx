import { useLayoutEffect } from "react";
import { isWideWidthScreen, scrollToTop } from "../../utils";
import { CustomButton } from "../CustomButton";

export const Portfolio = (props) => {
	const { screenSize } = props;

	const RESUME_URL = "/Mayank_Pruthi_Resume_29_5_2022.pdf";

	useLayoutEffect(() => {
		scrollToTop();
	});

	return (
		<div className="max-w-3xl mx-auto my-6">
			{/* About Me Section */}
			<div className="mx-2">
				<div className="mt-6 mb-4 text-4xl">About me</div>
				<div>
					I enjoy crafting products that grow steadily and bring real value to
					users. With around 3 years of industry experience, I've learned the
					ropes of turning ideas into practical solutions. Work, for me, is a
					way to tackle problems on a broader scale, making things better than
					they could be otherwise. I think every product has room for
					improvement; perfection isn't the goal, but progress is. Refining,
					evolving and finding simple solutions to complex problems is the way
					to move forward.
					<div className="my-3 text-2xl">
						What makes me stand out of the crowd?
					</div>
					<div className="flex text-center mb-2 align-top justify-center flex-wrap">
						<div
							className={`mx-2 ${
								isWideWidthScreen(screenSize) ? "flex-1" : null
							}`}
						>
							<img
								height="64"
								width="64"
								className="mx-auto"
								src="https://img.icons8.com/fluency/48/money-bag.png"
							/>
							<b>Frugality-Driven Architectural Decisions</b>
							<br />I prioritize frugal software architecture, emphasizing
							efficiency and mindful resource use in every decision.
						</div>
						<div
							className={`mx-2 ${
								isWideWidthScreen(screenSize) ? "flex-1" : null
							}`}
						>
							<img
								width="64"
								height="64"
								className="mx-auto"
								src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-owner-baseball-flaticons-lineal-color-flat-icons-2.png"
							/>
							<b>Ownership</b>
							<br />I take full ownership of my work from concept to delivery,
							showcasing technical expertise and unwavering dedication
							throughout the project lifecycle.
						</div>
						<div
							className={`mx-2 ${
								isWideWidthScreen(screenSize) ? "flex-1" : null
							}`}
						>
							<img
								height="64"
								width="64"
								className="mx-auto"
								src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-sprint-project-management-flaticons-flat-flat-icons-2.png"
							/>
							<b>Swift and Efficient Execution</b>
							<br />I swiftly turn ideas into reality, balancing agility with
							effectiveness. My commitment to speed ensures timely and impactful
							results in software development.
						</div>
					</div>
				</div>
				<div className="mx-2 my-10">
					<CustomButton text="View Resume" fileUrl={RESUME_URL} />
				</div>
			</div>

			{/* Skills Section */}
			<div className="mx-2">
				<div id="skills" className="mt-6 mb-4 text-4xl">
					Skills
				</div>
				<div>
					<div className="text-xl my-2">Languages Known</div>
					<div className="p-2 font-mono bg-slate-200">
						Python, Java, JavaScript, C++, TypeScript, SQL, HTML/CSS
					</div>
					<div className="text-xl my-2">Cloud Technologies</div>
					<div className="p-2 font-mono bg-slate-200">
						<b>AWS: </b> IAM, KMS, Lambda, EC2, ECS, Glue, S3, API Gateway, SQS,
						SNS, Route53, Step Functions, CloudFront, Kinesis, DynamoDB,
						Redshift, Athena, CloudWatch
						<br />
						<b>Others: </b>Docker, MongoDB, Openstack, VMWare, Kubernetes, Ceph,
						Kubernetes
					</div>
					<div className="text-xl my-2">Frameworks/Libraries</div>
					<div className="p-2 font-mono bg-slate-200">
						ReactJS, ExpressJS, SpringBoot, Flask, Mongoose, Socketio, Paramiko,
						JQuery, Redux, Bootstrap CSS, Tailwind CSS, JUnit, Tensorflow,
						Pandas
					</div>
					<div className="text-xl my-2">Tools</div>
					<div className="p-2 font-mono bg-slate-200">
						Git, Ansible, Wordpress, Shopify, Figma, Facebook Ads, Google Ads
					</div>
					<div className="text-xl my-2">Operating System</div>
					<div className="p-2 font-mono bg-slate-200">Linux (debian)</div>
					<div className="text-xl my-2">Soft Skills</div>
					<div className="p-2 font-mono bg-slate-200">
						Solution & System Design, Documentation, Design and Code Reviews,
						Problem Solving, Requirements Gathering, Optimizing Performance
					</div>
				</div>
			</div>

			{/* Work Experience */}
			<div className="mx-2">
				<div id="work-experience" className="mt-6 mb-4 text-4xl">
					Work Experience
				</div>
				<div>
					<div className="text-xl">
						<b>Software Development Engineer</b> at <b>Amazon</b>
					</div>
					<div className="font-mono">October 2022 - Present | Delhi, India</div>
					<ul className="ml-6 list-disc">
						<li>
							Worked in <b>Foundational People Data Services organistion</b>{" "}
							that owned 3 applications - Maple (Role Based Access Control), ADS
							(Segmentation/Scope Service) and MySupport (Support Contacts Self
							Scope Assignments)
						</li>
						<li>
							<b>Designed</b> and <b>implemented</b> the <b>Scope Boundary</b>{" "}
							feature in MySupport, establishing guardrails that prevent Support
							contacts from making incorrect Scope assignments. This safeguard{" "}
							<b>
								successfully averted the unauthorized access of 10,000 contacts
							</b>
							, ensuring they only had access to the appropriate employee
							information.
						</li>
						<li>
							Collaboratively introduced a proxy atop an existing Scope service,{" "}
							<b>
								facilitating the seamless migration of 72 downstream services to
								a newer version of the Scope service
							</b>{" "}
							without any business impact.
						</li>
						<li>
							<b>Deep dived and reduced</b> the tm95 <b>latency</b> of a high
							transaction get support contacts API, bringing it down from{" "}
							<b>2000ms</b> to <b>750ms</b>.
						</li>
					</ul>
					<div className="mt-4 text-xl">
						<b>Systems Engineer</b> at <b>Tata Consultancy Services</b>
					</div>
					<div className="font-mono">
						August 2021 - October 2022 | Delhi, India
					</div>
					<ul className="ml-6 list-disc">
						<li>
							Developed a <b>Python Flask application</b> to streamline the
							deployment of <b>OpenStack</b>, <b>VMware</b>, and <b>Ceph</b>{" "}
							cloud solutions. This encompassed the use of <b>Ansible</b>{" "}
							scripts, predefined templates, and the integration of these
							solutions' APIs.
						</li>
						<li>
							<b>Designed</b> and <b>developed REST APIs</b> for quick-executing
							scripts, completing within one second, and <b>SocketIO</b> for
							time-intensive scripts,{" "}
							<b>providing real-time updates to the frontend</b>.
						</li>
						<li>
							<b>Refactored</b> and <b>documented</b> significant sections of a
							Flask application, <b>enhanced code reusability</b> by
							implementing OOP principles and design patterns, and employed{" "}
							<b>Flask Blueprints</b> to break down the code into more
							manageable and readable modules.
						</li>
						<li>
							Created a Python script for installing the operating system on
							bare metal servers using file sharing and Ansible.
						</li>
					</ul>
					<div className="mt-4 text-xl">
						<b>Technical Consultant Intern</b> at <b>Nyaaya</b>
					</div>
					<div className="font-mono">
						February 2020 - July 2021 | Delhi, India
					</div>
					<ul className="ml-6 list-disc">
						<li>
							Developed a{" "}
							<a
								className="text-orange-600"
								href="https://github.com/mayankpruthii/SocialMediaDataAutomation"
								target="_blank"
							>
								Social Media Data Automation tool
							</a>{" "}
							in Python for <b>analysis of social media accounts' insights</b>{" "}
							using Facebook Developer and Twitter APIs, Google Sheets and Web
							Scraping in <b>Selenium</b>.
						</li>
						<li>
							Updated and maintained{" "}
							<a
								className="text-orange-600"
								href="https://www.nyaaya.org/"
								target="_blank"
							>
								wordpress website
							</a>{" "}
							- made new custom post types and designed new pages - ensured all
							the posts were uploaded on time and were bug free.
						</li>
						<li>
							<b>Scaled server</b> for more content and website traffic, and
							constantly <b>monitored website's performance</b> and SEO -
							improving latency and user experience by caching frontend assets.
						</li>
						<li>
							Developed a{" "}
							<a
								className="text-orange-600"
								href="https://github.com/mayankpruthii/NyaayaChatbot"
								target="_blank"
							>
								chatbot
							</a>{" "}
							using NLP and Python for answering legal queries on telegram using
							existing question answers on the website.
						</li>
					</ul>
				</div>
			</div>

			{/* Projects */}
			<div className="mx-2">
				<div id="projects" className="mt-6 mb-4 text-4xl">
					Projects
				</div>
				<div>
					<div className="text-xl">
						<b>PcParts - E-Commerce Web Application</b>
					</div>
					<div className="font-mono">
						August 2021 - December 2021 | Delhi, India
					</div>
					<ul className="ml-6 list-disc">
						<li>
							<a
								className="text-orange-600"
								href="https://github.com/mayankpruthii/E-commerce-app/"
								target="_blank"
							>
								Github Link
							</a>{" "}
							and video tutorial of the project -
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/fouH-Bv6iWs?si=LINkhEWwiOab1bjJ"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
								className="my-4 mx-auto"
							></iframe>
						</li>
						<li>
							A simple monolithic E-commerce web application with frontend built
							in <b>ReactJS</b>, backend in <b>ExpressJS</b> and <b>MongoDB</b> database
						</li>
						<li>
							Web application supports google authentication, user can sort
							products according to name and date and filter out data using
							categories, user can also add reviews to a product Admin can
							add/edit products, categories and users
						</li>
					</ul>
				</div>
			</div>

			{/* Education */}
			<div className="mx-2">
				<div id="education" className="mt-6 mb-4 text-4xl">
					Education
				</div>
				<ul className="ml-6 list-disc">
					<li>
						<b>Bachelors of Technology</b> in Electronics and Communication Engineering
                        <br />
                        Guru Gobind Singh Indraprastha
						University, New Delhi, India
                        <br />
                        Aggregate Percentage: <b>85</b>
					</li>
                    <li>
						<b>12th standard</b>
                        <br />
                        Central Board of Secondary Education, New Delhi, India
                        <br />
                        Aggregate Percentage: <b>89</b>
					</li>
				</ul>
			</div>

			{/* Volunteering */}
			<div className="mx-2">
				<div id="volunteering" className="mt-6 mb-4 text-4xl">
					Volunteering
				</div>
				<ul className="ml-6 list-disc">
					<li>
						Social Media Designer at{" "}
						<a
							className="text-orange-600"
							href="https://instagram.com/amoli_trust"
							target="_blank"
						>
							Amoli Trust
						</a>
						<div className="font-mono">
							January 2021 - Present | Delhi, India
						</div>
					</li>
					<li>
						Design Volunteer at{" "}
						<a
							className="text-orange-600"
							href="www.instagram.com/enactusbvcoe"
							target="_blank"
						>
							Enactus, BVCOE
						</a>
						<div className="font-mono">
							August 2019 - July 2020 | Delhi, India
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
