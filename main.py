from flask import Flask, request, jsonify
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime

credential = ServiceAccountCredentials.from_json_keyfile_name("buenavistaparty-2f18c4fcbe7a.json",
                                                              ["https://spreadsheets.google.com/feeds",                                                               "https://www.googleapis.com/auth/spreadsheets",                                                        "https://www.googleapis.com/auth/drive.file",                                                        "https://www.googleapis.com/auth/drive"])
client = gspread.authorize(credential)
gsheet = client.open("Buena Vista Block Party").sheet1

app = Flask(__name__, static_folder='bvp/build', static_url_path='/')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    address = data.get('address')
    number = data.get('number')
    comment = data.get('comment')

    gsheet.insert_row([name, email, address, number, comment, datetime.now().strftime("%Y-%m-%d %H:%M:%S")], len(gsheet.get_all_values()) + 1) 

    return jsonify({"message": "Data received"}), 200

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run()
