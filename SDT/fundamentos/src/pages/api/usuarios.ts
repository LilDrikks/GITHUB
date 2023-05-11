// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { nome: "John Doe", email: "jjohn@gmail.com" },
    { nome: "Luce Jhames", email: "Luce@gmail.com" },
    { nome: "Albin Anson", email: "Albin@gmail.com" },
  ]);
}
