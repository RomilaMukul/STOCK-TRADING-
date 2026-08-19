import React from 'react';

function Footer() {
    return (
        <footer style={{backgroundColor: '#FBFBFB', borderTop: '1px solid #E5E5E5'}}>
            <div className='container p-5'>
                <div className='row'>
                    {/* Left Section */}
                    <div className='col-4'>
                        <img src='media/images/logo.svg' alt='Zerodha Logo' style={{width: '60%', marginBottom: '20px'}} />
                        <p style={{fontSize: '12px', color: '#666', marginBottom: '20px'}}>
                            © 2010 - 2024, Not Zerodha Broking Ltd.<br />
                            All rights reserved.
                        </p>
                        <div style={{display: 'flex', gap: '15px'}}>
                            <a href='#' style={{color: '#666', textDecoration: 'none'}}>
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href='#' style={{color: '#666', textDecoration: 'none'}}>
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href='#' style={{color: '#666', textDecoration: 'none'}}>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href='#' style={{color: '#666', textDecoration: 'none'}}>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href='#' style={{color: '#666', textDecoration: 'none'}}>
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div className='col-2'>
                        <h6 style={{marginBottom: '15px', fontWeight: 'bold'}}>Company</h6>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>About</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Products</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Pricing</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Referral programme</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Careers</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Zerodha.tech</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Press & media</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Zerodha cares (CSR)</a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className='col-2'>
                        <h6 style={{marginBottom: '15px', fontWeight: 'bold'}}>Support</h6>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Contact</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Support portal</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Z-Connect blog</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>List of charges</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Downloads & resources</a>
                            </li>
                        </ul>
                    </div>

                    {/* Account Column */}
                    <div className='col-2'>
                        <h6 style={{marginBottom: '15px', fontWeight: 'bold'}}>Account</h6>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Open an account</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>Fund transfer</a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href='#' style={{color: '#666', textDecoration: 'none', fontSize: '14px'}}>60 day challenge</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;