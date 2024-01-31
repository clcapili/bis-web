import { Heading } from 'components';

/**
 * Render the PageVideo component.
 * @param {Props} props The props object.
 * @param {string} props.title
 * @param {string} props.video
 * 
 * 
 * @return {React.ReactElement} The PageVideo component.
 */
 export default function PageVideo({ title, video }) {
    return (
        <section className="page-video">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        {!!title &&
                            <div className="mb-3">
                                <Heading level="h2">{title}</Heading>
                            </div>
                        }
                    </div>
                    {!!video &&
                        <div className="col-12">
                            <div className="card" dangerouslySetInnerHTML={{__html: video}}></div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );

}
  