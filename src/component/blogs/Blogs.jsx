
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=> res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            <h1>helo form blogs</h1>
        </div>
    );
};

export default Blogs;