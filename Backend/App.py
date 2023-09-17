import streamlit as st
from transformers import pipeline
from gtts import gTTS

# Create pipelines for translation and text classification
translation_pipe = pipeline('translation', model='Helsinki-NLP/opus-mt-en-hi')
classification_pipe = pipeline("text-classification", model="SamLowe/roberta-base-go_emotions")

text = st.text_area("Enter some English text")
if text:
    # Translate the text
    translation_result = translation_pipe(text, src_lang='en', tgt_lang='hi')
    
    # Classify the emotion
    emotion_result = classification_pipe(text)
    
    # Extract the translation and emotion label
    translation_text = translation_result[0]['translation_text']
    emotion_label = emotion_result[0]['label']
    
    st.json(translation_result)
    
    # Display the translated text and emotion label
    st.write("Translated Text (Hindi):", translation_text)
    st.write("Emotion:", emotion_label)
    
    # Generate and display audio
    tts = gTTS(translation_text, lang='hi') 
    tts.save("translated_audio.mp3")
    st.audio("translated_audio.mp3")
