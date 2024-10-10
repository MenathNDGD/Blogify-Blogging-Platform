export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Create Blog",
    route: "/blogs/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const blogDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  readingTime: "",
  publishedDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
