import React from 'react'

function Box4 (props) {

    const baseURL = 'http://NavBuild-env.jc2sppyffu.us-east-1.elasticbeanstalk.com/';

    return (
        
<div className={'navigation-box4'}>
<figure className={'navigation-modalFigure'}>
    <img 
        src={`${baseURL}${props.data}`}
        className={'navigation-modalImage'}
    />
    <figcaption>Professor's Picks <br/> 
        <span className={'navigation-profPick'}>{props.caption}</span>
    </figcaption>
</figure>  
</div>
    )
}

export default Box4;