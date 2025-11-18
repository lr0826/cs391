import {PostProps} from "../../../dis-nextjs/types/PostProps";


export default function PostPreview({post}:{post: PostProps}){
    return(
        <div>
            <h4>
                {post.title}
            </h4>
            <p>
                {post.upvotes-post.downloads}
            </p>
        </div>
    )
}