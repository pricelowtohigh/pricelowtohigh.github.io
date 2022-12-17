import React, { useState, useEffect } from "react";
import { MessagesList } from "./MessagesList";
import axios from 'axios'

function Messages() {
    const URL = process.env.REACT_APP_API_BASE_URL;
    const [messages, setMessages] = useState([]);
    const [errors, setErrors] = useState(null);

    const giveHerPadding = {
        padding: '25px 15px 0px 0px'
        }

    useEffect(() => {
        const abortController = new AbortController();
        setErrors(null);
        async function listMessages() {
        try {
            const response = await axios.get(URL + "/messages", {
                signal: abortController.signal,
            })
            setMessages(response.data.data)
        } catch (error) {
            setErrors(error);
        }
        }
        listMessages();
        return () => abortController.abort();
    }, [])

    const messagesArray = messages.map((message) => {
        return (
            < MessagesList message = {message} />
        )
    });
    
    return (
        <div className="container mb-4" style={giveHerPadding}>
            {messagesArray}
        </div>
    );
}

export default Messages;
