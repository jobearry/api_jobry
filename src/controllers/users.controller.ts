import { Request, Response } from 'express';
import { sql } from '../config/db.connect';


export const getUsers = async (req: Request, res: Response) => {
  try{
    const users = await sql`
      SELECT * FROM jdb_users
      ORDER BY id DESC
    `;
    res.status(200).json({success: true, data: users})
  }catch(error){
    console.log(error)
  }
};

export const getUserbyId = async (req: Request, res: Response) => {}