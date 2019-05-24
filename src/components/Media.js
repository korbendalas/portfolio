import React, { Component } from "react";

export default class Media extends Component {
  render() {
    return (
      <div className="media">
        <div className="media-container">
          <iframe
            style={{ maxWidth: "700px", width: "100%" }}
            height="315"
            src="https://www.youtube.com/embed/P3ot-LMuPgs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <button>
            <a
              href="https://drive.google.com/uc?export=download&id=14O5hO1L8mvkdT_ZMQxkkHhd-3YSDsOx0"
              download
              className="seminarski-download"
            >
              DOWNLOAD
            </a>
          </button>
        </div>
      </div>
    );
  }
}
