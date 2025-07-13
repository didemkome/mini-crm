export function getRandomCoordinateInTurkey() {
  const latitude = 36 + Math.random() * (42 - 36); // 36°N - 42°N
  const longitude = 26 + Math.random() * (45 - 26); // 26°E - 45°E
  return { latitude, longitude };
}
