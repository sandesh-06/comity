import React from "react";
import { SearchBar, PostPreview } from "../index";

const ExploreMainContent = () => {
  const posts = [
    {
      id: 1,
      type: "image",
      content:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266152/samples/chair-and-coffee-table.jpg",
      username: "Homeables",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266152/samples/chair-and-coffee-table.jpg",
    },
    {
      id: 2,
      type: "text",
      content: "This is a text post",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg",
      username: "It's Alright!",
    },
    {
      id: 3,
      type: "image",
      content:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266151/samples/man-on-a-street.jpg",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266151/samples/man-on-a-street.jpg",
      username: "We share thoughts",
    },
    {
      id: 4,
      type: "text",
      content: "Another text post",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg",
      username: "Mematorians",
    },
    {
      id: 5,
      type: "image",
      content:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266150/samples/man-on-a-escalator.jpg",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266150/samples/man-on-a-escalator.jpg",
      username: "Let's go drive",
    },
    {
      id: 6,
      type: "text",
      content: "Yet another text post",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg",
      username: "Come Unity",
    },
    {
      id: 7,
      type: "image",
      content:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266154/samples/woman-on-a-football-field.jpg",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266154/samples/woman-on-a-football-field.jpg",
      username: "PhotoGallery",
    },
    {
      id: 8,
      type: "text",
      content: "Text post again",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg",
      username: "We say rubbish!",
    },
    {
      id: 9,
      type: "image",
      content:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266147/samples/shoe.jpg",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266147/samples/shoe.jpg",
      username: "Fitness Freak",
    },
    {
      id: 11,
      type: "image",
      content:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266150/samples/outdoor-woman.jpg",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266150/samples/outdoor-woman.jpg",
      username: "Stunner Runner",
    },
    {
      id: 13,
      type: "image",
      content:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266135/samples/cloudinary-group.jpg",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266135/samples/cloudinary-group.jpg",
      username: "Serve Humanity",
    },
    {
      id: 14,
      type: "text",
      content: "One more text post",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg",
      username: "SportzMen",
    },
    {
      id: 15,
      type: "image",
      content:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266133/samples/imagecon-group.jpg",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266133/samples/imagecon-group.jpg",
      username: "Friend indeed.",
    },
    {
      id: 16,
      type: "text",
      content: "Last text post",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg",
      username: "No fear speech",
    },
    {
      id: 17,
      type: "image",
      content:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266128/samples/bike.jpg",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266128/samples/bike.jpg",
      username: "Travelers Guide",
    },
    {
      id: 18,
      type: "text",
      content: "One more text post",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg",
      username: "Unity in Comity",
    },
    {
      id: 19,
      type: "image",
      content:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266126/samples/sheep.jpg",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/v1703266126/samples/sheep.jpg",
      username: "The Morning Club",
    },
    {
      id: 20,
      type: "text",
      content: "Last text post",
      userImage:
        "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg",
      username: "Foodees",
    },
  ];

  return (
    <section className="w-full h-full overflow-y-scroll no-scrollbar">
      {/* Search bar */}
      <div className="md:hidden p-2">
        <SearchBar placeholder="Explore Comitys" />
      </div>

      {/* Explore posts */}
      <div className="pb-2 sm:py-2 px-2 grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-full md:overflow-y-scroll custom-scrollbar">
        {posts.map((post) => (
          <div key={post.id} className="w-full h-60 lg:h-72">
            <PostPreview post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreMainContent;
