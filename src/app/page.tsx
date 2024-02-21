
import styles from "./page.module.css";
import ChatBotMain from "./components/ChatBotMain";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.mainContent}>
        <ChatBotMain />
        </div>
        
      </div>
    </main>
  );
}
