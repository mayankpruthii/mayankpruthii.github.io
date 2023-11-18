import { Link } from "react-router-dom";

export const NotFound = () => {
	const glassOfWaterImageUrl = "./water-glass.png";

	return (
		<div className="flex align-middle justify-center">
			<div>
				<img className="m-auto mt-36 h-96" src={glassOfWaterImageUrl} />
				<p className="text-center font-bold">
					The page you are trying to access could not be found
				</p>
				<p className="text-center">
					Anyway, here is a reminder for you to drink a glass of water
				</p>
				<br />
				<Link to="/">
					<p className="font-bold cursor-pointer text-gray-700 text-center">
						::: Go to Home Page :::
					</p>
				</Link>
			</div>
		</div>
	);
};
