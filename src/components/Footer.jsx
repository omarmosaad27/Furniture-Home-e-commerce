import React from 'react'
import {BsFacebook,BsPinterest} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
const Footer = () => {
    return (
        <footer>
            <ul className='footer-items'>
                <li>
                    <p>Furniture Home</p>
                    <ul>
                        <li>
                            our story
                        </li>
                        <li>
                            style guide
                        </li>
                        <li>
                            showrooms
                        </li>
                        <li>
                            careers
                        </li>
                    </ul>
                </li>
                <li>
                    <p>categories</p>
                    <ul>
                        <li>
                            bedrooms
                        </li>
                        <li>
                            dining rooms
                        </li>
                        <li>
                            living rooms
                        </li>
                        <li>
                            offices
                        </li>
                        <li>
                            other
                        </li>
                    </ul>
                </li>
                <li>
                    <p>customer care</p>
                    <ul>
                        <li>
                            contact us
                        </li>
                        <li>
                            terms and conditions
                        </li>
                        <li>
                            policies
                        </li>
                    </ul>
                </li>
                <li className='subcribe'>
                    <p>subscribe to our newsletter</p>
                    <ul>
                        <li className='form'>
                            <input type="email" placeholder='Email' />
                            <button className="sub">subcribe</button>
                        </li>
                        <li className='social'>
                            <p>follow us</p>
                            <FiInstagram />
                            <BsFacebook />
                            <BsPinterest/>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="copy-rights">
                &copy; 2022 Furniture Home All rights reserved
            </div>
        </footer>
    )
}

export default Footer