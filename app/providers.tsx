"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-lg">Loading analysis data...</div>
          </div>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
