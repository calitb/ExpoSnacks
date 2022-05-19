import { createContext } from 'react';
import { DeviceMotionMeasurement } from 'expo-sensors';

const Context = createContext<DeviceMotionMeasurement | undefined>(undefined);

export default Context;
