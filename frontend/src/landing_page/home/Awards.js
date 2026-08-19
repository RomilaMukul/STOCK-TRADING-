import React from 'react';

function Awards() {
    return (
       <div className='container p-5 mb-5'>
            <div className='row text-center'>
                {/*total columns in a row must always be 12*/}
                <div className='col-6  p-5'>
                    <img src='media/images/largestBroker.svg' ></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                <h1>Largest stock brocker in India</h1>
                <p classname='mb-5' >2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className='row'>
                    <div  className='col-6 p-5'>
                    <ul>
                        <li>Future and Options</li>
                          <li>Commodity Derivatives</li>
                            <li>Currency Derivatives</li>
                    </ul>
                </div>

                  <div  className='col-6 p-5'>
                    <ul>
                        <li>Stocks & IPOs</li>
                          <li>Direct Mutual Funds</li>
                            <li>Bonds and Government Securities</li>
                    </ul>
                </div>
                <img src='media/images/pressLogos.png' alt='Press Logos' style={{width: "90%"}} />
                </div>
                
                </div>
            </div>
       </div>
    );
}

export default Awards;