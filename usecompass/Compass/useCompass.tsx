import * as Location from 'expo-location';
import { useContext } from 'react';
import Context from './Context';

/**
 * Subscribe to compass events.
 * @returns the true heading and the magnetic heading; or undefined values if the information is not available.
 */
export default function useCompass(): Location.LocationHeadingObject | undefined {
    return useContext(Context);
}

const COMPASS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
/**
 * Convenient method to convert the heading numeric value into a string with direction.
 * @param degrees heading in degrees
 * @returns the heading information as a string, with direction information.
 */
export const compass = (degrees: number | null | undefined): string | undefined => {
  if (!degrees) {
    return undefined;
  }

  const val = Math.floor((degrees / 45) + 0.5);
  const res = COMPASS[(val % 8)];

  return `${degrees?.toFixed(2)} ${res}`;
};

