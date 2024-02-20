import { z } from "Zod";

export interface Imovel {
  price: number;
  title: string;
  description: string;
  type: string;
  badroom: number;
  bathroom: number;
  area: number;
  n_cars: number;
  createdAt: Date;
  updatedAt: Date;
  filter: string;
  suite: number;
  cidade: string;
}

export const ImovelSchema = z.object({
  data: z.object({
    price: z.number().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    type: z.string().optional(),
    bedroom: z.number().optional(),
    bathroom: z.number().optional(),
    n_cars: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    filter: z.string().optional(),
    suites: z.number().optional(),
    string: z.string().optional(),
  }),
});
