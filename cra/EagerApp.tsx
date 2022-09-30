import { useState } from "react";
import { Button, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { Blog, Post, Comment } from "./models";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [id, setId] = useState("");
  function clearDataStore() {
    DataStore.clear();
  }

  async function createBlog() {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }

  async function getBlogs() {
    try {
      const b = await DataStore.query(Blog);
      console.log(b.map(blog => blog.posts));
      setBlogs(b);
    } catch (error) {
      console.log(error);
    }
  }

  async function getPosts() {
    try {
      const p = await DataStore.query(Post);
      console.log(p.map(post => post.blog));
      setPosts(p);
    } catch (error) {
      console.log(error);
    }
  }
  async function getComments() {
    try {
      const c = await DataStore.query(Comment);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteAll() {
    try {
      await DataStore.delete(Post, p => p.title.ne('some random title i wouldnt use'));
      await DataStore.delete(Post, p => p.title.eq(''));
      await DataStore.delete(Blog, b => b.name.eq(''));
      await DataStore.delete(Blog, b => b.name.eq('test'));
      await DataStore.delete(Blog, b => b.name.eq("some random name i wouldnt use"));
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="App">
      <Button onClick={clearDataStore}>Clear DataStore</Button>
      <Button onClick={createBlog}>Create Blog</Button>
      <Button onClick={getBlogs}>Get Blogs</Button>
      <Button onClick={getPosts}>Get Posts</Button>
      <Button onClick={getComments}>Get Comments</Button>
      <Button onClick={deleteAll}>Delete All</Button>
      <TextField
        label="Name"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
      />
      <TextField
        label="ID"
        value={id}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setId(event.target.value)}
      />
      {blogs.map((blog) => {
        return <p key={blog.id}>{blog.name} - {blog.id}</p>;
      })}
    </div>
  );
}

export default App;
