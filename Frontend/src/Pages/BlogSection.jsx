import React from 'react';

const blogPosts = [
  {
    title: 'How to save money on textbooks',
    image: '../../public/Images/usedTextbooks.png', // Replace with actual image path
    description: 'In this article, we will give you some tips to help you save money on textbooks.',
    author: 'Professor',
  },
  {
    title: 'How to study more effectively',
    image: '../../public/Images/StudyEffectively.png', // Replace with actual image path
    description: 'In this article, we will give you some tips to help you study more effectively.',
    author: 'Professor',
  },
  {
    title: 'How to stay organized in college',
    image: '../../public/Images/Organized.png', // Replace with actual image path
    description: 'In this article, we will give you some tips to help you stay organized in college.',
    author: 'Professor',
  },
];

function BlogSection() {
  return (
    <div className="container mx-auto py-16 mt-44 bg-[#CDDEEE]">
      <h2 className="text-center text-3xl font-bold  mt-10 font-roboto">Read our blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-[90px] mr-[90px]">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#d3d3d3] rounded-lg overflow-hidden relative mt-24  mb-8 h-[349px] "
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[170px] object-cover "
            />
            <div className="p-4 absolute  bg-[#d3d3d3] ">
              <h3 className="text-black text-lg font-semibold mb-2 mt-3">
                {post.title}
              </h3>
              <p className="text-gray-700 mt-3">{post.description}</p>
              <div className="flex items-center mt-2">
                <img
                  src="../../public/Images/author-icon.png" // Replace with actual icon path
                  alt="Author"
                  className="w-6 h-6 rounded-full mr-2 mt-3"
                />
                <span className="text-black">{post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;