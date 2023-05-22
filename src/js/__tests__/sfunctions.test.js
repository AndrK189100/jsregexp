import { orderByProps, getSpecialAttack } from '../sfunctions.js';
import Daemon from '../daemon.js';

const props = [
  { key: 'name', value: 'Azrail' },
  { key: 'type', value: 'Daemon' },
  { key: 'attack', value: 10 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 100 },
  { key: 'level', value: 1 },
  {
    key: 'special',
    value: [{
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    }, { id: 9, name: 'Нокаутирующий удар', icon: 'http://...' }],
  },
];

const special = [
  {
    id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
  },
  {
    id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
  },
];

test('Check function orderByProps', () => {
  const daemon = new Daemon('Azrail');
  expect(orderByProps(daemon, ['name', 'type'])).toEqual(props);
});

test('Check function getSpecialAttack', () => {
  const daemon = new Daemon('Azrail');
  expect(getSpecialAttack(daemon)).toEqual(special);
});
