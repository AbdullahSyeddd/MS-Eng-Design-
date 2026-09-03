import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extracting fields
    const fullName = formData.get('fullName') as string || 'Not provided';
    const email = formData.get('email') as string || 'Not provided';
    const companyName = formData.get('companyName') as string || 'N/A';
    const phoneNumber = formData.get('phoneNumber') as string || 'N/A';
    const address = formData.get('address') as string || 'N/A';
    const shedCategory = formData.get('shedCategory') as string || 'N/A';
    const constructionType = formData.get('constructionType') as string || 'N/A';
    
    // Attachment handling
    const attachment = formData.get('attachment') as File | null;

    // Email Body HTML Setup
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-w: 600px; padding: 20px; border: 1px solid #e5e5e5; border-radius: 10px;">
        <h2 style="color: #0D3B26;">New Shed Design Enquiry</h2>
        <p>You have received a new project enquiry from your website.</p>
        
        <h3 style="color: #0F7A4D; border-bottom: 1px solid #e5e5e5; padding-bottom: 5px;">Contact Details</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Company:</strong> ${companyName}</li>
          <li><strong>Address:</strong> ${address}</li>
        </ul>

        <h3 style="color: #0F7A4D; border-bottom: 1px solid #e5e5e5; padding-bottom: 5px;">Project Requirements</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Category:</strong> ${shedCategory}</li>
          <li><strong>Construction Type:</strong> ${constructionType}</li>
          <li><strong>Service Required:</strong> ${formData.get('serviceType') || 'N/A'}</li>
          <li><strong>Dimensions (L x W):</strong> ${formData.get('length') || 'N/A'} x ${formData.get('width') || 'N/A'}</li>
          <li><strong>Bays & Spacing:</strong> ${formData.get('bays') || 'N/A'} Bays (@ ${formData.get('baySpacing') || 'N/A'} spacing)</li>
          <li><strong>Heights (Knee / Apex):</strong> ${formData.get('kneeHeight') || 'N/A'} / ${formData.get('apexHeight') || 'N/A'}</li>
          <li><strong>Pitch:</strong> ${formData.get('pitch') || 'N/A'} | <strong>Clear Span:</strong> ${formData.get('clearSpan') || 'N/A'}</li>
        </ul>

        <h3 style="color: #0F7A4D; border-bottom: 1px solid #e5e5e5; padding-bottom: 5px;">Site & Materials</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Wind Zone:</strong> ${formData.get('windZone') || 'N/A'} | <strong>Importance Level:</strong> ${formData.get('importanceLevel') || 'N/A'}</li>
          <li><strong>Timber Grade:</strong> ${formData.get('timberGrade') || 'N/A'} | <strong>Floor:</strong> ${formData.get('floorType') || 'N/A'}</li>
        </ul>
        
        <p><strong>Additional Comments:</strong><br/> ${formData.get('additionalComments') || 'None'}</p>
      </div>
    `;

    // Process attachment if exists
    const attachments = [];
    if (attachment && attachment.name) {
      const bytes = await attachment.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: attachment.name,
        content: buffer,
      });
    }

    // Configure Nodemailer Transport (Using Gmail for testing)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Your sender email
      to: process.env.EMAIL_USER, // Document required designated business email (sending to yourself for testing)
      subject: `New Shed Enquiry - ${shedCategory} from ${fullName}`,
      html: htmlBody,
      attachments: attachments,
    });

    return NextResponse.json({ success: true, message: 'Enquiry sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}