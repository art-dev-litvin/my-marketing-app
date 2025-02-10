"use client";

import React from "react";
import { store } from "@app/store/store";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }: React.PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
