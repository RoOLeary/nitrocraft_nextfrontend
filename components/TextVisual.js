import Link from 'next/link'
import styles from '../styles/TextVisual.module.css';

const TextVisual = ({ content }) => {
   
    const { title, articleBody, image, buttons} = content;
    // console.log(buttons);
    return(
        <section className="b-textImage b-textImage--tint b-textVisual js-equinoxNode t-dark is-visible">
            <div className="b-textImage__imageContainer">
                <figure className="b-textImage__image">
                    <img alt={title} className="b-textImage__imageImg b-textImage__imageImg--background" src={image} />
                </figure>
            </div>

            <div className="o-wrapper">
                <div className="b-textImage__text">
                    <h2 className="b-textImage__heading">{title}</h2>
                    <p  dangerouslySetInnerHTML={{__html: articleBody}} />
                    {buttons && buttons.length > 0 ?
                        Object.entries(buttons).map((btn, i) => {
                            const { linkText, linkUrl } = btn[1];
                            return(
                                <div key={i} className="b-blocks__ctas">
                                    <Link href={`${linkUrl}`}><a className="c-button c-button--inverted">{linkText}</a></Link>
                                </div> 
                            )
                        })
                    : ''}
                </div>
            </div>
        </section>
    )
}

export default TextVisual