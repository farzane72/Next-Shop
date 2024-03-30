"use client";

import { store } from "./store";
import { Provider } from "react-redux";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
