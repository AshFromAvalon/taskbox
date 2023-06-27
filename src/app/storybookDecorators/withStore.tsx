import { type Decorator } from "@storybook/react";
import { Provider as ReduxProvider } from "react-redux";
import { makeStore } from "../appStore";

const store = makeStore();

export const withStore: Decorator = (StoryFn) => {
  return (
    <ReduxProvider store={store}>
      <StoryFn />
    </ReduxProvider>
  );
};
