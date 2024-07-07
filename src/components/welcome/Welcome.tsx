
import { useState } from "react";
import styles from "./Welcome.module.css";

type welcomeProps = {
  login: (value: string) => void;
};

function Welcome({ login }: welcomeProps) {
  const [username, setUsername] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.trim() !== "") {
      login(username);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome To Codeable Keep</h1>
      <form className={styles.formgroup} onSubmit={handleSubmit}>
        <label className={styles.subtitle} htmlFor="username">Username</label>
        <input
          className={styles.input}
          id="username"
          name="username"
          type="text"
          placeholder="some-user"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit" className={styles.button}>Enter</button>
      </form>
    </div>
  );
}

export default Welcome;
