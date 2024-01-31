import { Heading } from 'components';

/**
 * Render the PageColumnCopy component.
 * @param {Props} props The props object.
 * @param {string} props.title
 * @param {string} props.copy
 * 
 * 
 * @return {React.ReactElement} The PageColumnCopy component.
 */
 export default function PageColumnCopy({ title, texts}) {
    return (
        <section className="page-column-copy">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {!!title &&
                            <div className="mb-2">
                                <Heading level="h2">{title}</Heading>
                            </div>
                        }
                    </div>
                </div>

                {texts ?
                    <div className="row">
                        {texts.map((text, i) => {
                            return (
                                <div className="col-md-6 mb-3" key={i}>
                                    {!!text && 
                                        <div dangerouslySetInnerHTML={{__html: text.text}}></div>
                                    }
                                </div>
                            );
                        })}
                    </div>
                : ''}
            </div>
        </section>
    );

}
  