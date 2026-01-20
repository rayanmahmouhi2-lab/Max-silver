
import { ReactNode } from 'react';

export interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  difficulty: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}
