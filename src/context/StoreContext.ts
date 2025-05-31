import type { Store } from "@/core/types/store.types";
import { createContext } from "react";

export const StoreContext = createContext<Store | null>(null);
