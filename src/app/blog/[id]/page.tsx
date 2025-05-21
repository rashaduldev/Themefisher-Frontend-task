"use client";

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { LayoutContext } from "@/components/context";
import Image from "next/image";

interface Comment {
  name: string;
  comment: string;
}

const BlogDetails: React.FC = () => {
  const params = useParams();
  const id = params?.id;
  const context = useContext(LayoutContext);
  if (!context) throw new Error("LayoutContext must be used within LayoutContext.Provider");
  const { translations } = context;
  const { blog } = translations;

  const post = blog.find((b) => b.id === Number(id));

  // Like state
  const [liked, setLiked] = useState(false);

  // Comments state
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Load like + comments from localStorage on mount
  useEffect(() => {
    if (!post) return;

    const likesLS = localStorage.getItem(`blog-like-${post.id}`);
    setLiked(likesLS === "true");

    const commentsLS = localStorage.getItem(`blog-comments-${post.id}`);
    if (commentsLS) setComments(JSON.parse(commentsLS));
  }, [post]);

  if (!post) return <p className="text-center mt-20 text-white">Blog post not found.</p>;

  // Toggle like handler
  const toggleLike = () => {
    const newLikeState = !liked;
    setLiked(newLikeState);
    localStorage.setItem(`blog-like-${post.id}`, String(newLikeState));
  };

  // Comment submit handler
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      toast.error("Please fill in both name and comment.");
      return;
    }

    const newComment = { name: name.trim(), comment: comment.trim() };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`blog-comments-${post.id}`, JSON.stringify(updatedComments));

    setName("");
    setComment("");
    toast.success("Comment added!");
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 dark:text-white text-black">
      <Toaster position="top-right" />

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm opacity-70 mb-6">
        {post.category} | {post.date} — Posted by {post.author}
      </p>

      <Image width={500} height={500} src={post.image} alt={post.title} className="w-full rounded-md mb-6" />

      <p className="mb-8">{post.description}</p>

      <div className="flex items-center space-x-6 mb-10">
        <button
          onClick={toggleLike}
          className={`px-4 py-2 rounded-md font-semibold ${
            liked ? "bg-green-600" : "bg-gray-700"
          } hover:bg-green-700 transition-colors`}
        >
          {liked ? "Liked ❤️" : "Like 🤍"}
        </button>

        <button
          onClick={() => {
            navigator.share &&
              navigator.share({
                title: post.title,
                text: post.description,
                url: window.location.href,
              });
          }}
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors font-semibold"
        >
          Share 📤
        </button>
      </div>

      {/* Comments Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md text-black"
          />
          <textarea
            placeholder="Your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-2 rounded-md text-black"
            rows={4}
          />
          <button
            type="submit"
            className="bg-green-600 px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors"
          >
            Add Comment
          </button>
        </form>

        {/* Comments List */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {comments.length === 0 && (
            <p className="opacity-60 italic">No comments yet. Be the first!</p>
          )}
          {comments.map((c, i) => (
            <div
              key={i}
              className="border border-gray-600 rounded-md p-4 bg-gray-900"
            >
              <p className="font-semibold">{c.name}</p>
              <p className="whitespace-pre-wrap">{c.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default BlogDetails;