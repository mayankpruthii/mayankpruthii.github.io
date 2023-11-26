import { Link } from "react-router-dom";
import { CustomButton } from "../CustomButton";

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
				<div className="text-center mt-6 mx-auto">
					<CustomButton text="Go To Home Page" redirectionUrl="/" />
				</div>
			</div>
		</div>
	);
};
