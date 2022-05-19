import { DeviceMotionMeasurement } from 'expo-sensors';
import { useContext } from 'react';
import Context from './Context';

/**
 * Subscribe to device motion events.
 * @returns The device motion information on every change. 
 */
export default function useDeviceMotion(): DeviceMotionMeasurement | undefined {
  return useContext(Context);
}

/**
 * Convenient method to convert the device orientation numeric value into a string
 * @param orientation device orientation value
 * @returns device orientation as a string
 */
export const orientationToString = (orientation: number | null | undefined): string | undefined => {
  switch (orientation) {
    case 0:
      return 'portrait';
    case 90:
      return 'right landscape';
    case 180:
      return 'upside down';
    case -90:
      return 'left landscape';
    default:
      return undefined;
  }
};


