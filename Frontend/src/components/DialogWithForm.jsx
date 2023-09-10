import React, { useState } from "react";
import menu from "../assets/menu.png";
import axios from "axios";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";

function DialogWithForm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

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
        <>
            <div className="fixed bottom-4 right-4 z-50">
                <img
                    src={menu}
                    alt="Sign In"
                    onClick={handleOpen}
                    className="cursor-pointer h-9 w-9 sm:h-12 sm:w-12"
                />
                {open && <div className="fixed inset-0 bg-white opacity-50 blur"></div>}
                <Dialog
                    size="xs"
                    open={open}
                    handler={handleOpen}
                    className="bg-transparent shadow-none flex items-center justify-center"
                    onSubmit={handleTranslate}
                >
                    <Card className="w-full max-w-[24rem]">
                        <CardHeader>
                            <img
                                src="https://images.unsplash.com/photo-1657302156083-2e61fb23d161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
                                alt="Card Image"
                                className="w-full rounded-md shadow-lg"
                            />
                        </CardHeader>
                        <h1 className="text-2xl font-semibold text-center">English To Hindi</h1>
                        <form onSubmit={handleTranslate}>
                            <CardBody className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                            </CardBody>
                            <CardFooter className="pt-0">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-center w-full"
                                >
                                    Translate
                                </button>
                            </CardFooter>
                        </form>
                        {reversedText && (
                            <div className="mt-4">
                                <strong>Output:</strong>
                                <div className="bg-gray-100 p-2 rounded-md mt-2">{reversedText}</div>
                            </div>
                        )}
                    </Card>
                </Dialog>
            </div>
        </>
    );
}
export default DialogWithForm;
