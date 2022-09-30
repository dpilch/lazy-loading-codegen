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
// 
// async function getBlogs() {
//   try {
//     const b = await DataStore.query(Blog);
//     console.log(b.map(blog => blog.posts));
//   } catch (error) {
//     console.log(error);
//   }
// }
// 
// async function getPosts() {
//   try {
//     const p = await DataStore.query(Post);
//     console.log(p.map(post => post.blog));
//   } catch (error) {
//     console.log(error);
//   }
// }
// async function getComments() {
//   try {
//     const c = await DataStore.query(Comment);
//   } catch (error) {
//     console.log(error);
//   }
// }
// 
// 
// async function deleteAll() {
//   try {
//       /*
//     await DataStore.delete(Post, p => p.title.ne('some random title i wouldnt use'));
//     await DataStore.delete(Post, p => p.title.eq(''));
//     await DataStore.delete(Blog, b => b.name.eq(''));
//     await DataStore.delete(Blog, b => b.name.eq('test'));
//     await DataStore.delete(Blog, b => b.name.eq("some random name i wouldnt use"));
//        */
//   } catch (error) {
//     console.log(error);
//   }
// 
// }
