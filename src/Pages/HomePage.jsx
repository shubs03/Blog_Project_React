import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const HomePage = () => {
  return (
    <div >
        <Header></Header>
        <div className=' max-w-[800px] flex flex-col  mx-auto  p-6'>
            <Blogs></Blogs>
        </div>
        <Pagination></Pagination>
    </div>
  )
}

export default HomePage