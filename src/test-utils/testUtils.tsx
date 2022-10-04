import React, { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AppStore, setupStore, RootStateTest } from "../app/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootStateTest>;
  store?: AppStore;
}

export function renderWithProvider(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
