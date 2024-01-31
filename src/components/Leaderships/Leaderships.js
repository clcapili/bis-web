import React from 'react';
import Link from 'next/link';
import { Heading, FeaturedImage } from 'components';
import useFocusFirstNewResult from 'hooks/useFocusFirstNewResult';

/**
 * Renders a list of Project items
 * @param {Props} props The props object.
 * @param {Project[]} props.projects The array of project items.
 * @param {string} props.id The unique id for this component.
 * @param {string} props.emptyText Message to show when there are no projects.
 * @returns {React.ReactElement} The Projects component
 */
function Leaderships({ leaderships, id, emptyText = 'No projects found.' }) {
  const { firstNewResultRef, firstNewResultIndex } =
    useFocusFirstNewResult(leaderships);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section {...(id && { id })}>
      {/* leadership = {id} */}
      {leaderships?.map((leadership, i) => {
        const isFirstNewResult = i === firstNewResultIndex;

        return (
          <div
            className="row"
            key={leadership.id ?? ''}
            id={`leadership-${leadership.id}`}
          >
            <div className="list-item">
              <FeaturedImage
                className="image"
                image={leadership?.featuredImage?.node}
              />
              <div className="content">
                <Heading level="h3">
                  <Link href={leadership?.uri ?? '#'}>
                    <a ref={isFirstNewResult ? firstNewResultRef : null}>
                      {leadership.title()}
                    </a>
                  </Link>
                </Heading>
                <div>{leadership.summary}</div>
              </div>
            </div>
          </div>
        );
      })}
      {leaderships && leaderships?.length < 1 && <p>{emptyText}</p>}
    </section>
  );
}

export default Leaderships;
