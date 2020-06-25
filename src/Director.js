import React from 'react'
import Headshot from './images/headshot.jpg'

class Director extends React.Component {
    
    componentDidMount(){
        document.title = 'PCWB | Director'
    }

    render(){

        return(
            <div className='director container'>
                <div className='container'>
                    <img className='img-responsive' src={Headshot} alt='William Kenny Headshot' />
                </div>
                <div className='bio container'>
                    <p>
                        Hailing from the small town of Heppner, Oregon, Dr. William Kenny learned about
                        how to be a great dad from his own father, who was a veteran, rancher, and 
                        singer. Although Dr. Kenny claims to not be as good of a singer as his dad, if you
                        ask him nicely, he will perform a rousing rendition of Cold as Ice by Foreigner. 
                    </p>
                    <p>
                        Kenny is a devoted father to three of his own children, and is quick to describe 
                        the middle child, Jacob, as his favorite son, while daughters, Sadie and Grace, 
                        are locked in a dead heat for favorite daughter - although he never plays favorites. 
                    </p>
                    <p>
                        Once described as "A little on the cute side" by a former student on Ratemyprofessor.com, 
                        Kenny is proud to have been able to pass on his good looks to his children, and 
                        hopes that tradition continues for generations to come.  
                    </p>
                    <p>
                        An accomplished horn player, painist, educator, administrator, husband, and father, Kenny serves as a 
                        fantasic role model not only for his biological children, but also for all of his 
                        little band children. 
                    </p>
                </div>
            </div>
        )
    }
}

export default Director