import { useState, useEffect } from "react";

const SortByUsername = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const handleAscendingSort = () => {
    const users = [...usersData].sort((a, b) =>
      a.username.localeCompare(b.username)
    );
    setUsersData(users);
  };

  const handleDescendingSort = () => {
    const users = [...usersData].sort((a, b) =>
      b.username.localeCompare(a.username)
    );
    setUsersData(users);
  };

  return (
    <div className="App">
      <h1>Example of short by username</h1>
      <button onClick={() => handleAscendingSort()}>
        Short by Ascending
      </button>
      <button onClick={() => handleDescendingSort()}>
        Short by Descending
      </button>
      {usersData &&
        usersData.map((user) => (
          <div key={user.id}>
            <p>{user.username}</p>
          </div>
        ))}
    </div>
  );
}

export default SortByUsername;
