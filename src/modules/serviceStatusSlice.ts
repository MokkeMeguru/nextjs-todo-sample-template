import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ServiceStatusState = {
  maintenance: boolean;
};

export const serviceStatusInitialState: ServiceStatusState = {
  maintenance: false,
};

const serviceStatusSlice = createSlice({
  name: "serviceStatus",
  initialState: serviceStatusInitialState,
  reducers: {
    setMaintenance: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        maintenance: action.payload,
      };
    },
  },
});

export const { setMaintenance } = serviceStatusSlice.actions;

export const serviceStatusReducer = serviceStatusSlice.reducer;
