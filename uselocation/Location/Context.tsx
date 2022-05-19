import { createContext } from 'react';
import * as Location from 'expo-location';

const Context = createContext<Location.LocationObject | undefined>(undefined);

export default Context;
