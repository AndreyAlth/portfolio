import { render } from '@react-email/render'
import EmailTemplate from '@/components/templates/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

const html = render(<EmailTemplate email={'example@example.com'} message={'hola mundo'} />, {
  pretty: true,
});

const sendEmail = async (req, res) => {
  const {email, message} = req.body
  try {
    const resp = await resend.emails.send({
      from: 'Andrey <hi@andreyalth.site>',
      to: ['andreyalth@gmail.com', email],
      subject: 'Hello world',
      react: <EmailTemplate email={email} message={message} />,
    })
    res.status(200).json(resp)
  } catch (error) {
    res.status(400).json(error)
  }
}

export default sendEmail
