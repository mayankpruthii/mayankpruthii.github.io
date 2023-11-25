import { Link } from "react-router-dom";

export const CustomButton = (props) => {
	const { text, redirectionUrl } = props;

	return (
		<Link
			to={redirectionUrl}
			class="relative px-6 py-3 font-bold text-black group"
		>
			<span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-orange-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
			<span class="absolute inset-0 w-full h-full border-4 border-black"></span>
			<span class="relative">{text}</span>
		</Link>
	);
};
