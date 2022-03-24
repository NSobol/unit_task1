import getHealth from '../script';

test('Тестирование уровня здоровья персонажа - здоров', () => {
  const obj = {
    name: 'Маг',
    health: 90,
  };
  const rezult = getHealth(obj);
  expect(rezult).toBe('healthy');
});

test('Тестирование уровня здоровья персонажа - раненый', () => {
  const obj = {
    name: 'Маг',
    health: 48,
  };
  const rezult = getHealth(obj);
  expect(rezult).toBe('wounded');
});

test('Тестирование уровня здоровья персонажа - критический', () => {
  const obj = {
    name: 'Маг',
    health: 10,
  };
  const rezult = getHealth(obj);
  expect(rezult).toBe('critical');
});
