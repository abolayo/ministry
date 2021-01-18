import React from 'react';
import './App.css';

class DataPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            minister: '',
            origin: '',
            address: '',
            website: '',
            moreInfo: ''
        };
    }

    myChangeHandler = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        if (fieldName === 'name') {
            this.setState({name: fieldValue})
        } else if (fieldName === 'minister') {
            this.setState({name: fieldValue})
        } else if (fieldName === 'minister') {
            this.setState({name: fieldValue})
        } else if (fieldName === 'origin') {
            this.setState({name: fieldValue})
        } else if (fieldName === 'address') {
            this.setState({name: fieldValue})
        } else if (fieldName === 'website') {
            this.setState({name: fieldValue})
        } else if (fieldName === 'moreInfo') {
            this.setState({name: fieldValue})
        }
    }


    onSubmit = (e) => {
        let {bookname, author} = this.state;
        fetch('localhost:3000/add_book', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                bookname: bookname,
                author: author,

            })
        }).then(response => response.json()).then(data => {
            window.alert(data)
        })
    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="heading-more-info">Include More Information</h1>
                <form className="form">
                    <fieldset>
                        <label>
                            <p>Name</p>
                            <input
                                type='text'
                                name='name'
                                value={this.state.name}
                                onChange={this.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Minister</p>
                            <input
                                type='text'
                                name='minister'
                                value={this.state.minister}
                                onChange={this.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Origin</p>
                            <input
                                type='text'
                                name='origin'
                                value={this.state.origin}
                                onChange={this.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Address</p>
                            <input
                                type='text'
                                name='address'
                                value={this.state.address}
                                onChange={this.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Website</p>
                            <input
                                type='text'
                                name='website'
                                value={this.state.website}
                                onChange={this.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>More Information</p>
                            <textarea name="moreInfo"
                                      value={this.state.moreInfo}
                                      onChange={this.myChangeHandler}
                            />
                        </label>
                    </fieldset>
                    <button onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }

}

export default DataPage;
