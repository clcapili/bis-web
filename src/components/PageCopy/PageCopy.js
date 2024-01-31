import { Heading } from 'components';

/**
 * Render the PageCopy component.
 * @param {Props} props The props object.
 * @param {string} props.title
 * @param {string} props.description
 * 
 * 
 * @return {React.ReactElement} The PageCopy component.
 */
 export default function PageCopy({ title, description}) {
    return (
        <section className="page-copy">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {!!title &&
                            <div className="mb-3">
                                <Heading level="h2">{title}</Heading>
                            </div>
                        }
                        {!!description && 
                            <div className="lead fw-light" dangerouslySetInnerHTML={{__html: description}}></div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );

}
  