import React from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import {
  useAddVitalSign,
  useUpdateVitalSign,
  useGetVitalSignById,
} from "../hooks/useVitalSign";

const VitalSignForm = () => {
  const { id } = useParams();
  const handleAdd = useAddVitalSign();
  const handleUpdate = useUpdateVitalSign();
  const { loading, error, data } = useGetVitalSignById(id);

  let temperature, bloodPressure, heartRate, respiratoryRate;

  const handleSubmit = (e) => {
    e.preventDefault();
    id
      ? handleUpdate(id, temperature, bloodPressure, heartRate, respiratoryRate)
      : handleAdd(temperature, bloodPressure, heartRate, respiratoryRate);
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
            defaultValue={data && data.vitalSign.temperature}
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
            defaultValue={data && data.vitalSign.bloodPressure}
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
            defaultValue={data && data.vitalSign.heartRate}
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
            defaultValue={data && data.vitalSign.respiratoryRate}
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
