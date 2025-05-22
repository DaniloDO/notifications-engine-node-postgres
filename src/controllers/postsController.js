
class PostsController {
    constructor(postsService) {
        this.postsService = postsService; 
    }

    async createPost(req, res) {
        const postData = req.body; 

        try {
            const newPost = await this.postsService.createPost(postData);
            res.status(201).json({message: "Post created successfully."}); 
        } 
        
        catch (error) {
            console.error("Error in PostsController handling post creation.", error.message); 
            res.status(400).json({error: "Unable to create new post"});    
        }


    }

    async getPostById(req, res) {
        const { postId } = req.params; 

        try {
            const post = await this.postsService.getPostById(postId);
            if(!post){
                res.status(404).json({error: "Post not found."});
            }

            res.status(200).json(post); 
        } 
        
        catch (error) {
            console.error('Error in postsController handling getPostById', error.message);
            res.status(400).json({error: 'Unable to find post'}); 
        }
    }

    async updatePost(req, res) {
        const { postId } = req.params;
        const postData = req.body; 

        try {
            const post = await this.postsService.updatePost(postId, postData); 
            if(!post){
                res.status(404).json({error: "Post not found."})
            }

            res.status(200).json({ message: 'Post updated successfully', post: post }); 
        } 
        
        catch (error) {
            console.error('Error in postController handling updatePost', error.message);
            res.status(400).json({error: 'Unable to update post'}); 
        }
    }

    async deletePost(req, res) {
        const { postId } = req.params; 

        try {
            const response = await this.postsService.deletePost(postId);
            if(!response){
                res.status(404).json({error: "Post not found."}); 
            }

            res.status(200).json({message: "Post deleted successfully"}); 
        } 
        
        catch (error) {
            console.error('Error in postsController handling deletePost', error.message);
            res.status(400).json({message: 'Unable to delete post'}); 
        }
    }

}

export default PostsController; 