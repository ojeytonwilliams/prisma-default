import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const test = await prisma.test.findMany();
  console.log(test);
  try {
    const testDate = await prisma.dateTimeTest.findMany();
    console.log(testDate);
  } catch (e) {
    console.error(e);
  }
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
