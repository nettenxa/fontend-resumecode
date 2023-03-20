import React from "react";
import "../../App.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div class="footer">
      <MDBFooter className="bg-dark text-center text-white">
        <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.facebook.com/nnetza5599/"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://twitter.com/NetteNXA"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.google.com/"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.instagram.com/net_atibodee/"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.linkedin.com/in/atibodee-mahawan-81b158173/"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://github.com/nettenxa"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:{" "}
          <a className="text-white" href="https://www.facebook.com/nnetza5599/">
            NetteN
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
