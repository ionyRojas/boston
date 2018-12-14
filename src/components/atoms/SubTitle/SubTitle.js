import React from 'react';
import Styles from './subTitle.module.sass'

const SubTitle = () => {
    return (
        <React.Fragment>
            <h2 className={Styles.SubTitle}>By Shannon Warner</h2>
            <h3 className={Styles.SubTitleText}>The Power of Journaling Together as a Family</h3>
        </React.Fragment>
    )
}
export default SubTitle;
