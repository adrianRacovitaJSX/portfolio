import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const API_KEY = process.env.CONVERTKIT_API_KEY;
    const API_URL = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;

    console.log('Attempting to subscribe:', { email, FORM_ID }); 

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: API_KEY,
        email,
        fields: {
          source: 'website_form'
        }
      }),
    });

    const data = await response.json();
    console.log('ConvertKit response:', data); 

    if (!response.ok) {
      throw new Error(`ConvertKit error: ${JSON.stringify(data)}`);
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error); 
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error subscribing to newsletter' },
      { status: 500 }
    );
  }
}