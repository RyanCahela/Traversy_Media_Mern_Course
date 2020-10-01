import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 80vh;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
