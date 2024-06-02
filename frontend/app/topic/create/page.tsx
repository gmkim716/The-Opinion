import styles from "./page.module.css";

export default function TopicCreatePage() {
  return (
    <main className={styles.main}>
      <h1>Create a Topic</h1>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Description:
          <textarea name="description" />
        </label>
        <button type="submit">Create</button>
      </form>
    </main>
  );
}
