import { userLocaleStorage } from "./userLocaleStorage";
import "./Theme.css";

export const Theme = () => {
  const [theme, setTheme] = userLocaleStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change theme</button>
      </div>
    </div>
  );
};
