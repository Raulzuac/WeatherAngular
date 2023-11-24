export function kelvinToCelsius(kelvin: number): number {
  const celsius = kelvin - 273.15;
  return parseFloat(celsius.toFixed(2));
}
