import Frame from '../../../images/frame.png'

const blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog
    return (
        <div className='space-y-1 py-4'>
            <img className='w-full rounded-2xl' src={cover} alt="" />
            <div className='space-y-6 p-5'>
            <div className='flex justify-between items-center'>
            <div className="flex gap-2 items-center">
                <img className="w-[60px]" src={author_img} alt="" />
                <div>
                    <h3 className='text-2xl font-bold'>{author}</h3>
                    <p className='text-base font-normal'>{posted_date}</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <p className='text-lg font-medium'>{reading_time} min read</p>
                <button onClick={() => handleAddToBookmark(blog)}><img src={Frame} alt="" /></button>
            </div>
            </div>
            <h1 className='text-4xl font-bold leading-[48px]'>{title}</h1>
            <div className='flex gap-3'>
                {
                    hashtags.map(hash => <a href=""><p>#{hash}</p></a>)
                }
                
            </div>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-lg font-medium underline text-blue-600' >Mark As Read</button>
            </div>
        </div>
    );
};

export default blog;