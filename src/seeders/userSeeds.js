import User from "../models/userModel.js"
import dbconnect from "../database/db.js";

const userData = [
  {
    firstName: 'John',
    lastName: 'Doe',
    phone: '1234567890',
    email: 'johndoe@example.com',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    phone: '9876543210',
    email: 'janesmith@example.com',
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    phone: '5551234567',
    email: 'michaeljohnson@example.com',
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    phone: '5559876543',
    email: 'emilydavis@example.com',
  },
  {
    firstName: 'David',
    lastName: 'Wilson',
    phone: '5555555555',
    email: 'davidwilson@example.com',
  },
  {
    firstName: 'Sarah',
    lastName: 'Miller',
    phone: '5551112222',
    email: 'sarahmiller@example.com',
  },
  {
    firstName: 'Daniel',
    lastName: 'Anderson',
    phone: '5554447777',
    email: 'danielanderson@example.com',
  },
  {
    firstName: 'Olivia',
    lastName: 'Thomas',
    phone: '5558889999',
    email: 'oliviathomas@example.com',
  },
  {
    firstName: 'Matthew',
    lastName: 'Jackson',
    phone: '5553336666',
    email: 'matthewjackson@example.com',
  },
  {
    firstName: 'Emma',
    lastName: 'Taylor',
    phone: '5556663333',
    email: 'emmataylor@example.com',
  },
];
dbconnect()
const seedUsers = async () => {
  try {
    // Remove existing users
    await User.deleteMany({}, { timeout: 30000 });

    // Create new users from the seed data
    const createdUsers = await User.create(userData);

    console.log('Users seeded successfully:', createdUsers);
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    // Disconnect from the database
    process.exit();
  }
};

// Run the seed function
seedUsers();
