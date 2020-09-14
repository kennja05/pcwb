import React from 'react'
import StyledHr from './StyledComponents/StyledHr'
class Events extends React.Component {
    
    componentDidMount(){
        document.title = 'PCWB | Events'
    }

    render(){
        return(
            <div className='container-fluid'>
                <h1>Upcoming Events</h1>
                <StyledHr />
                <p>
                    Unfortunately due to the Covid-19 pandemic the PCWB has paused its typical 
                    summer music schedule. The band looks forward to playing again as soon as 
                    possible. Dates will be posted as soon as they are available - Please continue 
                    to check back!
                </p>
            </div>
        )
    }
}

export default Events