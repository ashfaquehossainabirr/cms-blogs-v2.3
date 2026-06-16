import { useRef, useState, useEffect } from "react";

const RichTextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const [activeFormats, setActiveFormats] = useState({});

  // Set initial content ONLY once or when value changes externally
  useEffect(() => {
    if (
      editorRef.current &&
      value !== editorRef.current.innerHTML
    ) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  const updateActive = () => {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      list: document.queryCommandState("insertUnorderedList"),
    });
  };

  const format = (command) => {
    document.execCommand(command, false, null);
    updateActive();

    // Sync content AFTER formatting
    onChange(editorRef.current.innerHTML);
  };

  return (
    <div className="editor-wrapper">
      {/* Toolbar */}
      <div className="editor-toolbar">
        <button
          type="button"
          className={activeFormats.bold ? "active" : ""}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => format("bold")}
        >
          B
        </button>

        <button
          type="button"
          className={activeFormats.italic ? "active" : ""}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => format("italic")}
        >
          I
        </button>

        <button
          type="button"
          className={activeFormats.underline ? "active" : ""}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => format("underline")}
        >
          U
        </button>

        <button
          type="button"
          className={activeFormats.list ? "active" : ""}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => format("insertUnorderedList")}
        >
          •
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        className="editor"
        contentEditable
        dir="ltr"
        spellCheck
        onInput={() => {
          updateActive();
          onChange(editorRef.current.innerHTML);
        }}
        onClick={updateActive}
      />
    </div>
  );
};

export default RichTextEditor;