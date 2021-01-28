import React from "react";

export default class fetchData extends React.Component {
    state = {
        loading: true,
        person: "bolahi"
    }


    async componentDidMount() {
        const url = "./sampleData.json/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false})
    }


    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? <div>loading...</div> :
                    <div>{this.state.person}</div>}

            </div>
        );
    }
}
/*
 class List extends Component {
        state = {
            name: "Abubakar Malami",
            origin:"Kebbi",
            minister:"Justice",
            address:"(5th & 10th floors)",
            website:"justice.gov.ng",
            moreInfo:"Kebbi"
        }
    }
 */