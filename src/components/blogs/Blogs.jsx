import { Link, useParams } from "react-router-dom";

export const Blogs = () => {
	const { blogName } = useParams();

	if (blogName === undefined) {
		return (
			<>
				<h1>Blog Homepage</h1>
				<p>
					<Link to="/blog/1">Blog 1</Link>
				</p>
				<p>
					<Link to="/blog/2">Blog 2</Link>
				</p>
				<p>
					<Link to="/blog/3">Blog 3</Link>
				</p>
			</>
		);
	}

	return <h1>Blog {blogName}</h1>;
};
