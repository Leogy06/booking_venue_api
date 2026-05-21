import { prisma } from "../lib/prisma"

export const getUsersService = async() => { 
    const users = await prisma.users.findMany();
    return users;
 }