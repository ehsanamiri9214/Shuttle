import { Service } from "typedi";
import { Post } from "../models";
import { CustomError } from "../types";

@Service()
class PostService {
  constructor() {}

  async getAll() {
    try {
    } catch (err) {
      throw err;
    }
  }

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

  async update() {
    try {
    } catch (err) {
      throw err;
    }
  }

  async remove() {
    try {
    } catch (err) {
      throw err;
    }
  }
}

export default PostService;
