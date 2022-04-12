
import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const msg = {
    to: 'odontosos24horas@gmail.com',
    from: 'odontosos24horas@gmail.com',
    subject: `[Lead vindo do website] : ${req.body.subject}`,
    text: `${req.body.fullname}`,
    html: `<strong>${req.body.email}: ${req.body.message}</strong>`
  }
  await sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      return res.status(200).json({ error: '' })
    })
    .catch((error) => {
      console.error(error)
      return res.status(error.statusCode || 500).json({ error: error.message })
    })
}

export default sendEmail
