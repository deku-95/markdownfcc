import React from "react";
import { marked } from "marked";
import "bulma/css/bulma.css";
const script = document.createElement("script");
script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
script.async = true;
document.body.appendChild(script);

marked.setOptions({
  breaks: true,
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let initialText =
      "# Hi \n\n" +
      "## This is a sub-heading \n\n" +
      "[Link example](https://www.example.com) \n\n" +
      "`Inline code` with backticks \n\n" +
      "````\n" +
      "# code block \n" +
      "print '3 backticks or \n" +
      "print 'indent 4 spaces \n" +
      "````\n\n" +
      "1. First item \n" +
      "2. Second item \n" +
      "3. Third item \n\n" +
      "![Image](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png) \n\n" +
      "> blockquote \n\n" +
      "**bold text** \n";

    this.state = {
      markdown: initialText,
    };
  }
  // My markdown previewer interprets carriage returns and renders them as <br> (line break) elements
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    return (
      <div className="container">
        <section>
          <div id="title" className="my-6 has-text-centered">
            <h1 class="title">Markdown Project for FCC</h1>
          </div>
        </section>
        <hr />
        <div className="columns">
          <div className="column">
            <h1 className="title my-4">Write here</h1>
            <div className="form-group">
              <textarea
                id="editor"
                className="textarea"
                rows="25"
                value={this.state.markdown}
                // My markdown previewer interprets carriage returns and renders them as <br> (line break) elements
                onChange={(e) => this.updateMarkdown(e.target.value)}
              />
            </div>
          </div>
          <div className="column">
            <h1 className="title my-4">Preview</h1>
            <div
              className="content"
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
            />
          </div>
        </div>
      </div>
    );
  }
}
