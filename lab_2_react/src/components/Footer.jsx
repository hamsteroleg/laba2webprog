import { useEffect, useState } from "react";

function Footer() {
  const [info, setInfo] = useState({
    userAgent: "",
    platform: ""
  });

  useEffect(() => {
    // 1. отримуємо дані
    const ua = navigator.userAgent;
    const pf = navigator.platform;

    // 2. зберігаємо
    localStorage.setItem("userAgent", ua);
    localStorage.setItem("platform", pf);

    // 3. беремо назад
    setInfo({
      userAgent: localStorage.getItem("userAgent"),
      platform: localStorage.getItem("platform")
    });

  }, []);

  return (
    <footer>
      <p>Browser: {info.userAgent}</p>
      <p>Platform: {info.platform}</p>
    </footer>
  );
}

export default Footer;