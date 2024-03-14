import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className='grid md:grid-cols-3 grid-cols-1'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
