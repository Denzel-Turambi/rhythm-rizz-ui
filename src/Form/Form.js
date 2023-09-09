import { useState } from "react";
import './Form.css'
import { postPoem } from "../ApiCalls";

function Form({addPoem}) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [poem, setPoem] = useState('')

    function submitPoem(event) {
        event.preventDefault()
        const newPoem = {
            id: Date.now(),
            title,
            author,
            poem
        }
        postPoem(newPoem)
        addPoem(newPoem)
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