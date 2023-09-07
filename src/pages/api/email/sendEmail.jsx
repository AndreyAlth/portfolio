import { render } from '@react-email/render'
import EmailTemplate from '@/components/templates/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

const sendEmail = async (req, res) => {
  const { email, message, subject } = req.body
  try {
    const resp = await resend.emails.send({
      from: 'Andrey <hi@andreyalth.site>',
      to: ['andreyalth@gmail.com', email],
      subject: subject,
      react: <EmailTemplate email={email} message={message} subject={subject}/>,
    })
    res.status(200).json(resp)
  } catch (error) {
    res.status(400).json(error)
  }
}

export default sendEmail
