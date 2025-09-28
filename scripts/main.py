from flask import Flask, render_template, request, flash
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

app.secret_key = os.getenv('FLASK_SECRET_KEY', '123')

app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = os.getenv('MAIL_PORT')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = app.config['MAIL_USERNAME']

mail = Mail(app)

@app.route('/')
def index():
    return render_template('contact.html')
@app.route('/send_email', methods=['POST'])

def send_email():
    try:
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        msg = Message('Nuevo mensaje de contacto',
                      sender=app.config['MAIL_USERNAME'],
                      recipients=[app.config['MAIL_USERNAME']])
        msg.body = f"Nombre: {name}\nCorreo: <{email}>\n\n{message}"

        mail.send(msg)
        flash("Mensaje enviado con éxito", "success")
    except Exception as e:
        print(f"Error: {e}")
        flash("Error al enviar el mensaje", "danger")
    
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
