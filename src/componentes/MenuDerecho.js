// import { useState } from "react";

export default function MenuDerecho() {
  return (
    <aside className="text-white">
      <h2 className="text-pink-500 font-bold text-sm mb-2">BROWSE BY CATEGORY</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {['CSS', 'React', 'Animation', 'Career', 'JavaScript', 'Next.js', 'General'].map((category) => (
          <span key={category} className="px-3 py-1 border border-gray-500 rounded-md text-sm">{category}</span>
        ))}
      </div>
      <h2 className="text-pink-500 font-bold text-sm mb-2">POPULAR CONTENT</h2>
      <ul className="space-y-2">
        {[
          "An Interactive Guide to Flexbox",
          "A Modern CSS Reset",
          "An Interactive Guide to CSS Transitions",
          "How To Center a Div",
          "The End of Front-End Development",
          "Designing Beautiful Shadows in CSS",
          "CSS Variables for React Devs",
          "Why React Re-Renders",
          "An Interactive Guide to CSS Grid",
        ].map((item) => (
          <li key={item} className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
            <span className="w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
