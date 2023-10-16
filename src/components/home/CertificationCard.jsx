import React from 'react';

import {
  Col,
} from "react-bootstrap";

const CertificationCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.certification_picture} alt="" />
        <p className="lead">
        <strong>{data.certification_name}</strong>
          <br />
          <strong>{data.certification_ID}</strong>
          <br />
          <strong>{data.certification_date}</strong>
          <br />
          {data.certification_website}
        </p>

      </div>
    </Col>
  );
}

export default CertificationCard;