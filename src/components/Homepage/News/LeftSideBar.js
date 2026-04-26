import Link from "next/link";

const LeftSideBar = ({categories, activeId}) => {
    return (
        <div>
            <h2>All Categories</h2>
            <ul className="flex flex-col gap-3 mt-6">
            {
                categories.news_category.map(category => {
                    return <li key={category.category_id}
                    className={
                        `${activeId === category.category_id && "bg-purple-400 text-white"} p-2 rounded-md font-bold text-center text-md`}>
                       <Link className="block p-2" href={`/category/${category.category_id}`}> {category.category_name}</Link>
                    </li>
                })
            }
            </ul>
        </div>
    );
};

export default LeftSideBar;