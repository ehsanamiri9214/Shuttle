import { Service } from "typedi";
import { Post } from "../models";

@Service()
class PostService {
  constructor() {}

  async getAll() {
    try {
    } catch (err) {
      throw err;
    }
  }

  async get() {
    try {
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
