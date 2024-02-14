import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [status, requestPermission] = Location.useBackgroundPermissions();
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermission();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      const sub = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      setSubscriber(null);
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
