import { seedUsers } from './user-seeds.js';
import { sequelizeConfig } from '../models/index.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelizeConfig.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
