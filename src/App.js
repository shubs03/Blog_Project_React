
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
import { Routes , Route, useSearchParams, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParams , setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
   const page = searchParams.get("page") ?? 1;
   if(location.pathname.includes("tags")){
    const tag = location.pathname.split("/").at(-1).replaceAll("-" , " ");
    fetchBlogPosts(Number(page), tag);
   }
   if(location.pathname.includes("categories")){
    const category = location.pathname.split("/").at(-1).replaceAll("-" , " ");
    fetchBlogPosts(Number(page), null, category);
   }
   else{
    fetchBlogPosts(Number(page));
  }
  },[location.pathname, location.search]);

  return (
      <Routes>
        <Route path="/"   element={<HomePage></HomePage>}></Route> 
        <Route path="/blog/:blogId"   element={<BlogPage></BlogPage>}></Route> 
        <Route path="/tags/:tag"   element={<TagPage></TagPage>}></Route> 
        <Route path="/categories/:category"   element={<CategoryPage></CategoryPage>}></Route> 
      </Routes>
  );

}
