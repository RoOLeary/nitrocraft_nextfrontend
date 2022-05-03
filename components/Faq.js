import React from 'react';
import { useEffect } from 'react';

const Faq = () => { 

    let classNameIsExpanded = 'is-expanded';
    let selectorAnswerInner = '.js-faqAnswerInner';
    let selectorQuestion = '.js-faqQuestion';

    const onQuestionClick = (e) => {
        const question = e.currentTarget
        question.parentNode.classList.toggle(classNameIsExpanded);
    }

    useEffect(() => {
        let answerInners = document.querySelectorAll(selectorAnswerInner);
        let questions = document.querySelectorAll(selectorQuestion)

        answerInners.forEach(answerInner => {
            answerInner.parentElement.style.setProperty('--height', answerInner.offsetHeight + 'px')
        })

        questions.forEach(question => question.addEventListener('click', (e) => onQuestionClick(e)))
    },[]);

    return(
        <section className="b-faq c-section js-faq">
            <div className="o-wrapper">
                <div className="o-grid o-grid--gap-xxl l:o-grid--reverse">
                    <div className="o-grid__col l:o-grid__col--span-4">
                        <div className="c-section__sticky">
                            <h2 className="c-section__heading">ASK ME ANYTHING?</h2>
                            <div className="c-formatted c-section__text">
                                Maybe start with these questions.
                            </div>
                            <div className="c-section__cta">
                                <a className="c-button c-button--primary" href="#">CONTACT</a>
                            </div>
                        </div>
                    </div>
                    <div className="o-grid__col l:o-grid__col--span-8">
                        <ul className="b-faq__list">
                            <li className="b-faq__listItem">
                                <div className="b-faq__question js-faqQuestion" onClick={(e) => onQuestionClick(e)}>YOU AND WHAT ARMY?</div>
                                <div className="b-faq__answer">
                                    <div className="b-faq__answerInner c-formatted js-faqAnswerInner">
                                        Sed sit amet augue gravida, viverra mi vel, maximus libero. Praesent sagittis rutrum libero, sed varius nisi sagittis et. Fusce ac varius neque. Quisque aliquet, felis nec rhoncus aliquet, mi justo faucibus nunc, sed feugiat ipsum magna vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in efficitur felis. Integer sed sem in massa ultricies convallis hendrerit id leo.
                                    </div>
                                </div>
                            </li>

                            <li className="b-faq__listItem">
                                <div className="b-faq__question js-faqQuestion" onClick={(e) => onQuestionClick(e)}>WHAT IS THE MOON?</div>
                                <div className="b-faq__answer">
                                    <div className="b-faq__answerInner c-formatted js-faqAnswerInner">
                                    Sed sit amet augue gravida, viverra mi vel, maximus libero. Praesent sagittis rutrum libero, sed varius nisi sagittis et. Fusce ac varius neque. Quisque aliquet, felis nec rhoncus aliquet, mi justo faucibus nunc, sed feugiat ipsum magna vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in efficitur felis. Integer sed sem in massa ultricies convallis hendrerit id leo.
                                    </div>
                                </div>
                            </li>

                            <li className="b-faq__listItem">
                                <div className="b-faq__question js-faqQuestion" onClick={(e) => onQuestionClick(e)}>WILL I EVER GET A HUG FROM JURGEN KLOPP?</div>
                                <div className="b-faq__answer">
                                    <div className="b-faq__answerInner c-formatted js-faqAnswerInner">
                                        We live in hope! Sed sit amet augue gravida, viverra mi vel, maximus libero. Praesent sagittis rutrum libero, sed varius nisi sagittis et. Fusce ac varius neque. Quisque aliquet, felis nec rhoncus aliquet, mi justo faucibus nunc, sed feugiat ipsum magna vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in efficitur felis. Integer sed sem in massa ultricies convallis hendrerit id leo.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;