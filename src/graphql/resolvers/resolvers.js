import User from "../../models/userModel.js";

const resolvers = {
  Query: {
    getUser: async (parent, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Failed to fetch user');
      }
    },
    getUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
      }
    },
  },
  Mutation: {
    createUser: async (parent, { firstName, lastName, phone, email }) => {
      try {
        const user = new User({ firstName, lastName, phone, email });
        const newUser = await user.save();
        return newUser;
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
      }
    },
    updateUser: async (parent, { id, firstName, lastName, phone, email }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { firstName, lastName, phone, email },
          { new: true }
        );
        return updatedUser;
      } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Failed to update user');
      }
    },
    deleteUser: async (parent, { id }) => {
      try {
        const deletedUser = await User.findByIdAndRemove(id);
        return deletedUser;
      } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Failed to delete user');
      }
    },
  },
};

export default resolvers;
