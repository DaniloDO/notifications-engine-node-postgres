
class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository; 
    }

    async createPost(postData) {
        try {
            const post = await this.postsRepository.createPost(postData); 
            return post;     
        } 
        
        catch (error) {
            console.error('Error in PostsService creating post:', error.message);
            throw error;
        }
    }

    async getPostById(postId) {
        try {
            const post = await this.postsRepository.getPostById(postId); 
            return post; 
        } 
        
        catch (error) {
            console.error('Error in PostsService getting post by id:', error.message);
            throw error; 
        }
    }

    async updatePost(postId, postData) {
        try {
            const post = await this.postsRepository.updatePost(postId, postData); 
            return post; 
        } 
        
        catch (error) {
            console.error('Error in PostService updating post:', error.message);
            throw error;
        }
    }

    async deletePost(postId) {
        try {
            const response = await this.postsRepository.deletePost(postId); 
            return response; 
        } 
        
        catch (error) {
            console.error('Error in PostService deleting post:', error.message);
            throw error;
        }
    }

}

export default PostsService; 