import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useServiceStatus = () => {
  const serviceStatus = useSelector((state: RootState) => state.serviceStatus);

  return serviceStatus;
};
