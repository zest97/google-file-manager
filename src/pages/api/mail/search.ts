import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  if (method !== 'GET') {
    res.status(404).json({ message: 'Resource not found.' });
  }

  const sessionData = await getServerSession(req, res, authOptions);

  if (!sessionData) {
    res.status(401).json({ message: 'local: Session data not exist.' });
  }

  const { accessToken } = sessionData;

  const gmail = google.gmail({ version: 'v1', headers: { Authorization: `Bearer ${accessToken}` } });

  const gmailResponse = await gmail.users.messages.list({
    userId: 'me'
  });

  res.status(gmailResponse.status).json({ data: gmailResponse.data });
}