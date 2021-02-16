import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma'

export default async function getBootCamps(req: NextApiRequest, res: NextApiResponse) {
    const bootCamps = await prisma.boot_camps.findMany()

    res.status(200).json({ bootCamps })
}
