import { configureStore } from '@reduxjs/toolkit';
import ipsReducer from './IntrusionPreventionRules/IPS.slice';

export const store = configureStore({
  reducer: {
    ipsSlice: ipsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
