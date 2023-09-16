import streamlit as st
from transformers import pipeline

st.title("Translation and Emotion Analysis App")

# Language code mapping for target languages and corresponding models
language_mapping = {
    "Tamil": {"tgt_lang": "ta", "model": "Helsinki-NLP/opus-mt-en-ta"},
    "Hindi": {"tgt_lang": "hi", "model": "Helsinki-NLP/opus-mt-en-hi"},
    "Bengali": {"tgt_lang": "bn", "model": "Helsinki-NLP/opus-mt-en-bn"},
    "French": {"tgt_lang": "fr", "model": "Helsinki-NLP/opus-mt-en-fr"},
    "Spanish": {"tgt_lang": "es", "model": "Helsinki-NLP/opus-mt-en-es"},
    "German": {"tgt_lang": "de", "model": "Helsinki-NLP/opus-mt-en-de"},
}

# Create a translation pipeline with a default model
translation_pipe = None

# Add a text input widget for user input
input_text = st.text_area("Enter text in English", "")

# Add a selectbox widget for choosing the target language
target_language = st.selectbox("Select Target Language", list(language_mapping.keys()))

if not translation_pipe:
    # Initialize the translation pipeline with a default model (English to Hindi)
    default_model = language_mapping["Hindi"]["model"]
    translation_pipe = pipeline("translation", model=default_model)

if st.button("Translate"):
    if input_text:
        # Get the language code and model for the selected target language
        language_info = language_mapping.get(target_language)

        if language_info:
            tgt_lang_code = language_info["tgt_lang"]
            translation_model = language_info["model"]

            # Update the translation pipeline with the selected model
            if translation_pipe.model.config.name_or_path != translation_model:
                translation_pipe = pipeline("translation", model=translation_model)

            # Use the translation pipeline to translate the text
            translation_result = translation_pipe(input_text, src_lang='en', tgt_lang=tgt_lang_code)
            translated_text = translation_result[0]['translation_text']

            st.subheader(f"Translated Text in {target_language}:")
            st.write(translated_text)
        else:
            st.error("Invalid target language selected.")

st.subheader("Emotion Analysis (Add your emotion analysis logic here if needed)")

if __name__ == "__main__":
    st.set_option('deprecation.showfileUploaderEncoding', False)
    st.run()
