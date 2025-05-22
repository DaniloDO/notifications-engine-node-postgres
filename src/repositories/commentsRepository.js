
class CommentsRepository {
    constructor(postgresClient) {
        this.postgresClient = postgresClient; 
    }

    async createComment(commentData) {
        const { content, userId, postId } = commentData; 

        try {
            const query = `
                INSERT INTO comments (content, user_id, post_id)
                VALUES ($1, $2, $3)
                RETURNING *; 
            `;
            const values = [ content, userId, postId ]; 

            const { rows } = await this.postgresClient.pool.query(query, values); 
            return rows[0]; 
        } 
        
        catch (error) {
            console.error("Error in CommentsRepository creating comment:", error.message); 
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

export default CommentsRepository; 