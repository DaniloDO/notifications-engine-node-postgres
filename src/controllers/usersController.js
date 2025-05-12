
class UsersController {
    constructor(usersService) {
        this.usersService = usersService; 
    }

    async createUser(req, res) {

        try {
            const userData = req.body; 

            const newUser = await this.usersService.createUser(userData); 
            res.status(201).json({message: "user created successfully"}); 
        } 
        
        catch (error) {
            console.error("Error in UsersControllers handling user creation.", error.message); 
            res.status(400).json({message: "Unable to create new user"}); 
        }

        
    }

    async getUserByEmail(req, res) {}

    async getUserById(req, res) {}

    async getAllUsers(req, res) {}

    async updateUser(req, res) {}

    async deleteUser(req, res) {}

}