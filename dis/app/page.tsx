import PostPreview from "./components/PostPreview";

export default function Home() {
  return (
      <div>
          <PostPreview
            post={
                {
                    id: "id",
                    title: "demo",
                    content: "blah blah blah",
                    upvotes: 5,
                    downvotes: 3
                }
            }
          />
      </div>
  );
}
