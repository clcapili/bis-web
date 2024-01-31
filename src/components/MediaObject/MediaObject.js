import { Heading, Image } from 'components';

/**
 * Render the MediaObject component.
 * 
 * @param {Props} props The props object.
 * @param {string} props.title
 * @param {string} props.description
 * @param {object} props.image
 * 
 * 
 * @return {React.ReactElement} The MediaObject component.
 */
 export default function MediaObject({ title, description, image }) {

    return (
        <div className="mb-5">
            <div className="row">
                <div className="col-md-6">
                    {!!title &&
                        <Heading level="h2">{title}</Heading>
                    }
                    {!!description &&
                        <div dangerouslySetInnerHTML={{__html: description}}></div>
                    }
                </div>
                <div className="col-md-6">
                    {!!image && 
                        <Image image={image} alt={image.altText} />
                    }
                </div>
            </div>
        </div>
    );

}
  