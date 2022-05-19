import Context from './Context';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';

export default function LocationProvider(props: React.PropsWithChildren<{}>): JSX.Element {
  const [location, setLocation] = useState<Location.LocationObject>()

  useEffect(() => {
    let subscription: Location.LocationSubscription;
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        subscription = await Location.watchPositionAsync({
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 300,
          distanceInterval: 0
        },
          (res) => {
          setLocation(res);
        });
      }
    })()

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return <Context.Provider value={location}>
    {props.children}
  </Context.Provider>;
}
