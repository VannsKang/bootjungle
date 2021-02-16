import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma'

export default async function getBootCamp(req: NextApiRequest, res: NextApiResponse) {
    const bootCamp = await prisma.boot_camps.findUnique({
        where: {
            id: +req.query.id
        }
    })

    if (!bootCamp) {
        return res.status(400).json({ message : "Not found bootcamp"})
    }
    
    res.status(200).json({ bootCamp })
}
