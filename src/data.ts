// Shared mock data and types for the Realty POS system

export type PropertyType = 'House' | 'Condo' | 'Lot' | 'Commercial' | 'Industrial';
export type PropertyStatus = 'Available' | 'Reserved' | 'Sold';
export type PropertyCategory = 'Residential' | 'Commercial' | 'Industrial';

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  category: PropertyCategory;
  price: number;
  status: PropertyStatus;
  location: string;
  area: number; // sqm
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  listedDate: string;
}

export interface Transaction {
  id: string;
  propertyId: string;
  propertyName: string;
  clientName: string;
  type: 'Buy' | 'Reserve' | 'Cancelled';
  amount: number;
  date: string;
  agent: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 'P001', name: 'Greenfield Residence', type: 'House', category: 'Residential',
    price: 4_800_000, status: 'Available', location: 'Alabang, Muntinlupa', area: 210,
    bedrooms: 4, bathrooms: 3, description: 'Modern 2-storey house in a secure village.',
    listedDate: '2025-01-15',
  },
  {
    id: 'P002', name: 'Azure Sky Condo Unit 5F', type: 'Condo', category: 'Residential',
    price: 3_250_000, status: 'Reserved', location: 'BGC, Taguig', area: 68,
    bedrooms: 2, bathrooms: 1, description: 'High-floor unit with city skyline view.',
    listedDate: '2025-02-01',
  },
  {
    id: 'P003', name: 'Hillcrest Corner Lot', type: 'Lot', category: 'Residential',
    price: 1_900_000, status: 'Available', location: 'Antipolo, Rizal', area: 320,
    description: 'Flat corner lot, ready for construction.',
    listedDate: '2025-02-18',
  },
  {
    id: 'P004', name: 'Market Place Stall Block A', type: 'Commercial', category: 'Commercial',
    price: 2_100_000, status: 'Sold', location: 'Quezon City', area: 45,
    description: 'Prime stall in a busy wet market complex.',
    listedDate: '2024-11-05',
  },
  {
    id: 'P005', name: 'Riverside Warehouse Unit', type: 'Industrial', category: 'Industrial',
    price: 8_500_000, status: 'Available', location: 'Caloocan City', area: 1200,
    description: 'Cold storage facility near major expressway.',
    listedDate: '2025-03-01',
  },
  {
    id: 'P006', name: 'Sunset Condo Unit 12B', type: 'Condo', category: 'Residential',
    price: 2_750_000, status: 'Available', location: 'Pasig City', area: 52,
    bedrooms: 1, bathrooms: 1, description: 'Cozy studio-loft, fully finished.',
    listedDate: '2025-03-12',
  },
  {
    id: 'P007', name: 'Mariposa House & Lot', type: 'House', category: 'Residential',
    price: 6_200_000, status: 'Available', location: 'Las Piñas City', area: 180,
    bedrooms: 3, bathrooms: 2, description: 'Classic bungalow with garden.',
    listedDate: '2025-04-01',
  },
  {
    id: 'P008', name: 'North Hub Office Space', type: 'Commercial', category: 'Commercial',
    price: 5_000_000, status: 'Reserved', location: 'Makati CBD', area: 130,
    description: 'Grade A office space, 13th floor.',
    listedDate: '2025-04-08',
  },
];

export const TRANSACTIONS: Transaction[] = [
  {
    id: 'TXN-0041', propertyId: 'P004', propertyName: 'Market Place Stall Block A',
    clientName: 'Rodrigo Mateo', type: 'Buy', amount: 2_100_000,
    date: '2025-04-14 09:32', agent: 'Ana Santos',
  },
  {
    id: 'TXN-0040', propertyId: 'P002', propertyName: 'Azure Sky Condo Unit 5F',
    clientName: 'Maria Reyes', type: 'Reserve', amount: 3_250_000,
    date: '2025-04-13 14:10', agent: 'Ben Cruz',
  },
  {
    id: 'TXN-0039', propertyId: 'P006', propertyName: 'Sunset Condo Unit 12B',
    clientName: 'Carlo Lim', type: 'Cancelled', amount: 2_750_000,
    date: '2025-04-12 11:05', agent: 'Ana Santos',
  },
  {
    id: 'TXN-0038', propertyId: 'P001', propertyName: 'Greenfield Residence',
    clientName: 'Diana Tan', type: 'Reserve', amount: 4_800_000,
    date: '2025-04-11 16:22', agent: 'Jose Garcia',
  },
  {
    id: 'TXN-0037', propertyId: 'P008', propertyName: 'North Hub Office Space',
    clientName: 'EasyBiz Corp.', type: 'Reserve', amount: 5_000_000,
    date: '2025-04-10 09:00', agent: 'Ben Cruz',
  },
  {
    id: 'TXN-0036', propertyId: 'P003', propertyName: 'Hillcrest Corner Lot',
    clientName: 'Ferdie Santos', type: 'Buy', amount: 1_900_000,
    date: '2025-04-09 13:45', agent: 'Jose Garcia',
  },
];

export const formatPrice = (p: number) =>
  '₱ ' + p.toLocaleString('en-PH', { minimumFractionDigits: 0 });
