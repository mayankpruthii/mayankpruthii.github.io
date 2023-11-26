import { ConnectWithMe } from "./ConnectWithMe";

export const ContactMe = () => {
	return (
		<>
			<ConnectWithMe />
			<div className="mt-6 flex justify-center">
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSdQDl_iIM8dca2xk2jjR8QPOS7EWmmh_QtTZrjTtf63oUYV3w/viewform?embedded=true"
					width="640"
					height="750"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				>
					Loading…
				</iframe>
			</div>
		</>
	);
};
