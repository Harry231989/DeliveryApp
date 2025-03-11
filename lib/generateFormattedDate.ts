export function generateFormattedDate(normalDate: string): string {
  const dateObject = new Date(normalDate);

  if (isNaN(dateObject.getTime())) {
    throw new Error('Invalid date format');
  }

  return dateObject.toISOString();
}
