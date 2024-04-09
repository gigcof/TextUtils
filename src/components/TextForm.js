import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", 'success')
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", 'success')
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!", 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        const text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard!", 'success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", 'success')
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode  === 'dark' ? 'white' : '#042743'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{text.split(" ").length * 0.008} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox to preview it here' }</p>
            </div>
        </>
    )
}
