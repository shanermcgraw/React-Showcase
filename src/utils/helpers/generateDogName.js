const dogFirstNames = [
  "Paws",
  "Spike",
  "Milo",
  "Bella",
  "Max",
  "Otis",
  "Cooper",
  "Princess",
  "Josie",
  "Drake",
  "Bailey"
];

const dogLastNames = ["MacGruffins", "Snowball", "Pupperton", "Smith", "Wick"];

export default function generateDogName() {
  return (
    dogFirstNames[Math.floor(Math.random() * dogFirstNames.length)] +
    " " +
    dogLastNames[Math.floor(Math.random() * dogLastNames.length)]
  );
}
