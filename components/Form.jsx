import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left blue_gradient">{type} Post</h1>
      <p className="desc text-left">
        {type} and share amazing prompts with the world, and let you imagination
        run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col glassmorphism gap-8 w-full max-w-2xl"
      >
        <div>
          <span className="font-semibold">Your AI Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
            }}
            placeholder="Write your prompt here"
            required
            className="form_textarea"
          />
        </div>
        <div>
          <span className="font-semibold">
            Tag <span className="font-normal">(#product, #web, #idea)</span>
          </span>
          <textarea
            value={post.tag}
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
            placeholder="Write your prompt here"
            required
            className="form_textarea"
          />
        </div>
        <div className="flex justify-end items-center gap-4">
          <Link href={"/"} className="text-sm text-gray-500">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="bg-primary-orange text-white rounded-full py-2 px-5"
          >
            {type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
