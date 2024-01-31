import { classNames as cn } from 'utils';

/**
 * A Page or Post entry header component
 * @param {Props} props The props object.
 * @param {string} props.excerpt The post/page title.
 * @param {string} props.className An optional className to be added to the PageExcerpt.
 * @return {React.ReactElement} The PageExcerpt component.
 */
export default function PageExcerpt({ excerpt, className }) {
  const pageExcerptClasses = cn(['page-excerpt', className]);

  return (
    <div className={pageExcerptClasses}>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {!!excerpt &&
                        <div className="lead fw-light" dangerouslySetInnerHTML={{__html: excerpt}}></div>
                    }
                </div>
            </div>
        </div>
    </div>
  );
}
