// auth.ts

// Simulated user data
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
  // Add more users if needed
];

// Function to authenticate user
export const authenticateUser = (username: string, password: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    // Simulate authentication process with a delay
    setTimeout(() => {
      const user = users.find((user) => user.username === username && user.password === password);
      if (user) {
        resolve(true); // Authentication successful
      } else {
        reject(new Error('Invalid username or password')); // Authentication failed
      }
    }, 1000); // Simulated delay of 1 second
  });
};

// Function to get user details by username
export const getUserByUsername = (username: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    // Simulate fetching user details with a delay
    setTimeout(() => {
      const user = users.find((user) => user.username === username);
      if (user) {
        resolve(user); // User found
      } else {
        reject(new Error('User not found')); // User not found
      }
    }, 500); // Simulated delay of 0.5 seconds
  });
};

// Function to get user details by user ID
export const getUserById = (userId: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    // Simulate fetching user details with a delay
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);
      if (user) {
        resolve(user); // User found
      } else {
        reject(new Error('User not found')); // User not found
      }
    }, 500); // Simulated delay of 0.5 seconds
  });
};
