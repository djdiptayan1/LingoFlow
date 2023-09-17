# export FLASK_APP=index.py 
# export FLASK_ENV=development
# flask run 

from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline, AutoModelForSeq2SeqLM, AutoTokenizer

app = Flask(__name__)
CORS(app)

# Create a translation pipeline
translation_pipe = pipeline("translation", model="Helsinki-NLP/opus-mt-en-hi")

# Create an emotion classification pipeline
emotion_classification_pipe = pipeline("text-classification", model="SamLowe/roberta-base-go_emotions")

@app.route("/reverse", methods=["POST"])
def Translate():
    try:
        data = request.get_json()
        # Get the input text from the request
        input_text = data["input"]

        # Use the translation pipeline to translate the text
        translation_result = translation_pipe(input_text, src_lang='en', tgt_lang='hi')
        translated_text = translation_result[0]['translation_text']

        # Use the emotion classification pipeline to classify emotion
        emotion_result = emotion_classification_pipe(input_text)
        emotion_label = emotion_result[0]['label']

        # Use the translation pipeline to translate the emotion
        translation_emotion = translation_pipe(emotion_label, src_lang='en', tgt_lang='hi')
        translated_emotion = translation_emotion[0]['translation_text']


        # Log the received input text, translated text, and emotion label
        print(f"Received Input text: {input_text}")
        print(f"Translated text: {translated_text}")
        print(f"Emotion label: {emotion_label}")

        response_data = {
            "Translated_text": translated_text,
            "emotionLabel": emotion_label,
            "Translated_emotion":translated_emotion
        }

        return jsonify(response_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# if __name__ == "__main__":
#     app.run(debug=False, host="0.0.0.0")
