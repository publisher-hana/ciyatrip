export const options = [
  { value: "usa", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "australia", label: "Australia" },
  { value: "germany", label: "Germany" },
  { value: "france", label: "France" },
  { value: "japan", label: "Japan" },
];

export const accOpt = [
  { value: "belts", label: "Belts" },
  { value: "rings", label: "Rings" },
  { value: "necklace", label: "Necklace" },
];

export const ratingOpt = [
  { value: "5", label: "5 Star" },
  { value: "4", label: "4 Star" },
  { value: "3", label: "3 Star" },
  { value: "2", label: "2 Star" },
  { value: "1", label: "1 Star" },
];

export const sortOpt = [
  { value: "Popularity", label: "Sorted by Popularity" },
  { value: "Rating", label: "Sorted by Average Rating" },
  { value: "Latest", label: "Sorted by Latest" },
];


export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];
