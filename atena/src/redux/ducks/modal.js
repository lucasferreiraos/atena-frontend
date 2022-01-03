import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalProfessor: {
    visible: false
  },
  modalStudent: {
    visible: false
  }
};

const modalSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModalProfessor: state => ({
      ...state,
      modalProfessor: {
        visible: true,
      },
      modalStudent: {
        visible: false
      }
    }),
    closeModalProfessor: state => ({
      ...state,
      modalProfessor: {
        visible: false
      },
      modalStudent: {
        visible: false
      }
    }),
    openModalStudent: state => ({
      ...state,
      modalStudent: {
        visible: true
      },
      modalProfessor: {
        visible: false
      }
    }),
    closeModalStudent: state => ({
      ...state,
      modalStudent: {
        visible: false
      },
      modalProfessor: {
        visible: false
      }
    })
  }
});

export default modalSlice.reducer;

export const {
  openModalProfessor,
  openModalStudent,
  closeModalProfessor,
  closeModalStudent
} = modalSlice.actions;
