import { createUser, deleteUser, getUser, getUsers, updateUser } from "../services/user.js";

export const createUserHandler = async (req, res) => {
    try{
        const result = await createUser(req.body);
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: result
        });
    }catch(error) {
        res.status(500).json({
            success: false,
            message: 'Error creating user',
            error: error.message
        });
    }
}

export const getAllUsersHandler = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching users',
            error: error.message
        });
    }
}

export const getUserByIdHandler = async (req, res) => {
    try {
        const user = await getUser(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching user',
            error: error.message
        });
    }
}

export const updateUserHandler = async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating user',
            error: error.message
        });
    }
}

export const deleteUserHandler = async (req, res) => {
    try {
        const user = await deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting user',
            error: error.message
        });
    }
}