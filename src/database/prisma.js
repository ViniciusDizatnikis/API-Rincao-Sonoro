import { PrismaClient } from "@prisma/client";

//Creates a new instance of the PrismaClient whitch will be used to interact with the database
const prisma = new PrismaClient();

export default prisma;