import React from "react";
import s from './RouteBus.module.css';
import RouteBusItem from "./RouteBusItem/RouteBusItem";
import Title from "../Title/Title";

class RouteBus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://avperm.ru:9105/api/v1/route/all",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6MTEsImVuYWJsZWQiOnRydWUsInN1YiI6InpoZWxlem92LnBlcmV2b3prYSIsImlhdCI6MTU4MTY3NzU2NCwiZXhwIjoxNTg0MjY5NTY0fQ.KoQ2di3xONfk30VrV2nso-b6RoJ6Zr4y0AHR57x_Ms0DncHysbJuAOnrkjLr4Wu2l4ppIPwo2a0KuTTQQHciJw'
                },
                body: []
            })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className={s.RouteBus}>
                    <Title name={'Маршруты'}/>
                    <ul>
                        {items.map(item =>
                            <li key={item.id}>
                                <RouteBusItem name={item.name}/>
                            </li>)
                        }
                    </ul>
                </div>
            );
        }
    }
}

export default RouteBus;