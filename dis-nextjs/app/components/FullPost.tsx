import {PostProps} from "@/types/PostProps";
import {ThumbDown, ThumbUp} from "@mui/icons-material"

export default function FullPost({post}: {post:PostProps}){
    return (
        <div className="p-4 m-2 bg-sky-100 flex flex-col items-center">
            <h2 className="text-4xl font-bald">{post.title}</h2>
            <p className="text-lg">{post.content}</p>
            <div className="flex">
                <div className="p-1 m-1">
                    {post.upvotes}
                    <ThumbUp />
                </div>
                <div className="p-1 m-1">
                    {post.downvotes}
                    <ThumbDown />
                </div>
            </div>
        </div>
    );
}
