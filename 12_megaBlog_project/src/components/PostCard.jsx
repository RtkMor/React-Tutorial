import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({
    $id,  title, featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div class="card text-center p-1" style="width: 18rem;">
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
            </div>
        </div>
    </Link>
  )
}

export default PostCard
