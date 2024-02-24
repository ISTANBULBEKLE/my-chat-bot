"use client" 
import styles from "./page.module.css";
import ChatBotMain from "./components/ChatBotMain/ChatBotMain";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        <div className={styles.mainContent}>
        <ChatBotMain />
        </div>

      </div>
      <Footer />
    </main>
  );
}
