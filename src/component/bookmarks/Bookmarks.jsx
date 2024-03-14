import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:col-span-1 bg-[#1111110D] p-2 rounded-2xl">
            <h1 className="text-2xl font-semiboldbold text-center">Bookmark Blog: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;