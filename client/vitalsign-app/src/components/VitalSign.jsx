import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

const VITAL_SIGNS = gql`
query {
    vitalSigns {
      bloodPressure
      heartRate
      id
      respiratoryRate
      temperature
    }
  }
`;

const VitalSign = () => {
  const { loading, error, data } = useQuery(VITAL_SIGNS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.vitalSigns);
  return (
    <div>
      <h2>Vital Signs</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Blood Pressure</th>
            <th>Heart Rate</th>
            <th>Respiratory Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.vitalSigns &&
            data.vitalSigns.map((vitalSign) => (
              <tr key={vitalSign.id}>
                <td>{vitalSign.temperature}</td>
                <td>{vitalSign.bloodPressure}</td>
                <td>{vitalSign.heartRate}</td>
                <td>{vitalSign.respiratoryRate}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VitalSign;
