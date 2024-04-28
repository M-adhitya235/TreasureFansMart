import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  const getUsers = useCallback(async () => {
    let url = "http://localhost:5000/users";
    if (selectedRole) {
      url = `http://localhost:5000/users/role/${selectedRole}`;
    }
    const response = await axios.get(url);
    setUsers(response.data);
  }, [selectedRole]);

  useEffect(() => {
    const fetchUsers = async () => {
      await getUsers();
    };

    fetchUsers();
  }, [getUsers]);

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    await getUsers();
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <h2 className="text-2xl font-semibold mb-6">List of Users</h2>
      <div className="mb-4">
        <label htmlFor="role" className="mr-2">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={handleRoleChange}
          className="block rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">All Roles</option>
          <option value="user">User</option>
          <option value="kurir">Kurir</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <Link
        to="/users/add"
        className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline"
      >
        Add New User
      </Link>
      <div className="overflow-x-auto mt-4">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users.map((user, index) => (
              <Table.Row key={user.uuid} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>
                  <Link
                    to={`/users/edit/${user.uuid}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </Link>
                  {" "}
                  <button
                    onClick={() => deleteUser(user.uuid)}
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
