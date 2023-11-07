from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/send', methods=['POST'])
def send_text():
    try:
        data = request.get_json()
        text = data.get('text')
        print(text)
    except Exception as e:
        print(str(e))
        
    return "OK"
    
if __name__ == '__main__':
    app.run(debug=True)
