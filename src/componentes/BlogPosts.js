import React from 'react';

const BlogPosts = () => {
  const posts = [
    {
      title: "Container Queries Unleashed",
      description: "Container queries expand the universe of designs that can be implemented, giving us whole new superpowers. Now that container queries are broadly available, I think it’s time we start exploring this potential! In this post, I’ll share the “killer pattern” I can’t stop using in my work, and explore what’s possible with this new capability.",
      link: "Read more"
    },
    {
      title: "Next-level frosted glass with backdrop-filter",
      description: "Glassy headers have become a core part of the “slick startup” UI toolkit, but they’re all missing that final 10% that really makes it shine. In this tutorial, you’ll learn how to create the most realistic lush frosted glass anywhere on the internet.",
      link: "Read more"
    },
    {
      title: "A Framework for Evaluating Browser Support",
      description: "Lots of exciting new features have been landing in CSS recently, and it can be tough trying to figure out if they’re safe to use or not. We might know that a feature is available for 92% of users, but is that sufficient? Where do we draw the line? In this blog post, I’ll share the framework I use for deciding whether or not to use a modern CSS feature.",
      link: "Read more"
    },
    {
      title: "A Friendly Introduction to Container Queries",
      description: "It’s been a couple of years since container queries started landing in browsers... so why isn’t anyone using them? It turns out that container queries are kinda tricky; they’re not as straightforward as media queries. In this tutorial, we’ll break it all down and make sense of them, so that you can start using them in your work.",
      link: "Read more"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">CSS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-white mb-4">{post.description}</p>
            <a href="#" className="text-blue-500 hover:text-blue-700">{post.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;