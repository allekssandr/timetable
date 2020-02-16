import React from "react";
import axios from "axios";

const options = {
    method: 'POST',
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
    },
    data:[],
    url: 'https://avperm.ru:8499/auth?login=6012560511&password=7126683425'
};

class AxiosRequests extends React.Component {

    componentDidMount(): void {
        axios(options)
            .then(res => console.log(res))
    }

    render() {
        return (
            <div></div>
        );
    }

}

export default AxiosRequests;