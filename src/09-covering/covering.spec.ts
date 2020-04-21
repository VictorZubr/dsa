import covering, { Stations } from './covering';

const statesNeeded = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];

const stations: Stations = {
  stationOne: ['id', 'nv', 'ut'],
  stationsTwo: ['wa', 'id', 'mt'],
  stationsThree: ['or', 'nv', 'ca'],
  stationsFour: ['nv', 'ut'],
  stationFive: ['ca', 'az'],
};

describe('Covering testing', () => {
  test('Station coverage should be Set { stationOne, stationsTwo, stationsThree, stationFive }', () => {
    expect(covering(statesNeeded, stations)).toEqual(new Set(['stationOne', 'stationsTwo', 'stationsThree', 'stationFive']));
  });
});
