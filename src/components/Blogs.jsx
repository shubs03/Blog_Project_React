import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


const Blogs = () => {

    const {posts,loading} = useContext(AppContext);
    console.log("Printing inside blogs component");
    console.log(posts);


  return (
    <div className='max-w-[800px]  mb-8 items-center shadow-xl px-6  mt-[4.5rem]'>
     <div className='overflow-y-hidden flex flex-col gap-y-7'>
     {
        loading ? 

        (<div className='flex text-2xl justify-center'>Loading..</div>) : 

        (   
            posts.length === 0 ? 
            (<div className='flex justify-center text-2xl'>
                <p>No Post Found</p>
            </div>) : 
            (posts.map( (post) => (
                 <BlogDetails key={post.id} post={post}></BlogDetails>
            ) ))
        ) 
    }
     </div>
      
    </div>
  )
}

export default Blogs
