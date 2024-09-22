import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BlogDetails from '../components/BlogDetails';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';

const BlogPage = () => {
  const newUrl = "https://codehelp-apis.vercel.app/api/";
  const {loading, setLoading} = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const blogId = location.pathname.split("/").at(-1);
  const navigate = useNavigate();

  async function fetchRelatedBlog() {
    setLoading(true);
    let url = `${newUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error while fetching data:", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlog();
    }
  }, [location.pathname]);

  return (
    <div className='  mt-[4.5rem] '>
        <Header />
    <div className=' max-w-[800px] flex flex-col  gap-y-4 mx-auto shadow-xl p-6'>
      <div>
        <button onClick={() => navigate(-1)} 
        className='text-2xl font-medium '>Back</button>
      </div>
     <div className='felx flex-col mx-auto'>
     {loading ? (
        <div>
          <p className='text-2xl mt-12 flex justify-center'>Loading</p>
        </div>
      ) : blog ? (
        <div className=' max-w-[800px] flex flex-col items-center gap-y-6'>
          <BlogDetails post={blog} />
          <h2 className=' text-3xl font-bold'>Related Blogs</h2>
          {relatedBlogs.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No Blog Found</p>
        </div>
      )}
     </div>
    </div>
    </div>
  );
};

export default BlogPage;
