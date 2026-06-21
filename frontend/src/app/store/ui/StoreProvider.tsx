import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

import type { RootReducer } from '../config/reducer';
import { store } from '../config/store';

interface StoreProviderProps {
  initialState?: RootReducer;
  children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
  return <Provider store={store}>{props.children}</Provider>;
};
