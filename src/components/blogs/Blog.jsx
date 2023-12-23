import { useEffect, useState } from "react";
import Markdown from "react-markdown"
import { Link, useNavigate } from "react-router-dom";
import { blogMetadata } from "../utils/blogMetadata";

const PAGE_NOT_FOUND_URL = "/page-not-found";

export const Blog = (props) => {
    const { blogName } = props;
    const navigate = useNavigate();
    const [markdownContent, setMarkdownContent] = useState("");

    const validateIfBlogMarkdownExists = (blogString) => {
        if (blogString.includes("Cannot GET /blogs")) {
            navigate(PAGE_NOT_FOUND_URL);
        }
    }

    const fetchBlog = (blogUrl) => {
        fetch(blogUrl, {
            headers: {
                'Content-Type': 'application/text',
                'Accept': 'application/text'
            }
        })
            .then((r) => r.text())
            .then(blogString => {
                validateIfBlogMarkdownExists(blogString);
                setMarkdownContent(blogString)
            })
            .catch((ex) => {
                console.log("EXCEPTION: ", ex);
                navigate(PAGE_NOT_FOUND_URL);
            })
    }

    useEffect(() => {
        if (blogName === undefined || blogName === "") {
            navigate(PAGE_NOT_FOUND_URL)
        }
        const blogUrl = `../blogs/${blogName}.md`;
        fetchBlog(blogUrl);
    }, [blogName])

    return <div className="max-w-4xl my-8 mx-auto">
        <div className="mx-2">
            <code className="block mb-4 text-orange-600">{">> "}<Link to="/">home</Link>{" >> "}<Link to="/blogs">blogs</Link></code>
            <div className="mb-2 text-4xl">{blogMetadata[blogName]["title"]}</div>
            <code className="mb-6 block">Publish Date: 23 December 2023</code>
            <Markdown>{markdownContent}</Markdown>
        </div>
    </div>
}