import React, { Component } from "react";
import wordImg from "../img/word.png";
import pdfImg from "../img/pdf.png";
import ppImg from "../img/pp.png";
import opis1 from "../img/seminarski1.png";
import $ from "jquery";
import DroppableComponent from "./DroppableComponent";

class Seminarski extends Component {
  conponentDidMount() {
    $(function() {
      $("#draggable").draggable();
      $("#droppable").droppable({
        drop: function(event, ui) {
          $(this)
            .addClass("ui-state-highlight")
            .find("p")
            .html("Dropped!");
        }
      });
    });
  }
  render() {
    return (
      <div className="seminarski">
        <div className="seminarski-container">
          <h1>
            {" "}
            Na linkovima ispod možete preuzeti fajlove seminarskog u wordu, pdf
            i PP prezentacije{" "}
          </h1>
          <div className="download">
            <img className="download-img" src={wordImg} alt="word img" />
            <a
              href="https://drive.google.com/uc?export=download&id=1BwtDM03TWFYoFjfBB9qQN_4ZGyrxT1Vx"
              download
              className="seminarski-download"
            >
              DOWNLOAD - Seminarski rad - WORD{" "}
            </a>
          </div>
          <div className="download">
            <img className="download-img" src={pdfImg} alt="pdf img" />

            <a
              href="https://drive.google.com/uc?export=download&id=15il9A9sVMkZWVYI-t5VsWFRB6t0SVG79"
              download
              className="seminarski-download"
            >
              DOWNLOAD - Seminarski rad - PDF
            </a>
          </div>
          <div className="download">
            <img className="download-img" src={ppImg} alt="pp img" />
            <a
              href="https://drive.google.com/uc?export=download&id=1pGmQJK25lF5c_p1EauCfqXxSAgiUINEx"
              download
              className="seminarski-download"
            >
              DOWNLOAD Power Point Prezentacija
            </a>
          </div>
          <h1>
            {" "}
            Klikom ispod na dugme Download možete preuzeti sve fajlove zajedno{" "}
          </h1>

          <button>
            <a
              href="https://drive.google.com/uc?export=download&id=1NcX7IjLyzLMHUTZsMPCtklKkrlnQP7IX"
              download
              className="seminarski-download"
            >
              DOWNLOAD
            </a>
          </button>
          <div className="opis-tehnologije">
            <DroppableComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default Seminarski;
