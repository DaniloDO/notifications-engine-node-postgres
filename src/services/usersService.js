
class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository; 
    }

    async createUser(userData) {
        try {
            const user = await this.usersRepository.createUser(userData); 

            return user; 
        } 
        
        catch (error) {
            console.error('Error in UsersService creating user:', error.message);
            throw error;
        }

    }

    async getUserByEmail(userEmail) {
        try {
            const user = await this.usersRepository.getUserByEmail(userEmail); 

            return user; 
        } 
        
        catch (error) {
            console.error('Error in UsersService getting user by email:', error.message);
            throw error;
        }
    }

    async getUserById(userId) {
        try {
            const user = await this.usersRepository.getUserById(userId); 

            return user; 
        } 
        
        catch (error) {
            console.error('Error in UsersService getting user by id:', error.message);
            throw error;
        }
    }

    async getAllUsers() {}

    async updateUser(userId, userData) {
        try {
        const user = await this.usersRepository.updateUser(userId, userData); 

        return user; 
        } 
        
        catch (error) {
            console.error('Error in UserService updating user:', error.message);
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            const response = await this.usersRepository.deleteUser(userId); 
            return response; 
        } 
        
        catch (error) {
            console.error('Error in UserService deleting user:', error.message);
            throw error;
        }
    }
}

export default UsersService; 