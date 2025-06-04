// context/StoreContext.ts
import { createContext } from "react";
import type { Store } from "@/core/types/store.types";

export const StoreContext = createContext<Store | undefined>(undefined);
