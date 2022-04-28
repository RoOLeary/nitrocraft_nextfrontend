import Link from 'next/link'
import styles from '../styles/TextVisual.module.css';

const TextVisual = (props) => {
    const { title, content, image, link, linkText } = props.content;
    
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
                    <p>{content}</p>
                    <div className="b-blocks__ctas">
                        <Link href={`/${link}`}><a className="c-button c-button--inverted">{linkText}</a></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TextVisual