import React from 'react';
import Styles from './subscribe.module.sass'

const Subscribe = () => {
    return (
        <section className={Styles.Subscribe}>
            <h2 className={Styles.SubscribeTitle}>Subscribe to our email newsletter</h2>
            <div>
                <input 
                    placeholder="Required Field" 
                    type="text"
                    className={Styles.SubscribeInput}
                />
                <button className={Styles.SubscribeButton}>SEND</button>
            </div>
        </section>
    )
}
export default Subscribe;
