import type { ReactNode } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import type { RootReducer } from "../config/rootReducer";
import { persistor, store } from "../config/store";

interface StoreProviderProps {
    initialState?: RootReducer;
    children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {props.children}
        </PersistGate>
    </Provider>
}