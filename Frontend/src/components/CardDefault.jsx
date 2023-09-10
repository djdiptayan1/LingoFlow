import React, { useState } from "react";
import axios from "axios";

function CardDefault() {
    const [inputText, setInputText] = useState("");
    const [reversedText, setReversedText] = useState("");

    const handleTranslate = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

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
        <div className="max-w-md mx-auto mt-8 shadow-lg shadow-cyan-300">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                    src="https://images.unsplash.com/photo-1657302156083-2e61fb23d161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
                    alt="Card Image"
                    className="w-full rounded-md mb-4 shadow-lg"
                />
                <h1 className="text-2xl font-semibold mb-4 text-center">English To Hindi</h1>
                <form onSubmit={handleTranslate} className="flex flex-col items-center">
                    <input
                        type="text"
                        placeholder="Enter text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-center"
                    >
                        Translate
                    </button>
                </form>
                {reversedText && (
                    <div className="mt-4">
                        <strong>Output:</strong>
                        <div className="bg-gray-100 p-2 rounded-md mt-2">{reversedText}</div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default CardDefault;
