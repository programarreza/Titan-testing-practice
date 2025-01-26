/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
type User = {
  name: string;
  email: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newUser = { name, email };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "700px",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      {/* <h2 style={{ textAlign: "center" }}>Testing React</h2> */}
      <h2 style={{ textAlign: "center" }}>Testing React In H2</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="User name"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "#fff",
          }}
        >
          Add User
        </button>
      </form>
      <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}>
        {users.map((user, index) => (
          <li
            key={index}
            style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
          >
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
