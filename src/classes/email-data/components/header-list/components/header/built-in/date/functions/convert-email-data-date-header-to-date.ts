

export function convertEmailDataDateHeaderToDate(
  input: string,
): Date {
  const timestamp: number = Date.parse(input);
  if (Number.isNaN(timestamp)) {
    throw new Error(`Invalid date`);
  } else {
    return new Date(Date.parse(input));
  }
}

