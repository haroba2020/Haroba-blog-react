import { useState, useEffect } from "react"
import  BlogList  from "./BlogList"
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    
    const [name, setName] = useState('mario')

    const handleDelete = (id) =>{
      const newBlogs = blogs.filter(blog => blog.id !== id)
      setBlogs(newBlogs)
    }

    useEffect(()=>{
      console.log(blogs)
    },[name])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            <button onClick={()=> setName('luigi')}>Change name</button>
            
        </div>
     );
}
 
export default Home ;

    // const [name, setName] = useState('Elvis')
    // const [age, setAge] = useState(17)
    // const handleClick = () => {
    //     setName('Fredrik')
    //     setAge(20)
    // }

    /*{
        <h2>Homepage</h2>
        <p>{name} is {age} years old </p>
        <button onClick={handleClick}>Button</button> 
    }*/