// app/components/context.ts
import { LayoutContextProps } from '@/types/translations';
import { createContext } from 'react';

interface LayoutContextType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  translations: LayoutContextProps['translations']; // ✅ Fix this line
  isRTL: boolean;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(undefined);