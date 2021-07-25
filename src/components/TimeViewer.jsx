import React from 'react'

export default class TimeViewer extends React.Component{
    constructor(props){
        super(props);
        let endAt = props.seconds;
        if(endAt === undefined){
            endAt = 0;
        }
        let timeLeft = props.mode === "view" ? endAt : endAt - Date.now() / 1000;
        this.state = {
            timeLeft: timeLeft,
            endAt: endAt
        }
    }
    isUp(){
        if(this.props.up !== undefined || this.props.up != false)
        {  
            return true;
        }
        return false;
    }
    render(){
        let timeLeft = this.state.timeLeft
        if(isNaN(timeLeft) || timeLeft < 0) timeLeft = 0
        if(timeLeft === 0){
            return ""
        }
        let days = Math.floor(timeLeft / (60 * 60 * 24))
        timeLeft -= days * (60 * 60 * 24);
        let hours = Math.floor(timeLeft / (60 * 60))
        timeLeft -= hours * (60 * 60)
        let minutes = Math.floor(timeLeft / 60)
        timeLeft -= minutes * 60
        let seconds = Math.floor(timeLeft)
        
        if(this.props.verbose){
            return <span>
                {this.props.label && <span>{this.props.label}: </span>}
                {days > 0 ? <span>{days} days</span>:<span></span>}
                {hours> 0 ?  <span>{hours} hours </span>:<span></span>}
                {minutes > 0 ?  <span>{minutes} minutes </span>:<span></span>}
                {seconds > 0 ? <span>{seconds} seconds </span> : <span></span>}
            </span>
        }

        return <span>
            {this.props.label && <span>{this.props.label}: </span>}
            {(days > 0)?<span>{days}d:</span>:<span></span>}
            <span>{hours}:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span>
        </span>
    }

    componentWillUnmount() {
        this._isMounted = false;
        if(this.props.mode === "view"){
            return
        }
        clearInterval(this.updateInterval);
    }

    componentDidMount() {
        this._isMounted = true
        if (this.props.mode === "view") {
            return
        }

        //  setup a timer
        this.updateInterval = setInterval(() => {
            // update the timer  
            this.setState({timeLeft: this.state.endAt - Date.now()/1000});

            if (this.state.timeLeft <= 0) {
                // clear the interval if expired
                clearInterval(this.updateInterval);
            }

        }, 1000);
    }
}