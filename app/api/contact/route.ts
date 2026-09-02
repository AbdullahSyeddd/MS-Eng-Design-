import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extracting fields sent from the frontend
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const constructionType = formData.get('constructionType');
    const attachment = formData.get('attachment'); // This will be the file object
    
    // Server console par check karne ke liye:
    console.log("---- New Enquiry Received ----");
    console.log("Name:", fullName);
    console.log("Email:", email);
    console.log("Shed Type:", constructionType);
    
    if (attachment && attachment instanceof File) {
      console.log("Attachment Name:", attachment.name);
      console.log("Attachment Size:", attachment.size, "bytes");
    }

    // TODO: Yahan par asli email send karne ka logic aayega (jaise Nodemailer ya Resend API)
    // Filhal trial project ke liye hum success response bhej rahe hain taake API chal jaye.

    return NextResponse.json({ 
      success: true, 
      message: 'Enquiry received successfully!' 
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit enquiry.' 
    }, { status: 500 });
  }
}