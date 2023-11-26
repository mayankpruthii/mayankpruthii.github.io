export const ConnectWithMe = () => {
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
		<>
			<div className="mt-10 mb-6 text-xl text-center">Connect with me</div>
			<div className="flex justify-evenly flex-wrap mx-auto max-w-4xl">
				{contactItemsList.map((contactItem, index) => {
					return (
						<div
                            key={index}
							onClick={() => window.open(contactItem.redirectionUrl, "_blank")}
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
		</>
	);
};