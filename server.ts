import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.get('/feed', async (req, res) => {
    const posts = await prisma.post.findMany()
    res.json(posts)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
