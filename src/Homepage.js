import React from 'react'
import styled, {keyframes} from 'styled-components'
import {fadeInUp} from 'react-animations'
import StyledHr from './StyledComponents/StyledHr'
import StyledTitle from './StyledComponents/StyledTitle'
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
        const fadeUp = keyframes`${fadeInUp}`
        const FadeInBody = styled.div`
            animation 1s ${fadeUp};
        `
        return(
            <div className="container-fluid homepage">
                <div className={this.state.showAlert ? 'alert alert-info alert-dismissible fade show' : 'hide'} role="alert">
                    <strong>There are no upcoming events at this time. Please check back later!</strong>
                    {/* <button onClick={this.handleAlertClick} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button> */}
                </div>
                <StyledTitle text='Penn Central Wind Band' type='h1'/>
                <i><StyledTitle text='William Kenny, Conductor' type='h2'/></i>
                <StyledHr />
                <FadeInBody>

                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <img src={OfficialSeal} id='seal' className='img-responsive' 
                                alt='Penn Central Wind Band Official Seal'/>
                        </div>
                        <div className='col-sm-6 about'>
                            <p>
                                The Penn Central Wind Band is an all-volunteer organization sponsored 
                                by Bucknell University as a service to the region. Many
                                members of the band live in central Pennsylvania, but some travel
                                from far afield to rehearse and perform with the
                                ensemble. Many of the band's members hold music degrees, 
                                and are music teachers and professional performers, athough 
                                all are great players! 
                           </p>
                            <p>
                                The PCWB, founded in 1994, is one of the few select ensembles 
                                to have been awarded the Silver Sudler Scroll, awarded by the John Philip
                                Sousa Foundation "recognizing community and adult concert bands of outstanding 
                                musical excellence." Other honors include invitations to perform for 
                                the conference of the Pennsylvania Music Educators Association and the 
                                national convention of the Association of Concert Bands. William 
                                Kenny, the band's founder and conductor, is professor of 
                                music at Bucknell, where he has taught for the past 30 years.
                            </p>                            
                        </div>
                    </div>
                </div>
                </FadeInBody>
            </div>
        )
    }
}

export default Homepage