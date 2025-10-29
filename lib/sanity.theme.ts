import { buildLegacyTheme } from "sanity";

export const sanityTheme = buildLegacyTheme({
  "--black": "#fafafa",
  "--white": "#0a0a0a",

  "--component-bg": "#0a0a0a",
  "--component-text-color": "#fafafa",

  "--brand-primary": "#009966",

  "--default-button-color": "#444444",
  "--default-button-primary-color": "#009966",
  "--default-button-success-color": "#0f9d58",
  "--default-button-warning-color": "#f4b400",
  "--default-button-danger-color": "#db4437",

  "--state-info-color": "#009966",
  "--state-success-color": "#0f9d58",
  "--state-danger-color": "#db4437",

  "--main-navigation-color": "#0a0a0a",
  "--main-navigation-color--inverted": "#fafafa",

  "--focus-color": "#009966",
});
