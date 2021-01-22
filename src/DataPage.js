import React from 'react';
import './styles/App.css';
import './styles/index.css';

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
        let {
            name,
            minister,
            origin,
            address,
            website,
            moreInfo
        } = this.state;
        fetch('localhost:3000/add_info', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                minister: minister,
                origin: origin,
                address: address,
                website: website,
                moreInfo: moreInfo,

            })
        }).then(response => response.json()).then(data => {
            window.alert(data)
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                <h1 className="heading-more-info">Include More Information</h1>
                <form className="d-flex flex-column">
                    <fieldset>
                        <label>
                            <p>Name</p>
                            <input
                                type='text'
                                name='name'
                                className="field"
                                value={this.state.name}
                                onChange={this.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Minister</p>
                            <input
                                type='text'
                                name='minister'
                                className="field"
                                value={this.state.minister}
                                onChange={this.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Origin</p>
                            <input
                                type='text'
                                className="field"
                                name='origin'
                                value={this.state.origin}
                                onChange={this.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Address</p>
                            <input
                                type='text'
                                className="field"
                                name='address'
                                value={this.state.address}
                                onChange={this.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Website</p>
                            <input
                                className="field"
                                type='text'
                                name='website'
                                value={this.state.website}
                                onChange={this.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>More Information</p>
                            <textarea name="moreInfo"
                                      className="field"
                                      value={this.state.moreInfo}
                                      onChange={this.myChangeHandler}
                            />
                        </label>
                    </fieldset>
                    <button onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
                </div>
            </div>
        )
    }

}
export default DataPage;
