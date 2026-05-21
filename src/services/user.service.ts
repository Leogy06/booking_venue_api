import { prisma } from "../lib/prisma"

export const getUsersService = async() => { 
    const users = await prisma.user.findMany();
    return users;
 }