// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post, Comment, Rating } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  Rating
};