import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {

    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className='py-5'>
            <Container>
                <div className='w-100 d-flex justify-content-center mb-3 position-relative border-2 rounded-2 p-2'>
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-4"
                    />
                    {isAuthor && (
                        <div className='postPages'>
                            <Link to={`/edit/post/${post.$id}`} >
                                <button className="btn btn-success mr-3">Edit</button>
                            </Link>
                            <button className="btn btn-danger" onClick={deletePost}>Delete</button>
                        </div>
                    )}
                </div>
                <div className='w-100 mb-4'>
                    <h1 className='fw-bold'>{post.title}</h1>
                </div>
                <div>
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null
}

export default Post
