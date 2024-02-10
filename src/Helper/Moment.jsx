import moment from "moment";
export const getCurrentTimeStamp = (timeFormat) => {
  return moment().format(timeFormat);
};
