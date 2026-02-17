import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AnalysisResult {
  [category: string]: {
    [key: string]: number;
  };
}

interface AnalysisState {
  data: AnalysisResult | null;
}

const initialState: AnalysisState = {
  data: null,
};

const analysisSlice = createSlice({
  name: "analysis",
  initialState,
  reducers: {
    setAnalysisData: (state, action: PayloadAction<AnalysisResult>) => {
      state.data = action.payload;
    },
    clearAnalysisData: (state) => {
      state.data = null;
    },
  },
});

export const { setAnalysisData, clearAnalysisData } = analysisSlice.actions;
export default analysisSlice.reducer;
