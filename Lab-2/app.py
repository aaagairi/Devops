from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
        return 'Hello from my docker container. This is Aditi'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')