#Start-up steps
# cd C:\Users\danie\OneDrive\Work\Career\Coding\Folio\Sportsbet notification engine\flask-server
# env/scripts/activate
# Python server.py 

from flask import Flask, request, jsonify, session, redirect, url_for
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import and_, text
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
app.secret_key = "hello"
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://MSI/dev?driver=ODBC+Driver+17+for+SQL+Server'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Optional, disables a warning

db = SQLAlchemy(app)  # Initialize SQLAlchemy with your app

@app.route('/send', methods=['POST'])
def send_email():
    request_body = request.json
    sender_email = 'mergyventura495@gmail.com'
    password = "mbkv svhk dtum zzky"
    sent_to = [request_body.get('email')]
    sent_subject = "Sportsbet Email Notification"
    with open(r'C:\Users\danie\OneDrive\Work\Career\Coding\Folio\Sportsbet notification engine\flask-server\email_template.html', 'r') as file:
        sent_body = file.read()


    # Create the email message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = ", ".join(sent_to)
    msg['Subject'] = sent_subject
    msg.attach(MIMEText(sent_body, 'html'))



    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(sender_email, password)
        server.sendmail(sender_email, sent_to, msg.as_string())
        server.close()
        print('Email sent!')

        # Respond with a success message
        return jsonify({"message": f"Email sent from: {sender_email}: {request_body}"}), 200
        
    except Exception as e:
        # Catch all unexpected errors
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500
    

    

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

