import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { API } from '../../services/API';
import {
  // ADDCOMMENT,
  ADDPATIENT,
  DELETE,
  GETALL,
  UPDATE,
} from './patient-types';

export const getAllPatients = createAsyncThunk(
  GETALL,
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await API.get('/patient/getall');
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const postPatient = createAsyncThunk(
  ADDPATIENT,
  async (credentials, { rejectedWithValue }) => {
    try {
      const { data } = await API.post('/patient/add-patient', credentials);
      toast.success('Пацієнта додано');

      return data;
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400) {
        toast.error(error.response.data);
        return error.response.data;
      }
      return rejectedWithValue(error);
    }
  }
);

export const updatePatient = createAsyncThunk(
  UPDATE,
  async (credentials, { rejectedWithValue }) => {
    try {
      const { data } = await API.patch(`/patient/${credentials}`);
      toast.success('Дані оновлено');
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const deletePatient = createAsyncThunk(
  DELETE,
  async (credentials, { rejectedWithValue }) => {
    try {
      const { data } = await API.delete(`/patient/${credentials}`);
      toast.success('Дані видалено');
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

// export const addComment = createAsyncThunk(
//   ADDCOMMENT,
//   async (_, { rejectedWithValue }) => {
//     try {
//       const { data } = await API.get('/patient');
//       return { data };
//     } catch (error) {
//       return rejectedWithValue(error);
//     }
//   }
// );
