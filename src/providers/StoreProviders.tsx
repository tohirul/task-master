import { StoreContext } from "@/context/StoreContext";
import type { Store } from "@/core/types/store.types";
import { initialState } from "@/store/initialStates";
import { rootReducer } from "@/store/rootReducer";

import { useMemo, useReducer } from "react";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const store: Store = useMemo(() => {
    return {
      state,
      dispatch,
      getValue: (selector) => selector(state),
    };
  }, [state]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
