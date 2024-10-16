// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== BLOG PARAMS
export type CreateBlogParams = {
  userId: string;
  blog: {
    title: string;
    description: string;
    location: string;
    imageUrl: string;
    readingTime: string;
    publishedDateTime: Date;
    categoryId: string;
    price: string;
    isFree: boolean;
    url: string;
  };
  path: string;
};

export type UpdateBlogParams = {
  userId: string;
  blog: {
    _id: string;
    title: string;
    imageUrl: string;
    description: string;
    location: string;
    readingTime: string;
    publishedDateTime: Date;
    categoryId: string;
    price: string;
    isFree: boolean;
    url: string;
  };
  path: string;
};

export type DeleteBlogParams = {
  blogId: string;
  path: string;
};

export type GetAllBlogsParams = {
  query: string;
  category: string;
  limit: number;
  page: number;
};

export type GetBlogsByUserParams = {
  userId: string;
  limit?: number;
  page: number;
};

export type GetRelatedBlogsByCategoryParams = {
  categoryId: string;
  blogId: string;
  limit?: number;
  page: number | string;
};

export type Blog = {
  _id: string;
  title: string;
  description: string;
  price: string;
  isFree: boolean;
  imageUrl: string;
  location: string;
  readingTime: string;
  publishedDateTime: Date;
  url: string;
  blogger: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  category: {
    _id: string;
    name: string;
  };
};

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string;
};

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
  blogTitle: string;
  blogId: string;
  price: string;
  isFree: boolean;
  buyerId: string;
};

export type CreateOrderParams = {
  stripeId: string;
  blogId: string;
  buyerId: string;
  totalAmount: string;
  createdAt: Date;
};

export type GetOrdersByBlogParams = {
  blogId: string;
  searchString: string;
};

export type GetOrdersByUserParams = {
  userId: string | null;
  limit?: number;
  page: string | number | null;
};

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
