import { Link } from "react-router-dom";

export const CustomButton = (props) => {
	const { text, redirectionUrl, fileUrl } = props;

	if (fileUrl) {
		return (
			<a className="relative px-6 py-3 font-bold text-black group" href={fileUrl} rel='noreferrer' target='_blank'>
				<PureCustomButton text={text} />
			</a>
		);
	}

	return (
		<Link
			to={redirectionUrl}
			className="relative px-6 py-3 font-bold text-black group"
		>
			<PureCustomButton text={text} />
		</Link>
	);
};

const PureCustomButton = (props) => {
	const { text } = props;

	return (
		<>
			<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-orange-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
			<span className="absolute inset-0 w-full h-full border-4 border-black"></span>
			<span className="relative">{text}</span>
		</>
	);
};
