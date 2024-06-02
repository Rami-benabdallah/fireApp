import { Resend } from 'resend';
import * as React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';


const resend = new Resend('re_dmjjW6Wi_823bwbmBNgYythhm1gFeCMfp');;

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.body) {
    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['ramibenabdallah40@gmail.com'],
        subject: "Hello world",
        react: 'hello hello',
      });

      if (error) {
        return Response.json({ error }, { status: 500 });
      }

      return Response.json({ data });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  } else {
    console.error('Error sending email:', 333);
  }
}