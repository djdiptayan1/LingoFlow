from transformers import pipeline
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

model = AutoModelForSeq2SeqLM.from_pretrained("./opus-mt-en-hi")
tokenizer = AutoTokenizer.from_pretrained("./opus-mt-en-hi")

translation = pipeline("translation_en_to_hi", model=model, tokenizer=tokenizer)
text = input('Enter the text to be translated: ')
     

translated_text = translation(text, max_length=500)[0]['translation_text']
print(translated_text)