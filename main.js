import "./style.css";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Divider } from "./components/Divider/Divider";

const header = document.querySelector("header");
header.innerHTML = Navbar();


const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);


changeTheme();
Home();



footer.insertAdjacentHTML("beforebegin",Divider());
