const dateOptions = {
  locale: "en-GB",
  options: {
    day: "numeric",
    month: "short",
    year: "numeric",
  }
};

const dateFormat = new Intl.DateTimeFormat(
  dateOptions.locale, 
  dateOptions.options as Intl.DateTimeFormatOptions
);

export function getFormattedDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions,
  locale?: string,
) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(locale ?? dateOptions.locale, options);
  }

  return dateFormat.format(new Date(date));
}
