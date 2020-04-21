export interface Stations {
  [key: string]: string[];
}

const getBestStation = (statesNeeded: Set<string>, stations: Stations) => Object.keys(stations)
  .reduce((acc, station) => {
    const covered = new Set([...statesNeeded].filter((state) => stations[station].includes(state)));
    return (covered.size > acc.bestStationCovering.size)
      ? ({ bestStation: station, bestStationCovering: covered })
      : acc;
  }, { bestStation: '', bestStationCovering: new Set() });

export default (states: string[], stations: Stations): Set<string> => {
  let statesNeeded: Set<string> = new Set(states);
  const resultStations: Set<string> = new Set();

  while (statesNeeded.size) {
    const { bestStation, bestStationCovering } = getBestStation(statesNeeded, stations);
    statesNeeded = new Set([...statesNeeded].filter((state) => !bestStationCovering.has(state)));
    if (bestStation) {
      resultStations.add(bestStation);
    }
  }

  return resultStations;
};
