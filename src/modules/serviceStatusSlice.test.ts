import {
  serviceStatusInitialState,
  serviceStatusReducer,
  setMaintenance,
} from "./serviceStatusSlice";

describe("serviceStatusSlice", () => {
  test(setMaintenance.name, () => {
    expect(
      serviceStatusReducer(serviceStatusInitialState, setMaintenance(true))
    ).toEqual({
      maintenance: true,
    });
  });
});
