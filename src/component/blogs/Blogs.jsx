
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:col-span-2">
            <h1>Blogs length: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;