import { faker } from '@faker-js/faker';
import { type Roles, RolesArr, type User } from '@/types/user';
import { getRandomCoordinateInTurkey } from '@/utils/getRandomCoordinateInTurkey.ts';

export function generateFakeUsers(count: number): User[] {
  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    const { latitude, longitude } = getRandomCoordinateInTurkey();

    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      role: RolesArr[Math.floor(Math.random() * RolesArr.length)] as Roles,
      createdAt: faker.date.past({ years: 2 }).toISOString(),
      isActive: faker.datatype.boolean(),
      latitude: latitude,
      longitude: longitude,
    });
  }

  return users;
}
