import { join, relative } from "path";
import fs from "fs-extra";
import {
  KnapsackAssetSetsConfig,
  KnapsackAssetSetConfig,
} from "@knapsack/types";
import tokens from "./knapsack/dist/tokens/design-tokens.nested.json";

const cssTokens = fs.readFileSync(
  join(__dirname, "./knapsack/dist/tokens/design-tokens.css"),
  "utf8"
);
const assetSetsPath = join(
  __dirname,
  "./knapsack/data/knapsack.asset-sets.json"
);
const themesDir = join(__dirname, "./knapsack/dist/themes");
fs.ensureDirSync(themesDir);
console.log("Creating theme...");
// @ts-ignore
const themeNames = Object.keys(tokens?.theme || {});

const themes = themeNames.map((theme) => {
  console.log(`Making theme ${theme}`);
  const themeTokenNames = cssTokens.split("\n").flatMap((line) => {
    if (!line.trim().startsWith(`--theme-${theme}`)) return [];
    const tokenName = line.trim().split(":")[0];
    return [
      `${tokenName.replace(`theme-${theme}`, `salt`)}: var(${tokenName});`,
    ];
  });
  const contents = [".salt-theme.salt-theme {", ...themeTokenNames, "}"].join(
    "\n"
  );
  const cssPath = join(themesDir, `ks-theme-${theme}.css`);
  fs.writeFileSync(cssPath, contents, {
    encoding: "utf8",
  });
  return {
    cssPath,
    themeName: theme,
  };
});

const assetSets: KnapsackAssetSetsConfig = {
  globalAssetSetIds: ["salt-light", "salt-dark", ...themeNames],
  allAssetSets: Object.fromEntries([
    [
      "salt-light",
      ((): KnapsackAssetSetConfig => ({
        id: "salt-light",
        title: "Salt (light)",
        inlineJs: "document.body.setAttribute('data-mode', 'light');",
        assets: [],
      }))(),
    ],
    [
      "salt-dark",
      ((): KnapsackAssetSetConfig => ({
        id: "salt-dark",
        title: "Salt (dark)",
        inlineJs: "document.body.setAttribute('data-mode', 'dark');",
        assets: [],
      }))(),
    ],
    ...themes.map(({ cssPath, themeName }) => {
      const assetSet: KnapsackAssetSetConfig = {
        id: themeName,
        title: themeName,
        assets: [
          {
            src: "../dist/tokens/design-tokens.css",
          },
          {
            src: relative(join(__dirname, "./knapsack/data"), cssPath),
          },
        ],
      };
      return [themeName, assetSet];
    }),
  ]),
};

fs.writeFileSync(
  join(__dirname, "./knapsack/data/knapsack.asset-sets.json"),
  JSON.stringify(assetSets, null, 2)
);
console.log("Done");
