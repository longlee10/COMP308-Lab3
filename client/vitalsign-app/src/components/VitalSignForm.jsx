import { useMutation } from "@apollo/client";
import React from "react";
import Form from "react-bootstrap/Form";
import { ADD_VITAL_SIGN } from "../queries/vitalSignQueries";
import { useNavigate } from "react-router-dom";

const VitalSignForm = () => {
  const [addVitalSign] = useMutation(ADD_VITAL_SIGN);
  const navigate = useNavigate();
  let temperature, bloodPressure, heartRate, respiratoryRate;

  const handleSubmit = (e) => {
    e.preventDefault();
    addVitalSign({
      variables: {
        temperature: parseFloat(temperature.value),
        bloodPressure: bloodPressure.value,
        heartRate: parseFloat(heartRate.value),
        respiratoryRate: parseFloat(respiratoryRate.value),
      },
    });
    temperature.value = "";
    bloodPressure.value = "";
    heartRate.value = "";
    respiratoryRate.value = "";

    navigate("/");
  };

  return (
    <div>
      <h2>Vital Sign Form</h2>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Temperature</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter temperature"
            ref={(node) => {
              temperature = node;
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Blood Pressure</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter blood pressure"
            ref={(node) => {
              bloodPressure = node;
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Heart Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter heart rate"
            ref={(node) => {
              heartRate = node;
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Respiratory Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter respiratory rate"
            ref={(node) => {
              respiratoryRate = node;
            }}
          />
        </Form.Group>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default VitalSignForm;
