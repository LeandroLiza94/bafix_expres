import * as React from 'react';
import AuthContent from './AuthContent';
import WelcomeContent from './WelcomeContent';
import Login from '../router/Login';
import { request, setAuthtoken } from '../axios_helper';


class AppComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            componentToShow: "bienvenido",
            onLogin: props.onLogin,
        }
    };

    render(){
        return(<div>

        <WelcomeContent /> 
        <AuthContent />

        </div>
        );
    };


} 
export default AppComponent