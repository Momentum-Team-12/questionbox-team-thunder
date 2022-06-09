import useLocalStorageState from "use-local-storage-state";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Ask from "./pages/Ask";
import Layout from "./components/Layout";
import QandA from "./pages/QandA";
import Register from "./pages/Register";
import axios from "axios";

const App = () => {
  const [token, setToken] = useLocalStorageState("reactLibraryToken", "");
  const [username, setUsername] = useLocalStorageState(
    "reactLibraryUsername",
    ""
  );
  const setAuth = (username, token) => {
    setToken(token);
    setUsername(username);
  };

  const isLoggedIn = username && token;

  const handleLogout = () => {
    axios
      .post(
        "https://questionbox-team-thunder-api.herokuapp.com/api/auth/token/logout/",
        {},
        {
          headers: { Authorization: `token ${token}` },
        }
      )
      .then((res) => {
        setAuth("", "");
      });
  };

  return (
    <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout} token={token}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ask" element={<Ask />} />
        <Route
          path="/login"
          element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/question/:id" element={<QandA />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
};

export default App;
