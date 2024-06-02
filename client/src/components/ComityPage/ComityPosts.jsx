import React from "react";
import { MediaSVG, PostCard, ThoughtsSVG } from "../index";
const ComityPosts = () => {
  const posts = [
    {
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266157/cld-sample-4.jpg",
      username: "Mematorians",
      date: "2 days ago",
      postImage:
        "https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D",
      content: "CSK🦁",
      likes: "1k",
      comments: [
        {
          userImage: "https://via.placeholder.com/100",
          username: "Bhawana",
          content:
            "Jaipur would be the safest place to host an IPL game right now...",
        },
        {
          userImage: "https://via.placeholder.com/100",
          username: "Sujeet Suman",
          content:
            "Rajasthan Royals need to blame themselves for not having a game in Guwahati...",
        },
      ],
    },
    {
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266156/cld-sample-3.jpg",
      username: "Sports Fanatic",
      date: "1 day ago",
      postImage:
        "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvY2NlcnxlbnwwfHwwfHx8MA%3D%3D/600x400",
      content: "What a match last night!",
      likes: "2k",
      comments: [
        {
          userImage: "https://via.placeholder.com/100",
          username: "John Doe",
          content: "It was absolutely thrilling!",
        },
        {
          userImage: "https://via.placeholder.com/100",
          username: "Jane Smith",
          content: "Best game of the season so far.",
        },
      ],
    },
    {
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266148/samples/breakfast.jpg",
      username: "Food Lover",
      date: "3 days ago",
      postImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266148/samples/breakfast.jpg",
      content: "Check out this delicious meal I had today.",
      likes: "500",
      comments: [
        {
          userImage: "https://via.placeholder.com/100",
          username: "Gourmet Chef",
          content: "Looks scrumptious!",
        },
        {
          userImage: "https://via.placeholder.com/100",
          username: "Foodie123",
          content: "Where did you get it from?",
        },
      ],
    },
    {
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266157/cld-sample-4.jpg",
      username: "Mematorians",
      date: "a week ago",
      postImage: "",
      content:
        "Technology has revolutionized the way we live, work, and communicate. From smartphones and the internet to artificial intelligence and renewable energy, advancements in technology continuously reshape our world. These innovations drive efficiency, improve access to information, and foster global connectivity. As technology evolves, it offers new opportunities and challenges, requiring us to adapt and embrace change. Ultimately, technology empowers us to solve complex problems and enhance the quality of life.",
      likes: "14k",
      comments: [
        {
          userImage: "https://via.placeholder.com/100",
          username: "Bhawana",
          content:
            "Jaipur would be the safest place to host an IPL game right now...",
        },
        {
          userImage: "https://via.placeholder.com/100",
          username: "Sujeet Suman",
          content:
            "Rajasthan Royals need to blame themselves for not having a game in Guwahati...",
        },
      ],
    },
    {
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266148/samples/smile.jpg",
      username: "Travel Enthusiast",
      date: "5 days ago",
      postImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266147/samples/balloons.jpg",
      content: "Exploring the beautiful landscapes of Iceland.",
      likes: "3k",
      comments: [
        {
          userImage: "https://via.placeholder.com/100",
          username: "Traveler Mike",
          content: "Iceland is on my bucket list!",
        },
        {
          userImage: "https://via.placeholder.com/100",
          username: "Wanderlust Jane",
          content: "Stunning views, thanks for sharing.",
        },
      ],
    },
    {
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/ar_1:1,b_rgb:262c35,bo_5px_solid_rgb:000000,c_fill,g_auto,r_max,w_1000/v1703266149/samples/look-up.jpg",
      username: "Tech Geek",
      date: "1 week ago",
      postImage:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      content: "Just got my hands on the latest gadget!",
      likes: "800",
      comments: [
        {
          userImage: "https://via.placeholder.com/100",
          username: "Gadget Guru",
          content: "How do you like it so far?",
        },
        {
          userImage: "https://via.placeholder.com/100",
          username: "Tech Savvy",
          content: "Can’t wait to get one myself.",
        },
      ],
    },
  ];

  return (
    <div className="w-full pb-16 sm:pb-0 md:w-2/3 lg:w-2/4 overflow-y-auto custom-scrollbar no-scroll-mobile">
      <div className="flex flex-col items-center px-2 lg:px-0">
        {/* What's on your mind section */}
        <div className="w-full mb-2 bg-white shadow-lg dark:bg-slate-900 rounded-lg p-2">
        <div className="flex w-full justify-between gap-3 border-b border-b-slate-300 dark:border-b-slate-800 pt-2 pb-3">
          <img
            src="https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg"
            alt=""
            width={"50px"}
            height={"50px"}
            className="rounded-full"
          />
          <input
            type="text"
            className="flex-1 font-cata bg-gray-200 dark:bg-gray-800 rounded-2xl p-3 focus:outline-none text-slate-900 dark:text-slate-50 placeholder:text-slate-600 placeholder:dark:text-slate-400 placeholder:text-sm sm:placeholder:text-lg"
            placeholder="Thoughts shared in Comity, stays in Comity..."
          />
        </div>

        <div className="font-cata dark:text-slate-400 text-slate-800 font-semibold mt-2 flex justify-evenly">
          <p className="hover:cursor-pointer flex gap-1 items-center p-1 rounded-sm hover:underline">
            <MediaSVG width="30px" height="30px" />{" "}
            <span className="text-lg">Media</span>
          </p>
          <p className="hover:cursor-pointer flex gap-1 items-center p-1 rounded-sm hover:underline">
            <ThoughtsSVG width="30px" height="30px"/>
            <span className="text-lg">Thoughts</span>
          </p>
          {/* <p className="hover:cursor-pointer flex gap-1 items-center p-1 rounded-sm hover:underline">
            <EventSVG width="30px" height="30px" />{" "}
            <span className="text-lg">Event</span>
          </p> */}
        </div>
      </div>

        {/* Posts display */}
        {posts.map((post) => (
          <PostCard post={post} key={post.username} className="mb-2"/>
        ))}
      </div>
    </div>
  );
};

export default ComityPosts;
