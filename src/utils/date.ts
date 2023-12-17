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
) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(dateOptions.locale, {
      ...(dateOptions.options as Intl.DateTimeFormatOptions),
      ...options,
    });
  }

  return dateFormat.format(new Date(date));
}
