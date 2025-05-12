export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function toMonthAndYear(date: Date): string {
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${month.slice(0, 3)} ${year}`;
}

export const dateToLocalDateType = (date: Date) => {
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  const strDay = day < 10 ? `0${day}` : `${day}`;
  const strMonth = month < 10 ? `0${month + 1}` : `${month + 1}`;

  return `${year}-${strMonth}-${strDay}`;
};

export const ISOToDate = (isoString: string) => {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date(isoString));
}

export const ISOToYear = (isoString: string) => {
  return new Intl.DateTimeFormat('de-DE', {
    year: 'numeric'
  })?.format(new Date(isoString));
}
