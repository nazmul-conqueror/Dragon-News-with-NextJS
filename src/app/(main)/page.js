import LeftSideBar from "@/components/Homepage/News/LeftSideBar";
import RightSideBar from "@/components/Homepage/News/RightSideBar";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json()
  return data.data

}
async function getNewsCategoryId(category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
  const data = await res.json()
  return data.data

}

export default async function Home() {
  const categories = await getCategories()

  const news = await getNewsCategoryId("04")





  return (
    <div className="grid grid-cols-12 gap-4 mt-8 container mx-auto justify-between">
      <div className="col-span-3 ">
        <LeftSideBar categories={categories} activeId={'null'} />
      </div>




      <div className="col-span-6 bg-green-300">
        <div className="space-y-2">
          {
            news.map((n) => {
              return <div key={n._id}>
                {n.title}
              </div>
            })
          }</div>


      </div>
      <div className="col-span-3">

        <RightSideBar />
      </div>




    </div>
  );
}
