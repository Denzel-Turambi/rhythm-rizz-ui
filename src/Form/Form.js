import { useState } from "react";
import './Form.css'
import { postPoem } from "../ApiCalls";

function Form() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [poem, setPoem] = useState('')

    function submitPoem(event) {
        const now = Date.now()
        const id = now.toString()
        event.preventDefault()
        const newPoem = {
            id: id,
            title,
            author,
            poem
        }
        postPoem(newPoem)
        clearInput()
    }

    function clearInput() {
        setTitle('')
        setAuthor('')
        setPoem('')
    }

    return (
        <form>
            <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
            />
            <input
            type="text"
            placeholder="Author"
            name="author"
            value={author}
            onChange={event => setAuthor(event.target.value)}
            />
            <input
            type="text"
            placeholder="Poem"
            name="poem"
            value={poem}
            onChange={event => setPoem(event.target.value)}
            />
            <button onClick={event => submitPoem(event)}>SUBMIT</button>
        </form>
    )

}

export default Form