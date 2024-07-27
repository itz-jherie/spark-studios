import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Power of Custom Branding: How to Stand Out in a Crowded Market",
    paragraph:
      "In today’s competitive landscape, having a unique brand identity is crucial. Discover the key elements of custom branding and how it can set your business apart from the competition.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Emma Richardson",
      image: "/images/blog/author-01.png",
      designation: "Brand Designer",
    },
    tags: ["Branding"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Maximizing Your Digital Marketing Strategy: Tips and Tricks",
    paragraph:
      "Digital marketing is more than just a buzzword; it’s a vital component of any successful business strategy. Learn effective tips and tricks to enhance your digital marketing efforts.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "David Nguyen",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Digital Marketing"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Creating User-Centric Websites: Best Practices for 2024",
    paragraph:
      "A great website is more than just visually appealing—it’s user-friendly and designed to convert visitors into customers. Discover the best practices for creating user-centric websites in 2024.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Jonas Martinez",
      image: "/images/blog/author-03.png",
      designation: "Web Developer",
    },
    tags: ["Web Development"],
    publishDate: "2024",
  },
];
export default blogData;
