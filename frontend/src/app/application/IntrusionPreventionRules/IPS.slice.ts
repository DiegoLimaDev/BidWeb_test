import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IntrusionPreventionRulesServiceImpl } from '../../domain/useCases/IntrusionPreventionRules.service';
import { IntrusionPreventionRulesRepoImpl } from '../../infra/IntrusionPreventionRules.repo';
import { IntrusionPreventionRules } from '../../domain/entities/intrusionPreventionRules';

interface initialState {
  IPSloading: boolean;
  ipsData: IntrusionPreventionRules[];
  error?: string;
}

const initialState: initialState = {
  IPSloading: false,
  ipsData: [],
  error: '',
};

export const fetchIPS = createAsyncThunk(
  'ipsSlice/fetchIPS',
  async (page: number) => {
    const ipsRepo = new IntrusionPreventionRulesRepoImpl();
    const ipsService = new IntrusionPreventionRulesServiceImpl(ipsRepo);
    const ipsData = await ipsService.getByPage(page);
    return ipsData;
  },
);

export const ipsSlice = createSlice({
  name: 'ipsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIPS.fulfilled, (state, action) => ({
      ...state,
      IPSloading: false,
      ipsData: action.payload,
    }));
    builder.addCase(fetchIPS.pending, (state) => ({
      ...state,
      IPSloading: true,
    }));
    builder.addCase(fetchIPS.rejected, (state, action) => ({
      ...state,
      IPSloading: false,
      ipsData: [],
      error: action.error.message,
    }));
  },
});

export default ipsSlice.reducer;
