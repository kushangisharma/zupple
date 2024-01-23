import {
  BTC_TO_DOLLAR_RATE,
  DETAIL_BLOCK_INFO_KEYS,
} from "../constants/constants";

export const capitalizeKey = (key: string) =>
  key.charAt(0).toUpperCase().concat(key.slice(1));

export const getTransformedHashValue = (key: string, value: string) => {
  if (key.toLowerCase() !== DETAIL_BLOCK_INFO_KEYS.HASH) return value;
  return value.substring(0, 7).concat("...").concat(value.slice(-7));
};

export const convertSizeToMB = (value: number) =>
  (value / (1024 * 1024)).toFixed(2);

export const convertBTCtoDollar = (value: number) =>
  Math.ceil(value * BTC_TO_DOLLAR_RATE).toLocaleString("en-US");

export const getTimePassedSince = (value: number) => {
  const diff = ((new Date() as unknown as number) - value) / (60 * 1000);
  const timePassedSince =
    diff < 60
      ? `${Math.floor(diff)} minute${Math.floor(diff) !== 1 ? "s" : ""} ago`
      : `${Math.floor(diff / 60)} hour${
          Math.floor(diff / 60) !== 1 ? "s" : ""
        } ago`;
  return timePassedSince;
};

export const convertTimestampToDateString = (value: number) => {
  return new Date(value)
    .toISOString()
    .slice(0, 16)
    .replace("T", " ")
    .concat(` ${getTimePassedSince(value)}`);
};
export const transformedValue = (key: string, value: number | string) => {
  key = key.toLowerCase();

  switch (key) {
    case DETAIL_BLOCK_INFO_KEYS.WEIGHT:
      return `${value} MWU`;
    case DETAIL_BLOCK_INFO_KEYS.SIZE:
      return `${convertSizeToMB(value as number)} MB`;
    case DETAIL_BLOCK_INFO_KEYS.TOTAL_FEES:
    case DETAIL_BLOCK_INFO_KEYS.SUBSIDY_WITH_FEES:
      return `${value} BTC `;
    case DETAIL_BLOCK_INFO_KEYS.TIMESTAMP:
      return convertTimestampToDateString(value as number);
    default:
      return value.toString();
  }
};
