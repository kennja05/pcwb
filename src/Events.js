import React from 'react'
import StyledTitle from './StyledComponents/StyledTitle'
import StyledHr from './StyledComponents/StyledHr'
class Events extends React.Component {
    
    componentDidMount(){
        document.title = 'PCWB | Events'
    }

    render(){
        return(
            <div className='container-fluid'>
                <StyledTitle text='Upcoming Events' type='h1'/>
                <StyledHr />
                <div className='container'>

                <p>
                    Unfortunately due to the Covid-19 pandemic the PCWB has paused its typical 
                    summer music schedule. The band looks forward to playing again as soon as 
                    possible. Dates will be posted as soon as they are available - Please continue 
                    to check back!
                </p>
                </div>
            </div>
        )
    }
}

export default Events