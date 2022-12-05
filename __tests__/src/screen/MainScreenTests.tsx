import 'react-native';
import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import MainScreen from '../../../src/screen/MainScreen';
import TownClient from '../../../src/TownClient';

it('renders correctly', () => {
  let x: ReactTestRenderer = renderer.create(<MainScreen client={new TownClient()} />);
  expect(x).toMatchSnapshot();
});
