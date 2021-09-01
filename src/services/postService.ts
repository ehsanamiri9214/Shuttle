import { Service } from "typedi";
import { Post } from "../models";
import { CustomError } from "../types";

@Service()
class PostService {
  constructor() {}

  async get(postId: string) {
    try {
      const post = await Post.findById(postId);
      if (!post) throw new CustomError(404, "Post not found.");
      return post;
    } catch (err) {
      throw err;
    }
  }

  async create(userId: string, body: string) {
    try {
      const postModel = new Post({
        body: body,
        creator: userId,
      });
      const post = await postModel.save();
      return post;
    } catch (err) {
      throw err;
    }
  }

  async update(postId: string, body: string) {
    try {
      const post = await Post.findOneAndUpdate({ _id: postId }, { body: body });
      if (!post) throw new CustomError(404, "Post not found.");
      return post;
    } catch (err) {
      throw err;
    }
  }

  async remove(postId: string, userId: string) {
    const post = await Post.findById(postId);
    if (!post) throw new CustomError(404, "Post not found.");
    if (post.creator.toString() === userId) {
      const deletedPost = await Post.findByIdAndDelete(postId);
      if (!deletedPost) throw new CustomError(404, "Post not found.");
      return true;
    } else {
      throw new CustomError(401, "You're not creator of the post.");
    }
    try {
    } catch (err) {
      throw err;
    }
  }
}

export default PostService;
