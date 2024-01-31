import { Heading, Image } from 'components';
import { classNames as cn } from 'utils';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from "aos";
import { Fancybox } from "@fancyapps/ui";

/**
 * Render the Card component.
 * 
 * @param {Props} props The props object.
 * @param {object} props.image
 * @param {string} props.title
 * @param {string} props.description
 * @param {boolean} props.videoLightbox
 * @param {boolean} props.noborder
 * 
 * 
 * @return {React.ReactElement} The Card component.
 */
 export default function Card({ image, title, description, link, videoLightbox, noborder}) {

    /* aos */
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800
        });
        AOS.refresh();
      }, []);

    let classNames = cn([
        'card',
        noborder ? 'card-border-none' : '',
        'text-decoration-none'
    ]);

    let linkUrl = undefined;
    let linkTarget = undefined;
    let linkTitle = undefined;

    if(link && link.url != undefined) {
        linkUrl = link.url;
    }

    if(link && link.target != undefined) {
        linkTarget = link.target;
    }

    if(link && link.title != undefined) {
        linkTitle = link.title;
    }

    /* fancybox */
    Fancybox.bind('[data-fancybox]', {
        groupAttr: null,
        Thumbs: false,
        Toolbar: false,
        closeButton: "top",
        Carousel: {
            Navigation: false
        },
    });

    let props = {}
    if(videoLightbox === true) {
        props['data-fancybox'] = true
    }

    return (
        <div>
            {linkTitle ?
                <div className={classNames}>
                    {!!image &&
                        <Image image={image} alt={image.altText} className="card-img-top" />
                    }
                    <div className="card-body">
                        {!!title &&
                            <Heading className="card-title" level="h3">{title}</Heading>
                        }
                        {!!description &&
                            <p>{description}</p>
                        }
                        {!!linkUrl && 
                            <Link href={linkUrl}>
                                <a {...props} target={linkTarget} className="btn btn-outline-primary">{link.title}</a>
                            </Link>
                        }
                    </div>
                </div>
            :
                <a className={classNames} href={linkUrl} target={linkTarget} {...props}>
                    {!!image &&
                        <Image image={image} alt={image.altText} className="card-img-top" />
                    }
                    <div className="card-body">
                        {!!title &&
                            <Heading className="card-title" level="h3">{title}</Heading>
                        }
                        {!!description &&
                            <p>{description}</p>
                        }
                    </div>
                </a>
            }
        </div>
    );
}
  