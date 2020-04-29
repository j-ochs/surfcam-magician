import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SurfCamContainer from "./components/SurfCamContainer";
import SpotPicker from "./components/SpotPicker";

// Main Quote - When you're itching for the waves, the only lotion is the ocean.
// 404 - Just 'cause you're riding the high tide, doesn't mean you've chosen the right course.
// Error - Sometimes, the bird sings, sometimes it coughs up a worm.

const App = () => {
  return (
    <Router>
      <section
        className="section"
        style={{ background: "linear-gradient(to bottom right, blue, green" }}
      >
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="title has-text-white">Surfcam Magician</h1>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <a
                  className="level-item"
                  href="https://github.com/mhelmetag/surfcam-magician"
                >
                  <span className="icon is-large">
                    <i className="fab fa-lg fa-github has-text-white"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container is-fluid">
          <Switch>
            <Route path="/spot/:id">
              <SurfCamContainer />
            </Route>
            <Route path="/">
              <SurfCamContainer defaultSpotId="5842041f4e65fad6a7708960" />
            </Route>
          </Switch>
        </div>
      </section>
      <section className="section">
        <div className="container is-fluid">
          <SpotPicker />
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Built by Maxworld Technologies</p>
        </div>
      </footer>
    </Router>
  );
};

export default App;
