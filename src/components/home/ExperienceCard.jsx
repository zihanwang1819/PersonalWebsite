import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
        <strong>{data.role}</strong>
          <br />
          <strong>{data.location}</strong>
          <br />
          <strong>{data.date}</strong>
          <br />
          {data.description}
          <br />
          <strong>{data.keyword}</strong>
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;