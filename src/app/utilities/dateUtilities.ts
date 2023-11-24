export function getCurrentDate(): string {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;
}

export function getCurrentHour(): string {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, '0');

  return `${hours}`;
}
