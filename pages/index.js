import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/** Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-white">
          <div className="row">
            <div className="col-md-4">
              <img src="perfilcv.jpg" className="img-fluid"></img>
            </div>
            <div className="col-md-8">
              <h1>Facundo Kozlowski</h1>
              <h3>FullStack Developer</h3>
              <p>
                👋 Hello my name is Facundo Kozlowski. I am a FullStack
                programmer oriented to Front-End design and content creation
                visual.
                <br />
                I am currently carrying out projects that allow me to advance in
                my Training as a programmer, I love to look for the resolution
                of problems, through the code.
                <br />I don't just enjoy programming for the freedom of power
                create content and apps that I find interesting, but that I am
                truly passionate about broadening my perspective of the world
                and Find new solutions to complex problems.
              </p>
              <br />
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Segunda seccion */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-white">
          <div className="card-body">
            <h1>Skills</h1>

            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-white">
          <div className="card-body">
            <h1>Experiencia</h1>

            <ul>
              {experiences.map(({ title, from, to, description }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/** Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>

            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${image}`} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a
                      href="https://pf-rent-car2-719ygup5s-aldovelacasas.vercel.app/"
                      target="_blank">
                      Visitar sitio
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
