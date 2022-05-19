import Context from './Context';
import * as ScreenOrientation from 'expo-screen-orientation';
import { DeviceMotion, DeviceMotionMeasurement } from 'expo-sensors';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

export default function DeviceMotionProvider(props: React.PropsWithChildren<{}>): JSX.Element {
  const [measurement, setMeasurement] = useState<DeviceMotionMeasurement>()

  useEffect(() => {
    if (Platform.OS === 'android') {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    }

    const listener = DeviceMotion.addListener((res) => {
      setMeasurement(res);
    });

    return () => {
      DeviceMotion.removeSubscription(listener);
    };
  }, []);

  return <Context.Provider value={measurement}>
    {props.children}
  </Context.Provider>;
}
