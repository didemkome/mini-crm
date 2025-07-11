import { faker } from '@faker-js/faker';
import type { User } from '../types/user';

export function generateFakeUsers(count: number): User[] {
  const roles = ['Admin', 'Manager', 'Developer'];
  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      role: roles[Math.floor(Math.random() * roles.length)],
      createdAt: faker.date.past({ years: 2 }).toISOString(),
      active: faker.datatype.boolean(),
      latitude: parseFloat(String(faker.location.latitude())),
      longitude: parseFloat(String(faker.location.longitude())),
    });
  }

  return users;
}
