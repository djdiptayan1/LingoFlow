// https://huggingface.co/SamLowe/roberta-base-go_emotions?text=I+like+you.+I+love+you
async function query(inputText) {
    const data = {
      inputs: inputText
    };
  
    const response = await fetch(
      "https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  
    const result = await response.json();
    return result;
  }
  
  // Example: Provide input text from an API
  const inputTextFromAPI = "hey you idiot";
  
  query(inputTextFromAPI).then((response) => {
    console.log(response[0][0].label)
    console.log(JSON.stringify(response));
  });
  