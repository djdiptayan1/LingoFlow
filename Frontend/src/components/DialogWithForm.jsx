
import React, { useState, useEffect } from "react";
import menu from "../assets/menu.png";
import axios from "axios";
import logo from "../assets/logo2.png";
import microphoneIcon from "../assets/microphone.png"; // Import microphone icon

import {
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

function DialogWithForm() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [inputText, setInputText] = useState("");
    const [reversedText, setReversedText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    const [Emotion, setEmotionText] = useState("");
    const [Emotion_translate, setEmotionTranslate] = useState("");

    // New state variable to track voice input mode
    const [voiceInputActive, setVoiceInputActive] = useState(false);

    // Clear input and output boxes when the dialog is initially opened
    useEffect(() => {
        if (open) {
            setInputText("");
            setReversedText("");
            setSubmittedText("");
            setEmotionText("");
        }
    }, [open]);

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
            setReversedText(data.Translated_text);
            setEmotionText(data.emotionLabel);
            setEmotionTranslate(data.Translated_emotion);
            console.log(Emotion);
            console.log(Emotion_translate);
            setSubmittedText(inputText); // Store the submitted input text
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Function to toggle voice input mode
    const toggleVoiceInput = () => {
        setVoiceInputActive((prevState) => !prevState);
    };

    return (
        <>
            <div className="fixed bottom-4 left-4 z-50">
                <img
                    src={menu}
                    alt="Sign In"
                    onClick={handleOpen}
                    className="cursor-pointer h-9 w-9 sm:h-12 sm:w-12"
                />
                {open && <div className="fixed inset-0 backdrop-blur-sm opacity-60 blur flex items-center justify-center"></div>}
                <Dialog
                    size="xs"
                    open={open}
                    handler={handleOpen}
                    className="bg-transparent flex items-center justify-center"
                >
                    <Card className="h-full max-w-[30rem] rounded-md">
                        <CardHeader className="p-4 flex justify-center">
                            <img
                                src={logo}
                                alt="Card Image"
                                className="h-72 w-72 rounded-2xl "
                            />
                        </CardHeader>
                        <h1 className="text-2xl font-semibold text-center">English To हिंदी</h1>
                        <h3 className="text-center">(अंग्रेज़ी से हिंदी)</h3>
                        <form onSubmit={handleTranslate} className="flex flex-col items-center"> {/* Move onSubmit here */}
                            <CardBody className="gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    className="w-[20rem] h-100 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </CardBody>
                            <CardFooter className="pt-0">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-center w-100"
                                >
                                    Translate
                                </button>
                                {/* Button for voice input */}
                                <button
                                    onClick={toggleVoiceInput}
                                    className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-center w-100 ml-10 ${voiceInputActive ? "bg-red-500" : ""
                                        }`}
                                >
                                    {voiceInputActive ? "Active" : "Voice Input"}
                                </button>
                            </CardFooter>
                        </form>

                        {submittedText && (
                            <div className="mt-2 px-4">
                                <strong>Input:</strong>
                                <div className="bg-gray-100 p-2 rounded-md mt-2">{submittedText}</div>
                            </div>
                        )}
                        {reversedText && (
                            <div className="mt-4 px-4 mb-4">
                                <strong>
                                    Output:
                                </strong>
                                    {Emotion && Emotion_translate && (
                                        <span className="ml-2">
                                            (Emotion: {Emotion} / {Emotion_translate})
                                        </span>
                                    )}
                                
                                <div className="bg-gray-100 p-2 rounded-md mt-2">{reversedText}</div>
                            </div>
                        )}

                    </Card>
                </Dialog>
            </div>
        </>
    );

}

export default DialogWithForm
