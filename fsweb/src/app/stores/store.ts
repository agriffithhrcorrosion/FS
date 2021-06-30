import { createContext, useContext } from "react";
import fitStackStore from "./fitStackStore";

interface Store {
    fitStackStore: fitStackStore
}

export const store: Store = {
    fitStackStore: new fitStackStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}