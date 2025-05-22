
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
            console.error("Error in UsersController handling user creation.", error.message); 
            res.status(400).json({error: "Unable to create new user"}); 
        }

        
    }

    async getUserByEmail(req, res) {
        try {
            const { userEmail } = req.params; 
            
            const user = await this.usersService.getUserByEmail(userEmail); 
            if(!user){
                res.status(404).json({error: "User not found."});
            }

            const publicUser = {
                firstName: user.first_name,
                lastName: user.last_name,
                userEmail: user.email 
            };

            return res.status(200).json(publicUser); 
        } 
        
        catch (error) {
            console.error('Error in usersController handling getUserByEmail', error.message);
            res.status(400).json({error: 'Unable to find user'}); 
        }
    }

    async getUserById(req, res) {
        try {
            const { userId } = req.params; 
            
            const user = await this.usersService.getUserById(userId); 
            if(!user){
                res.status(404).json({error: "User not found."});
            }

            const publicUser = {
                firstName: user.first_name,
                lastName: user.last_name,
                userEmail: user.email 
            };

            return res.status(200).json(publicUser); 
        } 
        
        catch (error) {
            console.error('Error in usersController handling getUserById', error.message);
            res.status(400).json({error: 'Unable to find user'}); 
        }
    }

    async getAllUsers(req, res) {}

    async updateUser(req, res) {
        const { userId } = req.params; 
        const userData = req.body; 

        try {
            const user = await this.usersService.updateUser(userId, userData); 
            if(!user){
                return res.status(404).json({error: "User not found"}); 
            }

            res.status(200).json({ message: 'User updated successfully', user: user });
        } 
        
        catch (error) {
            console.error('Error in userController handling updateUser', error.message);
            res.status(400).json({error: 'Unable to update user'});   
        }
    }

    async deleteUser(req, res) {
        const { userId } = req.params;
        
        try {
            const response = await this.usersService.deleteUser(userId); 
            if(!response){
                return res.status(404).json({error: "User not found."})
            }
            
            res.status(200).json({message: "User deleted successfully"}); 
        } 
        
        catch (error) {
            console.error('Error in userController handling deleteUser', error.message);
            res.status(400).json({message: 'Unable to delete user'}); 
        }
    }

}

export default UsersController; 