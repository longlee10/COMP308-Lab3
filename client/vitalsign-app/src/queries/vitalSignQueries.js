import { gql } from "@apollo/client";

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

const ADD_VITAL_SIGN = gql`
 mutation CreateVitalSign($temperature: Float!, $bloodPressure: String!, $heartRate: Float!, $respiratoryRate: Float!) {
    createVitalSign(temperature: $temperature, bloodPressure: $bloodPressure, heartRate: $heartRate, respiratoryRate: $respiratoryRate) {
      id
      temperature
      bloodPressure
      heartRate
      respiratoryRate
    }
  }
`;

export { VITAL_SIGNS, ADD_VITAL_SIGN };
