import { Heading } from 'components';
import { classNames as cn } from 'utils';

/**
 * Render the SlideshowText component.
 * 
 * @param {Props} props The props object.
 * @param {string} props.name
 * @param {string} props.message
 * 
 * 
 * @return {React.ReactElement} The SlideshowText component.
 */
 export default function SlideshowText({ name, message, activeSlide }) {
    let slideClassNames = cn([
        'carousel-item text-center my-2', activeSlide
    ]);

    return (
        <div className={slideClassNames}>
            {!!message &&
                <Heading level="h4" className="mb-2">{message}</Heading>
            }
            
            {!!name &&
                <p className="small fw-bold mb-0">{name}</p>
            }
        </div>
    );

}
  