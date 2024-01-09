import WorkItem from "./WorkItem"


const data = [
    {
        year:2021,
        title:'Content Creator',
        duration:'3 years',
        details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis quo enim sit? Velit sed reiciendis labore nam nobis in,"
         
    },
    {
        year:2022,
        title:'Content Creator',
        duration:'3 years',
        details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis quo enim sit? Velit sed reiciendis labore nam nobis in,"
         
    },
    {
        year:2023,
        title:'Content Creator',
        duration:'3 years',
        details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis quo enim sit? Velit sed reiciendis labore nam nobis in,"
         
    },
    {
        year:2024,
        title:'Content Creator',
        duration:'3 years',
        details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis quo enim sit? Velit sed reiciendis labore nam nobis in,"
         
    },
]
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[rgb(0,27,94)] ">Work</h1>
        {
            data?.map((item,idx)=>(
                    <WorkItem key={idx} item={item}></WorkItem>
            ))
        }
        </div>
  )
}

export default Work