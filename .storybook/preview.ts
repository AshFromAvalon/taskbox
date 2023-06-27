import type { Preview } from "@storybook/react";
import { withStore } from "../src/app/storybookDecorators/withStore";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export const decorators = [withStore, mswDecorator];
export default preview;
