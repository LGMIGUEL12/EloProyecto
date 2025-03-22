export default function Articles() {
    return (
      <section className="w-full p-6 text-white">
        <h2 className="text-pink-500 font-bold text-sm mb-4">ARTICLES AND TUTORIALS</h2>
        <div className="space-y-6">
          {[
            {
              title: "A Million Little Secrets",
              link: "Deconstructing the \"Whimsical Animations\" landing page",
              description:
                "I spent the past few weeks packing as many easter eggs as I could into my latest project, and in this blog post, I want to dig into some of the more interesting details! If you’re interested in animations/interactions, you’ll want to check this one out; I share a bunch of my favourite secrets and tricks. 😁",
            },
            {
              title: "Container Queries Unleashed",
              description:
                "Container queries expand the universe of designs that can be implemented, giving us whole new superpowers. Now that container queries are broadly available, I think it’s time we start exploring this potential! In this post, I’ll share the ‘killer pattern’ I can’t stop using in my work, and explore what’s possible with this new capability.",
            },
            {
              title: "Next-level frosted glass with backdrop-filter",
              description:
                "Glassy headers have become a core part of the ‘slick startup’ UI toolkit, but they’re all missing that final 10% that really makes it shine. In this tutorial, you’ll learn how to elevate your aesthetics for a futuristic design.",
            },{
              title: "Next-level frosted glass with backdrop-filter",
              description:
                "Glassy headers have become a core part of the ‘slick startup’ UI toolkit, but they’re all missing that final 10% that really makes it shine. In this tutorial, you’ll learn how to elevate your aesthetics for a futuristic design.",
            },{
              title: "Next-level frosted glass with backdrop-filter",
              description:
                "Glassy headers have become a core part of the ‘slick startup’ UI toolkit, but they’re all missing that final 10% that really makes it shine. In this tutorial, you’ll learn how to elevate your aesthetics for a futuristic design.",
            },{
              title: "Next-level frosted glass with backdrop-filter",
              description:
                "Glassy headers have become a core part of the ‘slick startup’ UI toolkit, but they’re all missing that final 10% that really makes it shine. In this tutorial, you’ll learn how to elevate your aesthetics for a futuristic design.",
            },{
              title: "Next-level frosted glass with backdrop-filter",
              description:
                "Glassy headers have become a core part of the ‘slick startup’ UI toolkit, but they’re all missing that final 10% that really makes it shine. In this tutorial, you’ll learn how to elevate your aesthetics for a futuristic design.",
            },{
              title: "Next-level frosted glass with backdrop-filter",
              description:
                "Glassy headers have become a core part of the ‘slick startup’ UI toolkit, but they’re all missing that final 10% that really makes it shine. In this tutorial, you’ll learn how to elevate your aesthetics for a futuristic design.",
            },
          ].map((article, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-bold">{article.title}</h3>
              {article.link && (
                <p className="text-blue-400 cursor-pointer hover:underline">{article.link}</p>
              )}
              <p className="text-gray-300 mt-2">{article.description}</p>
              <p className="mt-2 text-white font-bold cursor-pointer hover:underline">Read more</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  