from flask import Flask, request
from flask_mail import Mail, Message
from flask_cors import CORS
import os

app = Flask(__name__)
# CORS is required to resolve "Cross Origin Resource Sharing" errors
CORS(app)

# Part of Flask mail config
mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.environ['EMAIL_USER'],
    "MAIL_PASSWORD": os.environ['EMAIL_PASS']
}
app.config.update(mail_settings)
mail = Mail(app)

# Route to handle the sending of an email via backend.
@app.route('/Contact', methods=['POST'])
def Contact():
    if request.method == "POST":
        # get_json() will only work if the header specifies that the content
        # of the request is JSON, otherwise you will need to use another
        # method to parse the body and extract your data.
        data = request.get_json()
        #print(data)
        
        # Concatenating a subject together with data to have a cleaner
        # Message() call later.
        full_subject = 'Website (' + data['name'] + '): ' + data['subject']
        # In the Message() you are required to send a list for recipients
        # this means if you have only 1 recipient you will need to use
        # the correct syntax shown in the Message() call below.
        recipient = mail_settings['MAIL_USERNAME'] 

        # Create and send the email
        msg = Message(
        subject=full_subject, 
        sender= data['email'], recipients=[recipient],
        body = data['message'])
        mail.send(msg)

        #debug
        #print (msg)
        #print('email sent')
    return "data received"