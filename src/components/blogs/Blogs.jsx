import { Link, useParams } from "react-router-dom";
import { Blog } from "./Blog";
import { blogMetadata } from "../utils/blogMetadata";

export const Blogs = () => {
	const { blogName } = useParams();

	if (blogName === undefined) {
		return (
			<div className="mt-4 mb-2 max-w-4xl mx-auto">
				{Object.keys(blogMetadata).map((blogFileName, index) => {
					console.log(blogMetadata[blogFileName])
					return <Link className="my-4 hover:text-orange-600 block" to={`/blog/${blogFileName}`}>
						<div className="text-2xl">
							{index + 1}. {blogMetadata[blogFileName]["title"]}
						</div>
						<div>{blogMetadata[blogFileName]["description"]}</div>
					</Link>
				})}
			</div>
		);
	}

	return <Blog blogName={blogName} />;
};
