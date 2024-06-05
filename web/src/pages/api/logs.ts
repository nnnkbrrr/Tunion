import type { NextApiRequest, NextApiResponse } from "next";
import db from '../../../db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const [rows] = await db.query('select * from Logs');
    res.status(200).json(rows)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}