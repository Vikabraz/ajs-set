import Team from '../src/js/set';

class Character {
  constructor(name) {
    this.name = name;
  }
}

test('add new character', () => {
  const team = new Team();
  const pers = new Character('Pers');
  team.add(pers);

  expect(Array.from(team.members)).toEqual([pers]);
});

test('add character again', () => {
  const team = new Team();
  const pers = new Character('Pers');
  team.add(pers);
  expect(() => team.add(pers)).toThrow('Персонаж уже существует в команде!');
});

test('add some characters', () => {
  const team = new Team();
  const pers1 = new Character('Pers1');
  const pers2 = new Character('Pers2');
  team.addAll(pers1, pers2);
  expect(Array.from(team.members)).toEqual([pers1, pers2]);
});

test('to array', () => {
  const team = new Team();
  const pers1 = new Character('Pers1');
  const pers2 = new Character('Pers2');
  team.addAll(pers1, pers2);
  team.toArray();
  expect(Array.from(team.members)).toEqual([pers1, pers2]);
});
