import { useState, useEffect } from "react";

const SearchDebounce = () => {
  const [usersData, setUsersData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUser, setFilteredUser] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("fetched data", data);
        setUsersData(data);
      })
      .catch((error) => {
        console.log("Errror While fetching user data");
      });
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const filterTimer = setTimeout(() => {
      try {
        fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchText}`,
          {
            signal: abortController.signal, // Pass the AbortController's signal to the fetch request
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("FilteredUser ", data);
            setFilteredUser(data[0]);
          });
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("Error fetching user data:", error);
        }
      }
    }, 300);

    return () => {
      abortController.abort();
      clearTimeout(filterTimer);
    };
  }, [searchText]);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Users Data</h4>
      <input
        type="text"
        placeholder="Search by username"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <table
        style={{
          borderCollapse: "collapse",
          margin: "auto",
          border: "1px solid red",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {usersData &&
            usersData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div>
        <h4>Search Result</h4>
        {filteredUser && filteredUser.name}
      </div>
    </div>
  );
};

export default SearchDebounce;