import React, { useState } from "react";

export function MessagesList ({message}) {
    return (
        <div>
            <p>Message: {message.message}</p>
            <p>Author: {message.author}</p>
            <br></br>
        </div>
    )
}