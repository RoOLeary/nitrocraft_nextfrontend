import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

const Faq = ({ content }) => { 

    const { faqHeading, faqLeadtext, faqs } = content;
    console.log(content);

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
                            <h2 className="c-section__heading">{faqHeading ? faqHeading : 'ASK ME ANYTHING?'}</h2>
                            <div className="c-formatted c-section__text">
                                {faqLeadtext ? faqLeadtext : 'We’re here to help you find the answers to your questions.'}
                            </div>
                            <div className="c-section__cta">
                                <Link href={'/contact'}><a className="c-button c-button--primary">CONTACT</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="o-grid__col l:o-grid__col--span-8">
                        <ul className="b-faq__list">
                            {faqs.map((faq, i) => {
                                return(
                                    <li key={i} className="b-faq__listItem">
                                        <div className="b-faq__question js-faqQuestion" onClick={(e) => onQuestionClick(e)}>{faq.question}</div>
                                        <div className="b-faq__answer">
                                            <div className="b-faq__answerInner c-formatted js-faqAnswerInner" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                            
                                        </div>
                                    </li>
                                );
                            }
                        )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;