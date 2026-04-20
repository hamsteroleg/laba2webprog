import Header from "./components/header";
import Education from "./components/education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Reviews from "./components/reviews";
import ContactForm from "./components/ContactForm";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  return (
    <div className={`${theme} container`}>

      {/* кнопка */}
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        style={{ marginBottom: "20px" }}
      >
        Toggle Theme
      </button>

      {/* HEADER */}
      <Header />

      {/* ОСНОВНИЙ LAYOUT */}
      <div className="main">

        {/* ЛІВА КОЛОНКА */}
        <aside className="sidebar">
          <Education />
        </aside>

        {/* ПРАВА КОЛОНКА */}
        <div className="content">
          <Experience />
          <Reviews />
        </div>

      </div>

      {/* МОДАЛКА */}
      <ContactForm />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;