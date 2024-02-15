import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from "../navigationRef";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    // createTrack involves an async operation,
    // so we need to use the await keyword if
    // we want to wait for the operation to complete
    // before moving on to the next line of code.
    await createTrack(name, locations);
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
};
