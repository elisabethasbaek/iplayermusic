import React from "react";
import "../components/style/FeaturedCardError.css";

class FeaturedCardError extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error){
        return{hasError: true};
    }

    componentDidCatch(error, errorInfo){
        console.error(error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            return(
                <>
                    <h1 className="errorHeading">The content can't be displayed right now.</h1>
                    <p className="errorTip">Try again later.</p>
                </>
            )
        }

        return this.props.children;
    }
}

export default FeaturedCardError;