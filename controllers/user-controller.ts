import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


class UserController {

    prisma = new PrismaClient();

    getUsers = async (req: Request, res: Response) => {
        const users = await this.prisma.user.findMany();
        res.json(users);
    }

}

export default UserController;