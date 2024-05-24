import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {

    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    return (
        <div className='w-100 py-5'>
        
            <Container>

                <div className='d-flex flex-wrap'>

                    {posts.map((post) => (

                        <div key={post.$id} className='p-2 col-3'>
                            <PostCard {...post} />
                        </div>

                    ))}

                </div>
                
            </Container>

        </div>
    )
}

export default AllPosts
