import User from "../models/user.js";


export const createUser = async (userData) => {
        const user = new User(userData);
        await user.save();
        return user;
}

export const getUsers = async () => {
        return await User.find();
}

export const getUser = async (id) => {
        return await User.findById(id);
}

export const updateUser = async (id, userData) => {
        const user = await User.findByIdAndUpdate(id, userData, { new: true });
        return user;
}

export const deleteUser = async (id) => {
        const user = await User.findByIdAndDelete(id);
        return user;
}