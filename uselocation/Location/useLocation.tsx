import * as Location from 'expo-location';
import { useContext } from 'react';
import Context from './Context';

/**
 * Subscribe to GPS event.
 * @returns the GPS information or undefined if not available.
 */
export default function useLocation(): Location.LocationObject | undefined {
    return useContext(Context);
}
