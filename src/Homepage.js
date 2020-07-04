import React from 'react'
import OfficialSeal from './images/PCWB seal.png'

class Homepage extends React.Component {
    
    state={
        showAlert: true
    }

    handleAlertClick = () =>{
        this.setState({
            showAlert: false
        })
    }

    render(){
        return(
            <div className="container-fluid homepage">
                <div className={this.state.showAlert ? 'alert alert-success alert-dismissible fade show' : 'goaway'} role="alert">
                    <strong>There are no upcoming events at this time. Please check back later!</strong>
                    <button onClick={this.handleAlertClick} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <h1>Penn Central Wind Band</h1>
                <h2><i>Director Dr. William Kenny</i></h2>
                <div className='container'>
                    <img src={OfficialSeal} id='seal'className='img-fluid' alt='Penn Central Wind Band Official Seal'/>
                </div>
        </div>
        )
    }
}

export default Homepage