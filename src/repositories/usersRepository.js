
class UsersRepository {
    constructor(postgresClient) {
        this.postgresClient = postgresClient; 
    }

    async createUser(userData) {
        try {
            const { firstName, lastName, email, password } = userData;

            const query = `
            INSERT INTO users (first_name, last_name, email, user_password)
            VALUES($1, $2, $3, $4 )
            RETURNING *; 
            `; 
            const values = [firstName, lastName, email, password]; 
            
            const { rows } = await this.postgresClient.pool.query(query, values); 
    
            return rows[0]; 
        } 
        
        catch (error) {
            console.error("Error in user UsersRepository creating user:", error.message); 
            throw error; 
        }


        
    }

    async getUserByEmail(userEmail) {
        try {
            const query = `
            SELECT * FROM users WHERE email = $1; 
            `; 
            const values = [ userEmail ]; 
            
            const { rows } = await this.postgresClient.pool.query(query, values); 
            
            return rows[0];
        } 
        
        catch (error) {
            console.error("Error in user UsersRepository getting user by email:", error.message); 
            throw error;    
        }
    }

    async getUserById(userId) {}

    async getAllUsers() {}

    async updateUser(userId, userData) {}

    async deleteUser(userId) {}
}

export default UsersRepository; 