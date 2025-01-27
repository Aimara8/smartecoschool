import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-button.png'
import back_icon from '../../assets/back-button.png'
import user_1 from '../../assets/user1.jpg'
import user_2 from '../../assets/user2.jpg'
import user_3 from '../../assets/user3.jpg'
import user_4 from '../../assets/user1.jpg'
import { useRef } from 'react'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>

            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />

            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ratione, cupiditate reprehenderit nam iure doloribus totam deserunt cumque saepe et sit dicta voluptatum rerum quos itaque velit atque excepturi omnis.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ratione, cupiditate reprehenderit nam iure doloribus totam deserunt cumque saepe et sit dicta voluptatum rerum quos itaque velit atque excepturi omnis.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ratione, cupiditate reprehenderit nam iure doloribus totam deserunt cumque saepe et sit dicta voluptatum rerum quos itaque velit atque excepturi omnis.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ratione, cupiditate reprehenderit nam iure doloribus totam deserunt cumque saepe et sit dicta voluptatum rerum quos itaque velit atque excepturi omnis.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials