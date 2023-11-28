import axios, { AxiosRequestConfig } from 'axios'
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return Response.json('OK');
}

export async function POST(req: NextRequest, res: NextResponse) {
  const {email} = await req.json()

  if (!email || !email.length) {
    return NextResponse.json({error: 'Email required'}, {status: 400})
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

  //required for basic auth api call
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");

  //axios headers
  const config: AxiosRequestConfig<any> = {
    headers: {
      Authorization: `Basic ${base64ApiKey}`,
      'Content-Type': 'application/json'
    }
  }

  const data = {
    email_address: email,
    status: 'subscribed'
  }

  const addMemberUrl: string = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`
  const getMemberUrl: string = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${email}/`

  try {
    const user = await axios.get(getMemberUrl, config)
    if (user.data.id && user.data.status == 'unsubscribed') {
        const update = await axios.put(getMemberUrl, data, config)
        return NextResponse.json({message: 'user re-subscribed'})
    }

    const response = await axios.post(addMemberUrl, data, config)
    if (response.status >= 400) {
      return NextResponse.json({
        error: `There was an error subscribing to the newsletter.`
      }, {status: 400})
    }

    return NextResponse.json({ message: 'success' }, {status: 201})
  } catch (error) {
    console.log(error.response.data)
    return NextResponse.json({ error: error.response.data }, {status: 500})
  }
}
