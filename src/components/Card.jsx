import logo from '../nigeria.jpg';
import '../styles/App.css';
import React, {Component} from 'react';

class Card extends Component {

    state = {
        name: this.props.value,
        origin: this.props.value,
        ministry: this.props.value,
        address: this.props.value,
        website: this.props.value,
        moreInfo: this.props.value,
       /* //name: ["Abubakar Malami"],
        origin: ["Kebbi"],
        ministry: ["Justice"],
        address: ["Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way Central Area, Abuja.\n" +
        "                        Federal Capital Territory, Nigeria."],
        website: ["justice.gov.ng"],
        moreInfo: ["Kebbi"]*/

    }
    myChangeHandler = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        if (fieldName === 'name') {
            this.setState({name: fieldValue})
        } else if (fieldName === 'ministry') {
            this.setState({ministry: fieldValue})
        } else if (fieldName === 'origin') {
            this.setState({origin: fieldValue})
        } else if (fieldName === 'address') {
            this.setState({address: fieldValue})
        } else if (fieldName === 'website') {
            this.setState({website: fieldValue})
        } else if (fieldName === 'moreInfo') {
            this.setState({moreInfo: fieldValue})
        }
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {


        return (
            <div className="App">

                <body>
                <div className="logo-title">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="title">
                        Ministry of {this.state.ministry}
                    </h2>
                </div>
                <div>
                    <p className="name-minister">Minister: {this.state.name} - {this.state.origin} state</p>
                    <p>Address:</p>
                    <p>
                        {this.state.address}

                        <p>Web: <a
                            className="App-link"
                            href="https://www.justice.gov.ng/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {this.state.website}
                        </a>
                        </p>

                    </p>
                </div>
                </body>
                <div className="wrapper">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="heading-more-info">Include More Information</h1>
                            <form className="d-flex flex-column"  onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <label>
                                        <p>Name</p>
                                        <input
                                            type='text'
                                            name='name'
                                            className="field"
                                            //value={this.state.name}
                                            onChange={this.myChangeHandler}
                                            //onChange={(e) =>this.myChangeHandler({name: e.target.value})}
                                        />
                                    </label>
                                    <label>
                                        <p>Ministry</p>
                                        <input
                                            type='text'
                                            name='ministry'
                                            className="field"
                                            //value={this.state.ministry}
                                            onChange={this.myChangeHandler}
                                        />
                                    </label>
                                    <label>
                                        <p>Origin</p>
                                        <input
                                            type='text'
                                            className="field"
                                            name='origin'
                                            //value={this.state.origin}
                                            onChange={this.myChangeHandler}
                                        />
                                    </label>
                                    <label>
                                        <p>Address</p>
                                        <input
                                            type='text'
                                            className="field"
                                            name='address'
                                            //value={this.state.address}
                                            onChange={this.myChangeHandler}
                                        />
                                    </label>
                                    <label>
                                        <p>Website</p>
                                        <input
                                            className="field"
                                            type='text'
                                            name='website'
                                            //value={this.state.website}
                                            onChange={this.myChangeHandler}
                                            required
                                        />
                                    </label>
                                    <label>
                                        <p>More Information</p>
                                        <textarea name="moreInfo"
                                                  className="field"
                                        //          value={this.state.moreInfo}
                                                  onChange={this.myChangeHandler}
                                        />
                                    </label>
                                </fieldset>
                                <button onSubmit={this.handleSubmit}> Submit

                                    {/*//onClick={() => this.myChangeHandler({id: 1})}>Submit*/}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Card;