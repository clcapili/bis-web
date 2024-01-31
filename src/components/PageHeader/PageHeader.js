import { Heading } from 'components';
import { classNames as cn } from 'utils';

/**
 * A Page or Post entry header component
 * @param {Props} props The props object.
 * @param {string} props.title The post/page title.
 * @param {string} props.className An optional className to be added to the PageHeader.
 * @return {React.ReactElement} The PageHeader component.
 */
export default function PageHeader({ title, className }) {
  const pageHeaderClasses = cn(['page-header', className]);

  return (
    <div className={pageHeaderClasses}>
        <div className="container">
            <div className="row">
                <div className="col">
                    {!!title && <Heading level="h1">{title}</Heading>}
                </div>
            </div>
        </div>
    </div>
  );
}
