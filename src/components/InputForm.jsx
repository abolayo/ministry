import React from "react";
function InputForm() {
return (
    <div className="wrapper">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <h1 className="heading-more-info">Include More Information</h1>
                <form className="d-flex flex-column"  onSubmit={this.props.handleSubmit}>
                    <fieldset>
                        <label>
                            <p>Name</p>
                            <input
                                type='text'
                                name='name'
                                className="field"
                                //value={this.state.name}
                                onChange={this.props.myChangeHandler}
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
                                onChange={this.props.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Origin</p>
                            <input
                                type='text'
                                className="field"
                                name='origin'
                                //value={this.state.origin}
                                onChange={this.props.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Address</p>
                            <input
                                type='text'
                                className="field"
                                name='address'
                                //value={this.state.address}
                                onChange={this.props.myChangeHandler}
                            />
                        </label>
                        <label>
                            <p>Website</p>
                            <input
                                className="field"
                                type='text'
                                name='website'
                                //value={this.state.website}
                                onChange={this.props.myChangeHandler}
                                required
                            />
                        </label>
                        <label>
                            <p>More Information</p>
                            <textarea name="moreInfo"
                                      className="field"
                                //          value={this.state.moreInfo}
                                      onChange={this.props.myChangeHandler}
                            />
                        </label>
                    </fieldset>
                    <button onSubmit={this.props.handleSubmit}> Submit

                        {/*//onClick={() => this.myChangeHandler({id: 1})}>Submit*/}
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}
export default InputForm