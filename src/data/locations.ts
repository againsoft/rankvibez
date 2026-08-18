export type Location = {
  country: string;
  city?: string;
  type: "office" | "market";
  labelId: "headOffice" | "servingClientsIn";
  address?: string;
};

export const locations: Location[] = [
  {
    country: "Bangladesh",
    city: "Dhaka",
    type: "office",
    labelId: "headOffice",
    address: "60, West Agargaon, Sher-E-Bangla Nagar, Dhaka - 1207, Bangladesh",
  },
  { country: "United States", type: "market", labelId: "servingClientsIn" },
  { country: "United Kingdom", type: "market", labelId: "servingClientsIn" },
  { country: "UAE", type: "market", labelId: "servingClientsIn" },
  { country: "Saudi Arabia", type: "market", labelId: "servingClientsIn" },
  { country: "Canada", type: "market", labelId: "servingClientsIn" },
  { country: "Australia", type: "market", labelId: "servingClientsIn" },
];
