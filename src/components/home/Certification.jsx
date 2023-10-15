import React from 'react';
import CertificationPdf from "./CertificationPdf";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Certification = ({ certifications }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {certifications.heading}
          </h2>
          <Row>
            {
              certifications.data.map((data, index) => {
                return <CertificationPdf key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Certification;