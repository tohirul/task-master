import { useContext } from "react";
import type { StoreState } from "@/core/types/store.types";
import { StoreContext } from "@/context/StoreContext";

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export const useSelector = <T>(callback: (state: StoreState) => T): T => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useSelector must be used within a StoreProvider");
  }
  return context.getValue(callback);
};

export const useDispatch = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useDispatch must be used within a StoreProvider");
  }
  return context.dispatch;
};
export const useStoreState = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStoreState must be used within a StoreProvider");
  }
  return context.state;
};
