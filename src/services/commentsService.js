
class CommentsService {
    constructor(commentRepository, eventsService) {
        this.commentRepository = commentRepository;
        this.eventsService = eventsService;  
    }

    async createComment(commentData) {
        try {
            const comment = await this.commentRepository.createComment(commentData); 

            console.log(comment.id, comment.user_id); 
            await this.eventsService.recordEvent({
                eventType: "NEW_COMMENT",
                entityType: "comment",
                entityId: comment.id,
                actorId: comment.user_id
            });

            return comment; 
        } 
        
        catch (error) {
            console.error('Error in CommentsService creating comment:', error.message);
            throw error;
        }
  
    }

    async getCommentById(commentId) {

    }

    async updateComment(commentId, commentData) {
  
    }

    async deleteComment(commentId) {
   
    }
}

export default CommentsService;  