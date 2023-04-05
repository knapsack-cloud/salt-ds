import { CountrySymbolProps } from "../country-symbol";
import { CountryCode } from "../countryMetaMap";
import { lazyMap } from "./lazyMap";

export type LazyCountrySymbolProps = {
  code: CountryCode;
} & CountrySymbolProps;

export const LazyCountrySymbol = ({
  code,
  ...props
}: LazyCountrySymbolProps) => {
  const Component = lazyMap[code];

  if (!Component && process.env.NODE_ENV !== "production") {
    console.warn(
      `Setting country code to ${code} which is invalid for <LazyCountrySymbol />`
    );
  }

  return <Component {...props} />;
};
