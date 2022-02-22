import smtplib
import ssl

class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email
        self.from_password = from_password
        self.to_email = to_email

    def send_email(self, subject, message):
        body = f"Subject:{subject}\n\n{message}".encode('utf-8')
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError
