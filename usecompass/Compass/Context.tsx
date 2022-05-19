import { createContext } from 'react';
import * as Location from 'expo-location';

const Context = createContext<Location.LocationHeadingObject | undefined>(undefined);

export default Context;
