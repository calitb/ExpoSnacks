import Context from './Context';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';

export default function LocationProvider(props: React.PropsWithChildren<{}>): JSX.Element {
  const [heading, setHeading] = useState<Location.LocationHeadingObject>()

  useEffect(() => {
    let subscription: Location.LocationSubscription;
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        subscription = await Location.watchHeadingAsync((heading) => {
          setHeading(heading);
        });
      }
    })()

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return <Context.Provider value={heading}>
    {props.children}
  </Context.Provider>;
}
