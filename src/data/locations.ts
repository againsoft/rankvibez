export type Location = {
  country: string;
  city?: string;
  type: "office" | "market";
  label: string;
  address?: string;
};

export const locations: Location[] = [
  {
    country: "Bangladesh",
    city: "Dhaka",
    type: "office",
    label: "Head Office / Technology Operations",
    address: "60, West Agargaon, Sher-E-Bangla Nagar, Dhaka - 1207, Bangladesh",
  },
  { country: "United States", type: "market", label: "Serving Clients In" },
  { country: "United Kingdom", type: "market", label: "Serving Clients In" },
  { country: "UAE", type: "market", label: "Serving Clients In" },
  { country: "Saudi Arabia", type: "market", label: "Serving Clients In" },
  { country: "Canada", type: "market", label: "Serving Clients In" },
  { country: "Australia", type: "market", label: "Serving Clients In" },
];
