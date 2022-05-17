import Hero from './Hero';
import TextBlock from './TextBlock';
import Slider from './Slider';
import Faq from './Faq';


const PageBlocks = ({ content }) => {   

    const pageBlocks = Array.from(content);
    const pageBlocksList = pageBlocks.map((block, i) => {
        switch(block.__typename) {
            case 'pageBlocks_hero_BlockType':
                return <Hero key={block.uid} content={block} />
            case 'pageBlocks_text_BlockType':
                return <TextBlock key={block.uid} content={block} />
            case 'pageBlocks_textVisual_BlockType':
                    return <TextVisual key={block.uid} content={block} />
            case 'pageBlocks_imageSlider_BlockType':
                console.log('slider');
                return <Slider key={block.uid} content={block} />
            case 'pageBlocks_faq_BlockType':
                return <Faq key={block.uid} content={block} />
            default:
                return(
                    <div key={i}>
                        <h3>{block.__typename}</h3>
                        <pre>{JSON.stringify(block, null, 2)}</pre>
                    </div>
                )
        }
    })

    return pageBlocksList;
} 

export default PageBlocks; 