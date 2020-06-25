import React from 'react'
import Posters from './Posters'

class Media extends React.Component {
    
    componentDidMount(){
        document.title = 'PCWB | Media'
    }

    render(){
        return(
            <Posters />
        )
    }
}

export default Media