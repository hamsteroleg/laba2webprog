import { useState, useEffect } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // 1 хвилина

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        background: "white",
        padding: "20px",
        margin: "100px auto",
        width: "300px"
      }}>
        <h3>Зворотній зв'язок</h3>

        <form action="https://formspree.io/f/ТВОЙ_ENDPOINT" method="POST">
          <input name="name" placeholder="Ім’я" required /><br/>
          <input name="email" placeholder="Email" required /><br/>
          <input name="phone" placeholder="Телефон" /><br/>
          <textarea name="message" placeholder="Повідомлення"></textarea><br/>
          <button type="submit">Відправити</button>
        </form>

        <button onClick={() => setIsOpen(false)}>Закрити</button>
      </div>
    </div>
  );
}

export default ContactForm;