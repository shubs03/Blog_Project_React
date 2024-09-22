import React from 'react'
import { useLocation, useNavigate, } from 'react-router-dom'
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);


  return (
    <div className='mt-[5rem] mb-6 '>
        <Header></Header>
        <div className='max-w-[800px] flex flex-col  mx-auto '>
        <div className='text-2xl  px-6'>
            <button onClick={()=>(navigate(-1))}
            className='font-medium'>
                Back
            </button>
            <h2 className='text-[1.3rem]  mt-2'> Blogs On <span className='font-medium'>{category}</span></h2>
        </div>
         <div className='mt-[-3.2rem]'>
         <Blogs></Blogs>
         </div>
        </div>
        <Pagination></Pagination>
    </div>
  )
}

export default CategoryPage;