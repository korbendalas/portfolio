import React, { Component } from "react";
import wordImg from "../img/word.png";
import pdfImg from "../img/pdf.png";
import ppImg from "../img/pp.png";
import opis1 from "../img/seminarski1.png";
import $ from "jquery";
import DroppableComponent from "./DroppableComponent";

class Seminarski extends Component {
  conponentDidMount() {
    //   $(function() {
    //     $("#draggable").draggable();
    //     $("#droppable").droppable({
    //       drop: function(event, ui) {
    //         $(this)
    //           .addClass("ui-state-highlight")
    //           .find("p")
    //           .html("Dropped!");
    //       }
    //     });
    //   });
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
              href="https://drive.google.com/uc?export=download&id=1BWUMC8PEw9PrEBIsfXY_0K1fLBDbm428"
              download
              className="seminarski-download"
            >
              DOWNLOAD - Seminarski rad - WORD{" "}
            </a>
          </div>
          <div className="download">
            <img className="download-img" src={pdfImg} alt="pdf img" />

            <a
              href="https://drive.google.com/uc?export=download&id=1hOXdbky5cskup41f_K2EXuEAg6N6rtpN"
              download
              className="seminarski-download"
            >
              DOWNLOAD - Seminarski rad - PDF
            </a>
          </div>
          <div className="download">
            <img className="download-img" src={ppImg} alt="pp img" />
            <a
              href="https://drive.google.com/uc?export=download&id=1RXlfHSsQRFUKi7l8voZIz62NtMPwf1UF"
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
              href="https://drive.google.com/uc?export=download&id=1SycXxjTZrWDb4vIPGUnqY5mYhlZPADHh"
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
