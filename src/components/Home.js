import React from 'react';

const Home = () => {

    let imgStyle = {
        marginTop: 50,
        width: 400,
        textAlign: 'center'
    };

    return(
        <img style={imgStyle} src={'/assets/codelife.png'} />
    );
};

export default Home;