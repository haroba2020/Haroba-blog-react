import { useState } from "react"

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    return ( 
        <div className="home">
            {blogs.map(blog => (
               <div className="blog-preview" key={blog.id}>
                    <h2> { blog.title } </h2>
                    <p>written by { blog.author }</p>
               </div> 
            ))}
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