
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

    async getUserByEmail(userEmail) {}

    async getUserById(userId) {}

    async getAllUsers() {}

    async updateUser(userId, userData) {}

    async deleteUser(userId) {}
}

export default UsersService; 