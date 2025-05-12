
class UsersRepository {
    constructor(postgresClient) {
        this.postgresClient = postgresClient; 
    }

    async createUser(userData) {
        try {
            const { firstName, lastName, email, password, createdAt } = userData;

            const query = `
            INSERT INTO users (first_name, last_name, email, user_password, created_at)
            VALUES($1, $2, $3, $4)
            RETURNING *; 
            `; 
            const values = [firstName, lastName, email, password, createdAt]; 
    
            const { rows } = await this.postgresClient.query(query, values); 
    
            return rows[0]; 
        } 
        
        catch (error) {
            console.error("Error in user UsersRepository creating user:", error.message); 
            throw error; 
        }


        
    }

    async getUserByEmail(userEmail) {}

    async getUserById(userId) {}

    async getAllUsers() {}

    async updateUser(userId, userData) {}

    async deleteUser(userId) {}
}

export default UsersRepository; 