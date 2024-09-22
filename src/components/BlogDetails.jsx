import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {

  return (
    <div className='flex gap-y-1 flex-col '>
       <NavLink to={`/blog/${post.id}`}>
        <h2 className=' text-xl font-semibold'>{post.title}</h2>
       </NavLink>
       <p>By {" "}
       <span>{post.author}</span> {"  "}
       on {"  "}
        <NavLink to={`/categories/${post.category.replaceAll(" " , "-")}`}>
       <span className=' underline font-medium'>{post.category}</span>
       </NavLink>
       </p>
       <p>
        Posted On <span>{post.date}</span>
       </p>
       <p>{post.content}</p>
       <div>
        {
            post.tags.map((tag , index)=>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(" " , "-")}`}>
                <span className=' text-[blue] ' >{`#${tag}`}</span>
                </NavLink>
            ))
        }
       </div>
    </div>
  )
}

export default BlogDetails