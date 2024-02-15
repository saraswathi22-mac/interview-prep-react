import "./App.css";
import FetchElements from "./component/FetchElements";
import SearchUser from "./component/SearchUser";
import SearchDebounce from "./component/SearchDebounce";
import SortByUsername from "./component/SortByUsername";
import UserRegistrationForm from "./component/SignUp";
import PaginationComponent from "./component/Pagination";
import ShoppingCart from "./component/ShoppingCart";

function App() {
  return (
    <div>
      <FetchElements />
      <SearchUser />
      <SearchDebounce />
      <SortByUsername />
      <UserRegistrationForm />
      <PaginationComponent
        apiUrl="https://jsonplaceholder.typicode.com/posts"
        itemsPerPage={10}
      />
      <ShoppingCart />
    </div>
  );
}

export default App;
