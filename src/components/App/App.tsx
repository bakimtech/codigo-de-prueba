import { useState } from "react";
import Notes from "../notes";
import Welcome from "../welcome";
import styles from './App.module.css';

const App = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };


  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        <Notes username={username} exit={handleLogout}/>
      ) : (
        <Welcome login={handleLogin} />
      )}
    </div>
  );
};

export default App;
