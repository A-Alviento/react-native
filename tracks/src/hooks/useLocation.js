import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [status, requestPermission] = Location.useBackgroundPermissions();
  
  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const { granted } = await requestPermission();
        if (!granted) {
          throw new Error("Location permission not granted");
        }
        const subscriber = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]); // if empty array, only run startWatching once when component is first rendered
  // if shouldTrack in array, run startWatching whenever shouldTrack changes

  return [err];
};
