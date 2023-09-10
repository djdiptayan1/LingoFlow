from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/reverse", methods=["POST"])
def reverse_text():
    try:
        data = request.get_json()
        # get the input text from the request
        input_text = data["input"]
        
        reversed_text = input_text[::-1]  # Reverse the input text
        print(f"Received Input text: {input_text}")  # Log the received input text
        response_data = {"reversedText": reversed_text}
        print(f"Reversed text: {reversed_text}")  # Log the reversed text
        return jsonify(response_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
