import { useEffect, useState } from 'react';
import './styles/AdminDashboard.css'; // Keep the CSS file for basic styles

interface User {
  id: number;
  name: string;
  role: string;
}

interface Activity {
  id: number;
  action: string;
  user: string;
  timestamp: string;
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [searchUser, setSearchUser] = useState<string>('');
  const [searchActivity, setSearchActivity] = useState<string>('');

  // Simulated data fetching or API calls
  useEffect(() => {
    // Fetch users
    fetchUsers();

    // Fetch activities
    fetchActivities();
  }, []);

  // Fetch users from API (replace with actual API call)
  const fetchUsers = () => {
    const usersData: User[] = [
      { id: 1, name: 'John Doe', role: 'Admin' },
      { id: 2, name: 'Jane Smith', role: 'User' },
      { id: 3, name: 'Alice Johnson', role: 'User' },
      // More users...
    ];
    setUsers(usersData);
    setFilteredUsers(usersData);
  };

  // Fetch activities from API (replace with actual API call)
  const fetchActivities = () => {
    const activitiesData: Activity[] = [
      { id: 1, action: 'Created a new post', user: 'John Doe', timestamp: '2024-05-01T12:00:00Z' },
      { id: 2, action: 'Updated user profile', user: 'Jane Smith', timestamp: '2024-05-01T12:30:00Z' },
      { id: 3, action: 'Deleted a comment', user: 'Alice Johnson', timestamp: '2024-05-01T13:00:00Z' },
      // More activities...
    ];
    setActivities(activitiesData);
    setFilteredActivities(activitiesData);
  };

  // Handle search for users
  useEffect(() => {
    const filtered = users.filter(user => user.name.toLowerCase().includes(searchUser.toLowerCase()));
    setFilteredUsers(filtered);
  }, [searchUser, users]);

  // Handle search for activities
  useEffect(() => {
    const filtered = activities.filter(activity => activity.action.toLowerCase().includes(searchActivity.toLowerCase()));
    setFilteredActivities(filtered);
  }, [searchActivity, activities]);

  return (
    <div className="bg-white shadow-md rounded-lg p-8 mx-auto max-w-4xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Admin Dashboard</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-teal-800">Users</h3>
        <input
          type="text"
          placeholder="Search users..."
          className="mb-4 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <div className="overflow-x-auto rounded-md shadow-lg">
          <table className="w-full text-sm text-left table-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-blue-200">
                  <td className="py-4 px-6">{user.id}</td>
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-teal-800">Activities</h3>
        <input
          type="text"
          placeholder="Search activities..."
          className="mb-4 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
          value={searchActivity}
          onChange={(e) => setSearchActivity(e.target.value)}
        />
        <div className="overflow-x-auto rounded-md shadow-lg">
          <table className="w-full text-sm text-left table-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  User
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
                <th scope="col" className="py-3 px-6">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredActivities.map((activity) => (
                <tr key={activity.id} className="border-b border-gray-200 hover:bg-teal-200">
                  <td className="py-4 px-6">{activity.user}</td>
                  <td className="py-4 px-6">{activity.action}</td>
                  <td className="py-4 px-6">{activity.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-teal-800">Analytics</h3>
        <p>Total Users: {filteredUsers.length}</p>
        <p>Total Activities: {filteredActivities.length}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
