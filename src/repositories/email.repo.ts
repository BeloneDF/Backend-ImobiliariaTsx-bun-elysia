import { Resend } from "resend";
import { Email } from "../types/email/email.types";
import { env } from "../env";

export async function SendEmail(data: Email) {
  const resend = new Resend(env.RESEND_API_KEY);

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "belonefraga1@hotmail.com",
    subject: "Testando api de email do Belone",
    html: `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <link href="style.css" rel="stylesheet" type="text/css" />
    </head>
    
    <body>
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
        }
    
        .things {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          width: 300px;
          height: 100px;
          border: 1px solid gray;
          border-radius: 10px;
          gap: 20px
        }
    
        label {
          font-size: 18px;
          padding: 5px;

        }
      </style>
    
      <div>
        <h2>Mensagem: ${data.user.message}</h2>
      </div>
    
      <div class="things">
        <label>
          Nome: ${data.user.name}
        </label>
        <label>
          Email: ${data.user.email}
        </label>
        <label>
          Telefone: ${data.user.phone}
        </label>
      </div>
      <br/>
    </body>
    
    </html>`,
  });
}
