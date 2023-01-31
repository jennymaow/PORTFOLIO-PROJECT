import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Shangya Mao</h1>
    <p>I'm a designer and developer based in Madrid, Spain. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I've developed several projects and undertaken a intership in a multinational company, which allowed me to gain experience and expand my knowledge in the field. I'm always opened to new adventures, so if you are interes in collaborating with me, don't hesitate to contact me :)</p>
    <a href="mailto:maojenny172@gmail.com">Say hi →</a>
    </section>
    `;
};
