import styles from "./Notes.module.css";

function Notes(props: { username: string, exit: () => void }) {

  return (
  <div>
    <header>
      <p className={styles.welcomeuser}>Welcome to Codeable Keep <span className="spanUser"> {props.username} </span></p>
      <button onClick={props.exit} className={styles.exit}>Exit</button>
    </header>
    <div>
      <aside>
        <h2>Notes</h2>
        <h2>Trash</h2>
      </aside>
    </div>

    <main className={styles.main}>
      <div>
        <div>
          <div>
            <h2>Title Note</h2>
            <p>Your note here !</p>
          </div>
          <div>
            <figure>Color Palette</figure>
            <button>Keep It</button>
          </div>
        </div>
        <figure>Pin</figure>
      </div>
      <div>
        <h2>No Notes !</h2>
      </div>
    </main>
  </div>
    
  );
}


export default Notes;
