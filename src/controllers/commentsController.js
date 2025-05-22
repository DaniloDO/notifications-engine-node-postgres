
class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }

    async createComment(req, res) {
        const commentData = req.body; 

        try {
            const newComment = await this.commentsService.createComment(commentData); 
            res.status(201).json({message: "Comment created successfully."}); 
        } 
        
        catch (error) {
            console.error("Error in CommentsController handling comment creation.", error.message); 
            res.status(400).json({error: "Unable to create new comment"}); 
        }

    }

    async getCommentById(req, res) {

    }

    async updateComment(req, res) {
  
    }

    async deleteComment(req, res) {
   
    }
}

export default CommentsController; 