import React from 'react';

class App extends React.Component {
    render(body) {
        return ( <
            div className = "container" >
            <
            header className = "row" >
            <
            nav className = "col-xs-10 col-md-8 col-lg-4" >
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
            footer className = "row" >
            <
            div className = "col-xs-12 col-md-8 col-lg-4 text-center mx-auto" > &
            copy; NotesAppKeith Blackwelder 2019 < /div>< /
            footer >

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
            NoteForm / >
            <
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

    handleInput(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleChange(e) {


        const textareaLen = e.target.value;
        document.querySelector('#count').innerHTML = `${textareaLen.length}/550</main>`;

        this.setState({
            note: textareaLen
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        //</div>alert(this.state.title);
        //</footer>alert(this.state.note);

        document.querySelector('#title').value = '';
        document.querySelector('#note').value = '';
        document.querySelector('#count').innerHTML = '';

    }

    render(current) {
        return ( <
            div >
            <
            form onSubmit = {
                this.handleSubmit
            }
            action = "test.php"
            className = "container"
            id = "noteForm" >
            <
            div className = "form-group row" >
            <
            div className = "col-xs-10 col-md-8 col-lg-4" >
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
            required = "true" / > < /div> < /
            div > <
            div className = "form-group row" >

            <
            div className = "</div>" > <
            textarea maxlength = "550"
            className = "form-control"
            placeholder = "Note goes here..."
            onChange = {
                this.handleChange
            }
            name = "note"
            id = "note"
            required = "true" / > < /div> <
            span id = "count" > < /span> < /
            div > <
            div className = "form-group" >
            <
            button className = "btn btn-primary btn-sm"
            type = "submit" > Add Note < /button> < /
            div > < /form >  <
            CurrentNote note = {
                this.state.note
            }
            title = {
                this.state.title
            }
            / >< /
            div >
        );
    }
}

class CurrentNote extends React.Component {

    check(e) {
        alert(e.target.clientWidth);
    }

    render() {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col" > Title: {
                this.props.title
            } < /
            div > < /
            div >
            <
            div className = "row" >
            <
            div className = "col" >
            Note: {
                this.props.note
            } < /div></div > <
            /div>
        );
    }
}

export default App;