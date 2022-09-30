/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogPostsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogPostsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogPostsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
          commentRatingId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogPostsId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
          commentRatingId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogPostsId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
          commentRatingId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogPostsId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostsId
      }
      content
      rating {
        id
        score
        comment {
          id
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
          commentRatingId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ratingCommentId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCommentsId
      commentRatingId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostsId
      }
      content
      rating {
        id
        score
        comment {
          id
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
          commentRatingId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ratingCommentId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCommentsId
      commentRatingId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostsId
      }
      content
      rating {
        id
        score
        comment {
          id
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
          commentRatingId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ratingCommentId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCommentsId
      commentRatingId
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
      id
      score
      comment {
        id
        post {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogPostsId
        }
        content
        rating {
          id
          score
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          ratingCommentId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
        commentRatingId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ratingCommentId
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
      id
      score
      comment {
        id
        post {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogPostsId
        }
        content
        rating {
          id
          score
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          ratingCommentId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
        commentRatingId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ratingCommentId
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
      id
      score
      comment {
        id
        post {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogPostsId
        }
        content
        rating {
          id
          score
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          ratingCommentId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
        commentRatingId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ratingCommentId
    }
  }
`;
