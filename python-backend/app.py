from flask import Flask, request
from flask_cors import CORS
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app = Flask(__name__)
# CORS is required to resolve "Cross Origin Resource Sharing" errors
CORS(app)

# Route to handle the sending of an email via backend.
@app.route('/Contact', methods=['POST'])
def Contact():
    if request.method == "POST":
        # get_json() will only work if the header specifies that the content
        # of the request is JSON, otherwise you will need to use another
        # method to parse the body and extract your data.
        data = request.get_json()
        #debug
        #print(data)
        
        # Concatenating information together to have a cleaner Mail() call later.
        full_subject = 'Website (' + data['name'] + '): ' + data['subject']
        full_content = "My email is: " + data['email'] + ". " + data['message']

        # Create and send the email through the SendGrid API
        # Due to the way SendGrid works, you have to validate the sending email
        #thus the simplest way is just to have your email as the sending & receiving
        #party and to include the actual sender's email in the text body.
        message = Mail(
            from_email=os.environ['EMAIL_USER'],
            to_emails=os.environ['EMAIL_USER'],
            subject=full_subject,
            html_content=full_content
        )
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        #console print response for later review.
        print(response.status_code, response.body, response.headers)

    return "data received"