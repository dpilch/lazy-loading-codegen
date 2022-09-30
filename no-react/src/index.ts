import { DataStore } from "aws-amplify";
// import { AsyncCollection } from "@aws-amplify/datastore";
import { Blog, Post, Comment } from "./models";
const name = '';
const blog: Blog = await DataStore.save(
  new Blog({
      name,
  })
);
const post = await DataStore.save(
  new Post({
    title: name + 'post',
    blog,
  }),
);
const comment = await DataStore.save(
  new Comment({
    content: name + 'comment',
    post
  }),
);
const p: (Post | null)[] | null | undefined = blog.posts;
