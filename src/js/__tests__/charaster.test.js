import Character from '../character';

test.each(['s', 'sssssssssssssssssssss', 1])('Charaster constructor check if not passed name=%s', (name) => {
  expect(() => { new Character(name); }).toThrow('Name wrong');
});

test('Charaster constructor check if passed name=', () => {
  expect(new Character('sss').name).toBe('sss');
});

test('Charaster levelUp method', () => {
  const pers = new Character('sss');
  pers.attack = 10;
  pers.defence = 10;
  pers.levelUp();
  expect(pers.level).toBe(2);
  expect(pers.attack).toBe(12);
  expect(pers.attack).toBe(12);
});

test('Charaster levelUp if person died', () => {
  const pers = new Character('sss');
  pers.health = 0;
  expect(() => pers.levelUp()).toThrow('pers Died');
});

test('Charaster domage method', () => {
  const pers = new Character('sss');
  pers.attack = 10;
  pers.defence = 10;
  pers.damage(5);
  expect(pers.health).toBe(95.5);
});

test('Charaster domage method if pers died', () => {
  const pers = new Character('sss');
  pers.health = 0;
  expect(() => pers.damage(5)).toThrow('pers Died');
});
