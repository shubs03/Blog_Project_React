import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const BlogPage = () => {

     const[blog ,  setBlog] = useState();
     const[realtedBlog , setrelatedBlog] = useState();
     const location = useLocation();
     const blogId = location.pathname.split("/").at(-1)
     const navigate = useNavigate()
  return (
    <div>
        <Header></Header>
        <div>
          <button onClick={()=>navigate(-1)}>Back</button>
        </div>
        {
            loading ? (
               <div>Loading...</div>
            ):(
                posts.lenght
            )
        }
    </div>
  )
}

export default BlogPage