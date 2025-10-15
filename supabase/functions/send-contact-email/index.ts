import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();
    
    console.log("Received contact form submission:", { name, email, phone });

    // For now, we'll just log the message since Resend API key needs to be configured
    // TODO: Configure RESEND_API_KEY in Lovable Cloud secrets to enable email sending
    const emailData = {
      from: name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    };

    console.log("Contact form data:", emailData);

    // Send success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message received successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
