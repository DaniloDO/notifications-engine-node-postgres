
class PostsRepository {
    constructor (postgresClient) {
        this.postgresClient = postgresClient; 
    }

    async createPost(postData) {
        const { title, content, userId } = postData; 

        try {
            const query = `
                INSERT INTO posts (title, content, user_id)
                VALUES ($1, $2, $3)
                RETURNING *; 
            `;
            const values = [title, content, userId]; 
            
            const { rows } = await this.postgresClient.pool.query(query, values); 
            return rows[0]; 
        } 
        
        catch (error) {
            console.error("Error in PostsRepository creating post:", error.message); 
            throw error;   
        }
    }

    async getPostById(postId) {

        try {
            const query = `
                SELECT * FROM posts WHERE id = $1;
            `;

            const values = [postId]; 

            const { rows } = await this.postgresClient.pool.query(query, values); 
            return rows[0]; 
        } 
        
        catch (error) {
            console.error("Error in user PostsRepository getting post by id:", error.message); 
            throw error;  
        }



    }

    async updatePost(postId, postData) {
        const { title, content, userId } = postData;
        
        try {
            const query = `
                UPDATE posts
                SET title = $1,
                    content = $2,
                    user_id = $3
                WHERE id = $4
                RETURNING *;
            `;
            const values = [ title, content, userId, postId ]; 

            const { rows } = await this.postgresClient.pool.query(query, values); 
            return rows[0]; 
            
        } 
        
        catch (error) {
            console.error('Error in PostsRepository updating post data:', error.message);
            throw error;  
        }
    }

    async deletePost(postId) {
        try {
            const query = `
                DELETE FROM posts WHERE id = $1
                RETURNING *; 
            `;
            const values = [ postId ]; 
            
            const { rows } = await this.postgresClient.pool.query(query, values); 
            return rows[0]; 
        } 
        
        catch (error) {
            console.error("Error in PostRepository deleting post", error.message);
            throw error; 
        }
    }
 



}

export default PostsRepository; 