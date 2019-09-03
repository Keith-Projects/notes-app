import React from 'react';

class App extends React.Component {
    render(body) {
        return ( <
            div className = "container" >
            <
            header >
            <
            nav >
            <
            a className = "navbar navbar-brand"
            href = "index.html" >
            Notes App <
            /a> < /
            nav >
            <
            /header>

            <
            Body / >

            <
            footer >
            &
            copy; Notes - App - Keith Blackwelder 2019 <
            /footer>

            <
            /div>
        );
    }
}

class Body extends React.Component {
    render(form) {
        return ( <
            main >
            <
            NoteForm / > <
            /main>
        );
    }
}

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: String,
            note: String,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput (e) {
        this.setState({
            title: e.target.value
        });
    }

    handleChange (e) {
        

        const textareaLen = e.target.value;
        document.querySelector('#count').innerHTML = `${ textareaLen.length}/550</main>`;

        this.setState({
            note: textareaLen
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(this.state.title);
        alert(this.state.note);


    }

    render() {
        return ( <
            div >
            <
            form onSubmit = {
                this.handleSubmit
            }
            action = "test.php"
            id = "noteForm" >
            <
            div className = "form-group" >
            <
            input type = "text"
            name = "title"
            value = {
                this.state.title
            }
            onChange = {
                this.handleInput
            }
            id = "title"
            placeholder = "Title"
            className = "form-control"
            required = "true" / >
            <
            /div> <
            div className = "form-group" >
            <
            textarea maxlength = "550"
            className = "form-control"
            placeholder = "Note goes here..."
            onChange = {
                this.handleChange
            }
            name = "note"
            required = "true" / >
            <
            span id = "count" > < /span> <
            /div> <
            div className = "form-group" >
            <
            button className = "btn btn-primary btn-sm"
            type = "submit" > Add Note < /button> < /
            div > < /form > < /
            div >
        )
    }
}

export default App;