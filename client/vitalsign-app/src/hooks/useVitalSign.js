import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {
  ADD_VITAL_SIGN,
  UPDATE_VITAL_SIGN,
  GET_VITAL_SIGN_BY_ID,
} from "../queries/vitalSignQueries";

const useAddVitalSign = () => {
  const [addVitalSign] = useMutation(ADD_VITAL_SIGN);
  const navigate = useNavigate();

  const handleAdd = (
    temperature,
    bloodPressure,
    heartRate,
    respiratoryRate
  ) => {
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

  return handleAdd;
};

const useUpdateVitalSign = () => {
  const [updateVitalSign] = useMutation(UPDATE_VITAL_SIGN);
  const navigate = useNavigate();

  const handleUpdate = (
    id,
    temperature,
    bloodPressure,
    heartRate,
    respiratoryRate
  ) => {
    updateVitalSign({
      variables: {
        id,
        temperature: parseFloat(temperature.value),
        bloodPressure: bloodPressure.value,
        heartRate: parseFloat(heartRate.value),
        respiratoryRate: parseFloat(respiratoryRate.value),
      },
    });

    navigate("/");
  };

  return handleUpdate;
};

const useGetVitalSignById = (id) => {
  if (id) {
    const { loading, error, data } = useQuery(GET_VITAL_SIGN_BY_ID, {
      variables: { id },
    });

    return { loading, error, data };
  }

  return {};
};

export { useAddVitalSign, useUpdateVitalSign, useGetVitalSignById };
