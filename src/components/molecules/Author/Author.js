import React from 'react';
import Menu from 'components/atoms/Menu'
import SubTitle from 'components/atoms/SubTitle'
import Styles from './author.module.sass'
import AuthorImg from 'assets/author.PNG'

const Author = () => {
    return (
        <section className={Styles.Author}>
            <Menu />
            <section className={Styles.AuthorSection}>
                <img className={Styles.AuthorImg} src={AuthorImg} alt="author Img"/>
                <article className={Styles.AuthorArticle}>
                    <SubTitle />
                    <p className={Styles.AuthorParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation 
                        ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum. 
                    </p>
                        
                    <p className={Styles.AuthorParagraph}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium poeyi doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae apsb illo inventore veritatis et quasi architecto beiatae vitae 
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
                        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, seprid quia non numquam eius 
                        modi tempora incidunt ut labore et dolore magnam aliqueam quaerat voluptatem.
                    </p>
                </article>
            </section>
        </section>
    )
}
export default Author;
