import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import { Col, Container, Row } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store";
import UsersRedux from "./components/usersRedux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <UsersRedux />
        </Col>
      </Row>
    </Container>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
