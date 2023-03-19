import { createSlice } from '@reduxjs/toolkit';
import { getAllPatients, postPatient } from './patient-operations';

export const initialState = {
  id: '',
  patient: null,
  patientList: [],
  filter: '',
  loading: false,
};

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  extraReducers: {
    [getAllPatients.pending]: (state, _) => {
      state.loading = true;
    },
    [getAllPatients.fulfilled]: (state, { payload }) => {
      state.patientList = payload;
      state.loading = false;
    },
    [getAllPatients.rejected]: (state, _) => {
      state.loading = false;
    },
    [postPatient.pending]: (state, _) => {
      state.loading = true;
    },
    [postPatient.fulfilled]: (state, { payload }) => {
      state.patient = payload;
      if (typeof payload !== 'string') {
        state.patientList.push(payload);
      }
      state.loading = false;
    },
    [postPatient.rejected]: (state, _) => {
      state.loading = false;
    },
  },
  reducers: {
    patientID: (state, { payload }) => {
      state.id = payload;
    },
    findById: (state, { payload }) => {
      state.patient = state.patientList.find(({ id }) => id === payload);
    },
    filterPatient: (state, { payload }) => {
      state.filter = payload;
    },
    setPatientList: (state, { payload }) => {
      state.patientList = payload;
    },
  },
});
export const { patientID, findById, filterPatient, setPatientList } =
  patientSlice.actions;
export const patientReduser = patientSlice.reducer;
