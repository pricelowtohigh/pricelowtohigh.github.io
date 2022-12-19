import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function MessageForm () {
    const [ formData, setFormData ] = useState([]);
    const navigate = useNavigate();

    function handleChange (   ) {
        // update formData
    }

    function handleSubmit (  ) {
        // axios.post
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="your-name">Your Name:</label>
          <input
            name="your-name"
            type="text"
            id="your-name"
            placeholder="Your Name"
            required={true}
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="message">Message:</label>
          <input
            name="message"
            type="text"
            id="message"
            placeholder="Message"
            required={true}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br></br>
      </form>
    )
}