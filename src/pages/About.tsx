import React from "react";
import { useHistory } from "react-router-dom";

const About: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Моё первое приложение на TypeScript!{" "}
        <a href="https://github.com/ylesandale?tab=repositories">
          Другие мои проекты
        </a>{" "}
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};

export default About;
