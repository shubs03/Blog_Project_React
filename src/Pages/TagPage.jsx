import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate,} from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {

     const navigate = useNavigate();
     const location = useLocation();
     const tag = location.pathname.split("/").at(-1);

  return (
    <div className='mt-[5rem] mb-2 '>
        <Header></Header>
      <div className='max-w-[800px] flex flex-col  mx-auto'>
      <div className='text-2xl  px-6'>
            <button onClick={()=>(navigate(-1))}
            className='font-medium'>
                 Back
            </button>
            <h2 className=' text-[1.3rem]  mt-2'>Blogs Tagged <span className='font-medium'>#{tag}</span></h2>
        </div>
          <div className='mt-[-3.3rem]'>
          <Blogs></Blogs>
          </div>
      </div>
      <Pagination></Pagination>
    </div>
  )
}

export default TagPage