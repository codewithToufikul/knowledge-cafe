

const bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white p-4 my-4 rounded-xl">
            <h1>{title}</h1>
        </div>
    );
};

export default bookmark;