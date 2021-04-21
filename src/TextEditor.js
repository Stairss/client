import Quill from "quill";
import { useCallback } from "react";
import 'quill/dist/quill.snow.css';


const TextEditor = () => {
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return

        wrapper.innerHtml = ''
        const editor = document.createElement('div');
        wrapper.append(editor)
        new Quill(editor, { theme: 'snow' })
    }, [])

    return (
        <div className="container" ref={wrapperRef}>

        </div>
    );
}

export default TextEditor;