from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

app = Flask(__name__)
CORS(app)

@app.route("/reverse", methods=["POST"])
def reverse_text():
    try:
        data = request.get_json()
        # get the input text from the request
        input_text = data["input"]

        model = AutoModelForSeq2SeqLM.from_pretrained("Helsinki-NLP/opus-mt-en-hi")
        tokenizer = AutoTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-hi")
        translation = pipeline("translation_en_to_hi", model=model, tokenizer=tokenizer)
        translated_text = translation(input_text, max_length=500)[0]['translation_text']

        reversed_text = input_text[::-1]  # Reverse the input text
        
        
        print(f"Received Input text: {input_text}")  # Log the received input text
        response_data = {"reversedText": translated_text}
        print(f"Reversed text: {translated_text}")  # Log the reversed text
        return jsonify(response_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)