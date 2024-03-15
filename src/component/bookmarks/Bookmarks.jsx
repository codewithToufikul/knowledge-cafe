import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:col-span-1 bg-[#1111110D] mt-4 h-fit p-2 rounded-2xl">
            <h2 className="text-lg py-3 font-bold text-center">Reading Time: {readingTime} min</h2>
            <h1 className="text-2xl font-semiboldbold text-center">Bookmark Blog: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;