import { join, relative } from "path";
import fs from "fs";
import {
  KnapsackAssetSetsConfig,
  KnapsackAssetSetConfig,
} from "@knapsack/types";
import prompts from "prompts";

const tokens = JSON.parse(
  fs.readFileSync("./knapsack/data/knapsack.design-tokens.json", "utf8")
);

async function add() {
  const { themeName: themeNameInput } = await prompts(
    [
      {
        type: "text",
        name: "themeName",
        message: "Name of theme",
      },
    ],
    {
      onCancel: () => process.exit(1),
    }
  );
  if (typeof themeNameInput !== "string") {
    throw new Error("themeNameInput is not a string");
  }
  const themeName = themeNameInput.trim();

  const basicToken = {
    $type: "color",
    $value: "#000000",
  };
  tokens.theme[themeName] = {
    actionable: {},
  };
  tokens.theme[themeName].actionable = Object.fromEntries(
    ["primary", "cta", "secondary"].map((group) => [
      group,
      {
        foreground: basicToken,
        "foreground hover": basicToken,
        "foreground active": basicToken,
        "foreground disabled": basicToken,
        background: basicToken,
        "background hover": basicToken,
        "background active": basicToken,
        "background disabled": basicToken,
      },
    ])
  );

  fs.writeFileSync(
    join(__dirname, "./knapsack/data/knapsack.design-tokens.json"),
    JSON.stringify(tokens, null, 2)
  );
  console.log(`adding theme ${themeName}`);
}

add();
