import "./About.css";
import { cleanPage } from "../../utils/cleanPage";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <section class="aboutme">
    <img src= "../../public/images/jenny.jpg" alt= "Jenny portrait"/>
    <div class="introduction">
    <h1>Hello,</h1>
    <p>Hi! I'm Shangya, a new generation web developer and
    designer, specialized in Graphic Design, UX/UI Web & App
    Design, Branding and Industrial Design.
    I'm always openned to new challenges, constantly willing
    to learn and improve my skills as a designer. I possess
    good communication skills and I'm capable of adapting
    to new environments and teams.</p>
    </div>
    </section>
    `;
};
