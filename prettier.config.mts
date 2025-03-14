import { type Config } from "prettier";

const prettierConfig: Config = {
  plugins: ["prettier-plugin-tailwindcss"],
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
};

export default prettierConfig;