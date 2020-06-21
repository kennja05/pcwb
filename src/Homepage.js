import React from 'react'
import OfficialSeal from './images/PCWB seal.jpg'

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
                <div className={this.state.showAlert ? 'alert alert-success alert-dismissible fade show' : 'goway'} role="alert">
                    <strong>HAPPY FATHER'S DAY! (This could be an alert for an upcoming concert, change of venue, etc.)</strong>
                    <button onClick={this.handleAlertClick} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <h1>Pennsylvania Central Wind Band</h1>
                <h2><i>Director Dr. William Kenny</i></h2>
                <img src={OfficialSeal} className='img-fluid' alt='Penn Central Wind Band Official Seal'/>
        </div>
        )
    }
}

export default Homepage