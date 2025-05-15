
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

    async getUserById(userId) {
        try {
            const query = `
                SELECT * FROM users WHERE id = $1;
            `;
            const values = [ userId ]; 
            
            const { rows } = await this.postgresClient.pool.query(query, values);
            
            return rows[0]; 
        } 
        
        catch (error) {
            console.error("Error in user UsersRepository getting user by id:", error.message); 
            throw error;  
        }
    }

    async getAllUsers() {}

    async updateUser(userId, userData) {
        const { firstName, lastName, email, password } = userData; 

        try {
            const query = `
                UPDATE users 
                SET first_name = $1,
                    last_name = $2,
                    email = $3,
                    user_password = $4
                WHERE id = $5
                RETURNING *; 
            `; 

            const values = [ firstName, lastName, email, password, userId ]; 

            const { rows } = await this.postgresClient.pool.query(query, values);
            
            return rows[0]; 
        } 
        
        catch (error) {
            console.error('Error in UserRepository updating user data:', error.message);
            throw error;  
        }
    }

    async deleteUser(userId) {
        const query = `
        DELETE FROM users WHERE id = $1
        RETURNING *;
        `;
        const values = [userId]; 

        try {
            const { rows } = await this.postgresClient.pool.query(query, values); 
            return rows[0]; 
        } 
        
        catch (error) {
            console.error("Error in UserRepository deleting user", error.message);
            throw error; 
        }
    }
}

export default UsersRepository; 