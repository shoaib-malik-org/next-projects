// import { NextApiRequest, NextApiResponse } from "next";

import { useRouter } from 'next/router'



export default function handler(req,res){
  console.log(req.query)
  res.status(200).json({name:'shoaib malik'})
}