import React, { useState } from "react";
import axios from "axios";

const TranslationCard = () => {
    const [inputText, setInputText] = useState("");
    const [reversedText, setReversedText] = useState(""); // Changed the state variable name

    const handleTranslate = async () => {
        try {
            console.log("Sending request with inputText:", inputText);
            const sending = {
                input: inputText,
            };
            const jsonData = JSON.stringify(sending);

            console.log(jsonData);

            const response = await axios.post("http://127.0.0.1:5000/reverse", jsonData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Response:", response);

            if (response.status !== 200) {
                throw new Error("Network response was not ok");
            }

            const data = response.data;
            setReversedText(data.reversedText);
        } catch (error) {
            console.error("Error:", error);
        }
    };



    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-semibold mb-4">Text Reversal</h1>
            <input
                type="text"
                placeholder="Enter text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
            />
            <button
                onClick={handleTranslate}
                className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2 w-full"
            >
                Reverse Text
            </button>
            {reversedText && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Reversed Text:</h2>
                    <div className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mt-2">
                        {reversedText}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TranslationCard;
