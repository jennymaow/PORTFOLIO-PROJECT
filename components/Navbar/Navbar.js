import "./Navbar.css";

export const Navbar = () => `
<nav>
    <h2>Shangya Mao</h2>
    <ul>
        <li>
            <a href="#" id="homelink">Home</a>
        </li>
        <li>
            <a href="#" id="aboutlink">About</a>
        </li>
        <li>
            <a href="#" id="projectslink">Projects</a>
        </li>
        <li>
            <button id="theme-Btn">🌙</button>
        </li>
    </ul>
</nav>
`;

export const changeTheme = () => {
  const themeBtn = document.querySelector("#theme-Btn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#theme-Btn");
  if (themeBtn.innerText === "🌙") {
    themeBtn.innerText = "☀";
  } else {
    themeBtn.innerText = "🌙";
  }
};
