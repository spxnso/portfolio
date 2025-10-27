import { buildLegacyTheme } from "sanity";

export const sanityTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": "#fafafa", // text
  "--white": "#0a0a0a", // background reference

  "--component-bg": "#0a0a0a", // main panel background
  "--component-text-color": "#fafafa", // main panel text

  /* Brand */
  "--brand-primary": "#009966",

  // Default buttons
  "--default-button-color": "#444444",
  "--default-button-primary-color": "#009966",
  "--default-button-success-color": "#0f9d58",
  "--default-button-warning-color": "#f4b400",
  "--default-button-danger-color": "#db4437",

  /* States */
  "--state-info-color": "#009966",
  "--state-success-color": "#0f9d58",
  "--state-danger-color": "#db4437",

  /* Navbar */
  "--main-navigation-color": "#0a0a0a",
  "--main-navigation-color--inverted": "#fafafa",

  "--focus-color": "#009966",
});
