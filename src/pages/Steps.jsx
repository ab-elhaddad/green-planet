import React from "react";
import "./Steps.css";
import { Container } from "react-bootstrap";
import { CiFolderOn, CiFilter } from "react-icons/ci";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaAngleDoubleDown } from "react-icons/fa";

import assemblyStepImage from "../assets/assembly-stage.jpeg";
import sortingStepImage from "../assets/sorting-stage.jpeg";
import jawStageIage from "../assets/jaw-stage.jpeg";
import extractionStageImage from "../assets/extraction-stage.jpeg";

const Steps = () => {
  return (
    <Container>
      <div className="steps">
        <div className="steps-header">
          <div className="rect" />
          <h1>
            Stages of <span>e-waste</span> recycling
          </h1>
          <div className="rect" />
        </div>

        <div className="step-container">
          <div className="step-left step-details">
            <div className="step-icon-container">
              <CiFolderOn className="step-icon" />
            </div>
            <h2>Assembly Phase</h2>
            <p>
              We collect electronic, electrical and mechanical waste from
              companies, factories, banks, charitable and government
              institutions.
            </p>
          </div>
          <img
            src={assemblyStepImage}
            alt="assembly-phase"
            className="step-image step-right"
          />
        </div>

        <div className=" step-container">
          <img
            src={sortingStepImage}
            alt="sorting step"
            className="step-image step-left"
          />
          <div className="step-right step-details">
            <div className="step-icon-container">
              <CiFilter className="step-icon" />
            </div>
            <h2>Sorting Phase</h2>
            <p>
              In this process, all inputs are sorted from computers, electronic
              devices, boards, cables, adapters, etc.
            </p>
          </div>
        </div>

        <div className="step-container">
          <div className="step-left step-details">
            <div className="step-icon-container">
              <HiMiniWrenchScrewdriver className="step-icon" />
            </div>
            <h2>Jaw Phase</h2>
            <p>
              The device is disassembled through a manual line to its basic
              elements mechanical dismantling and at this stage the components
              are separated.
            </p>
          </div>
          <img
            src={jawStageIage}
            alt="sorting step"
            className="step-image step-right"
          />
        </div>

        <div className="step-container">
          <img
            src={extractionStageImage}
            alt="sorting step"
            className="step-image step-left"
          />
          <div className="step-right step-details">
            <div className="step-icon-container">
              <FaAngleDoubleDown className="step-icon" />
            </div>
            <h2>Extraction Phase</h2>
            <p>
              We extract in our laboratory the latest modern technology that
              does not harm the environment and workers to extract gold, silver,
              copper, palladium and platinum from electronic chips (boards).
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Steps;
