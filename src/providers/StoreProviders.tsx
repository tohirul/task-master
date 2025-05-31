import type { Store } from "@/core/types/store.types";
import { initialState } from "@/store/initialStates";
import { rootReducer } from "@/store/rootReducer";
import { StoreContext } from "@/store/store";
import { useMemo, useReducer } from "react";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const store: Store = useMemo(() => {
    return {
      state,
      dispatch,
      getValue: (callback) => callback(state),
    };
  }, [state, dispatch]);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
