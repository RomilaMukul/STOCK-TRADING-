import React from 'react';

function Pricing() {
    return (
         <div className='container p-5 mb-5'>
            <div className='row'>
                <div className='col-4 p-5'>
                    <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and pricingtransparency in India . Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}> See our pricing <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div className='col-2 p-5'>

                </div>
                <div className='col-6 p-5'>
                    <div className='row'>
                        <div className='col-6 border p-4'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i> 0</h1>
                            <p>Free equity delivery and <br></br>direct mutual funds</p>
                        </div>

                        <div className='col-6 border p-4'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i> 20</h1>
                            <p>Intraday  and F&O</p>
                         </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Pricing;