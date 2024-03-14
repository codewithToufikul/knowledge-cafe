import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-14'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
