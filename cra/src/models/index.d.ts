import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type BlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RatingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

class EagerBlog {
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  
}

class LazyBlog {
  readonly id: string;
  readonly name: string;
  readonly posts: AsyncCollection<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  
}

export declare type Blog = LazyLoading extends undefined ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog, BlogMetaData>) => Blog) & Blog & {
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog, BlogMetaData>) => MutableModel<Blog, BlogMetaData> | void): Blog;
}

class EagerPost {
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog | null;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  
}

class LazyPost {
  readonly id: string;
  readonly title: string;
  readonly blog: AsyncItem<Blog | undefined>;
  readonly comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  
}

export declare type Post = LazyLoading extends undefined ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post, PostMetaData>) => Post) & Post & {
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

class EagerComment {
  readonly id: string;
  readonly post?: Post | null;
  readonly content: string;
  readonly rating?: Rating | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentRatingId?: string | null;
  
}

class LazyComment {
  readonly id: string;
  readonly post: AsyncItem<Post | undefined>;
  readonly content: string;
  readonly rating: AsyncItem<Rating | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentRatingId?: string | null;
  
}

export declare type Comment = LazyLoading extends undefined ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment, CommentMetaData>) => Comment) & Comment & {
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

class EagerRating {
  readonly id: string;
  readonly score?: number | null;
  readonly comment?: Comment | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  
}

class LazyRating {
  readonly id: string;
  readonly score?: number | null;
  readonly comment: AsyncItem<Comment | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  
}

export declare type Rating = LazyLoading extends undefined ? EagerRating : LazyRating

export declare const Rating: (new (init: ModelInit<Rating, RatingMetaData>) => Rating) & Rating & {
  static copyOf(source: Rating, mutator: (draft: MutableModel<Rating, RatingMetaData>) => MutableModel<Rating, RatingMetaData> | void): Rating;
}