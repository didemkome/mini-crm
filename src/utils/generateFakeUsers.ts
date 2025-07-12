import { faker } from '@faker-js/faker';
import { type Roles, RolesArr, type User } from '@/types/user';

export function generateFakeUsers(count: number): User[] {
  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      role: RolesArr[Math.floor(Math.random() * RolesArr.length)] as Roles,
      createdAt: faker.date.past({ years: 2 }).toISOString(),
      isActive: faker.datatype.boolean(),
      latitude: parseFloat(String(faker.location.latitude())),
      longitude: parseFloat(String(faker.location.longitude())),
    });
  }

  return users;
}
