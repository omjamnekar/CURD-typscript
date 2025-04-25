import { PrismaClient } from "../prisma/migrations/generated/prisma";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

const createRecord = async (name: string, description: string) => {
  try {
    const newRecord = await prisma.record.create({
      data: { name, description },
    });
    console.log("Record created", newRecord);
  } catch (e) {
    console.log("there is error: ", e);
  }
};

const readRecords = async () => {
  try {
    const readRecords = await prisma.record.findMany();

    console.log("All Record: ", readRecords);
  } catch (e) {
    console.log("there is error: ", e);
  }
};

const updateRecord = async (id: number, name: string, description: string) => {
  try {
    const updateRecord = await prisma.record.update({
      where: { id: id },
      data: { name: name, description: description },
    });

    console.log("Record updated: ", updateRecord);
  } catch (e) {
    console.log("there is error: ", e);
  }
};

const deleteRecord = async (id: number) => {
  try {
    const deleteRecord = await prisma.record.delete({ where: { id: id } });
    console.log("Record delete: ", deleteRecord);
  } catch (e) {
    console.log("there is error: ", e);
  }
};

const [command, ...args] = process.argv.slice(2);

if (command === "create") {
  const [name, description] = args;
  createRecord(name, description);
} else if (command === "read") {
  readRecords();
} else if (command === "update") {
  const [id, name, description] = args;
  updateRecord(Number(id), name, description);
} else if (command === "delete") {
  const [id] = args;
  deleteRecord(Number(id));
} else {
  console.log("Invalid command or arguement");
}
