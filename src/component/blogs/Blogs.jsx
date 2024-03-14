
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:col-span-2">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleAddToBookmark={handleAddToBookmark}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;