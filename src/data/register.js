export const ButtonGroupData = [
  { text: "REGISTRER", path: "/register" },
  { text: "BEHANDLINGSLISTE", path: "/behandlingsliste" },
  { text: "SALGSOVERSIKT", path: "/salgsoversikt" },
  { text: "SALGSRAPPORTER", path: "/salgsrapporter" },
  { text: "...", path: "/...." },
  { text: "...", path: "/...." },
];

export const options = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
];
export const radioType = [
  { label: "Nybil", value: "Nybil" },
  { label: "Bruktbil", value: "Bruktbil" },
  { label: "Nytte", value: "Nytte" },
];

export const inputFields = [
  { type: "select", label: "Kundetype", options: options },
  { type: "text", label: "Registreringsnummer" },
  { type: "text", label: "VIN" },
];

export const inputFieldsSection2 = [
  { type: "radio" },
  { type: "select", label: "Merke", options: options },
  { type: "text", label: "Modell" },
];

export const userDetailsInput = [
  { type: "number", label: "Mobilnummer" },
  { type: "text", label: "E-post" },
];
export const userDetailsSection = [
  { type: "text", label: "Fornavn" },
  { type: "text", label: "Etternavn" },
  { type: "text", label: "Adresse" },
];
export const userDetailsSection2 = [
  { type: "number", label: "Mobilnummer" },
  { type: "text", label: "E-post" },
  { type: "text", label: "E-post" },
];

export const carouselInfoSections = [
  {
    type: "select",
    label: "Avdeling",
    options: options,
  },
  {
    type: "select",
    label: "DH kategori",
    options: options,
  },
  {
    type: "date",
    label: "Hentedato",
  },
  {
    type: "select",
    label: "Hentelokasjon",
    options: options,
  },
];

export const userTableData = [
  "Kjetil André Flor",
  "Martin Olsen",
  "Ty Michael Tollestrup",
  "Sepehr Akbari",
];
