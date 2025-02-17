const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const addData = async () => {
  const data = await prisma.resource.create({
    data: {
      id: "1",
      name: "Hacking",
    },
  });
};

addData();
