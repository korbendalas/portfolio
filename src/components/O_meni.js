import React, { Component } from "react";
import aboutMe from "../img/gallery/aboutMe.jpeg";

class O_meni extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="about-me-container">
          <div className="about-me-left">
            <img src={aboutMe} className="about-me-img" />
            <div className="credentials">
              <h3>Email</h3>
              <h4>daliborpetric99@gmail.com</h4>

              <h3>Nađite me na društvenim mrežama</h3>

              <div className=" " style={{ fontSize: "20px" }}>
                <i
                  onClick={this.sideMenuClickHandler}
                  className="social-media-item desktop fa fa-bars"
                />

                <a href="https://github.com/korbendalas" target="_blank">
                  <i className="fa fa-github  mobile social-media-item" />
                </a>
                <a href="https://www.facebook.com/Paliborbre" target="_blank">
                  {" "}
                  <i className="fa fa-facebook mobile social-media-item" />{" "}
                </a>
                <a href="https://www.instagram.com/go.u.3.pm/" target="_blank">
                  {" "}
                  <i className="fa fa-instagram mobile social-media-item" />
                </a>
              </div>

              {/* <h3 className="curiculum-heading">Curiculum Vitae</h3>
              <div className="cv-buttons">
                <button>
                  {" "}
                  <a href="#/contact">Download</a>
                </button>
                <button>
                  {" "}
                  <a href="#/contact">Visit online</a>{" "}
                </button>
              </div> */}
            </div>
          </div>
          <div className="about-me-right">
            <div className="about-me-story">
              <h1>Dalibor</h1>
              <h2>Petrić</h2>
              <h3>ReactJs Developer</h3>
              <p>
                {/* I am Junior JavaScript Developer, currently graduating
                      at <strong>"Visoka Tehnička Škola Strukovnih Studija Kragujevac"</strong>.
                      I work with ReactJs,to master it, with ambitions to be a
                      full stack JavaScript developer one day. 
                      On a first couple of years of my studying, i introduced
                      myself to Java, C# .NET, MySql and JavaScript. Found myself
                      with Js, and about 6 months from now i'm actively practising frontend
                      With React.   */}
                {/* I am Junior JavaScript Developer,
                    currently graduating at Technical College of Applied Studies in Kragujevac.
                      I love to work with ReactJs. My goal is to master it,
                      with ambitions to be a full stack JavaScript developer one day.
                        On a first couple of years of my studying 
                        I learned Java, C# .NET, MySql and JavaScript.
                        Found myself in love with Js,
                    and for 6 months from now I'm actively practicing frontend With React. */}
                Ja sam Junior JavaScript Developer, trenutno apsolvent na &nbsp;
                <strong>
                  "Visokoj Tehničkoj Školi Strukovnih Studija u Kragujevcu"
                </strong>
                . Tokom prvih godina studiranja, upoznao sam se sa Javom, C#
                .NET, MySql i JavaScriptom. Radeći back-end i front-end,
                nastavio sam svoj rad sa front-endom, u ReactJs frejmvorku,
                poslednjih 6 meseci aktivno radeći u njemu. Cilj mi je savladati
                i postati profesionalac u ovome, sa daljim ambicijama ka full
                stack JavaScript developerom, radeći u Node.js i MongoDB.
              </p>
              <button>
                <a href="#/contact">Kontaktirajte me </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default O_meni;
