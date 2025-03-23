import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

sender_email = "mergyventura495@gmail.com"
password = "mbkv svhk dtum zzky"
sent_to = ['mergyventura495@gmail.com']
sent_subject = "Hello Lil Pup"
sent_body = ("This is an automated message\n\n"
             "Do not respond\n"
             "\n"
             "Cheers,\n"
             "Merg\n")

# Create the email message
msg = MIMEMultipart()
msg['From'] = sender_email
msg['To'] = ", ".join(sent_to)
msg['Subject'] = sent_subject
msg.attach(MIMEText(sent_body, 'plain'))



try:
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.ehlo()
    server.login(sender_email, password)
    server.sendmail(sender_email, sent_to, msg.as_string())
    server.close()
    print('Email sent!')
except Exception as e:
    print("email failed", e)