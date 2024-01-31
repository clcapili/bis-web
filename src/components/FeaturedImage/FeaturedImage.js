import Image from 'next/image';
import { classNames as cn } from 'utils';
import { useEffect } from 'react';
import AOS from "aos";

/**
 * A page/post Featured Image component
 * @param {Props} props The props object.
 * @param {string} props.title The post/page title.
 * @param {MediaItem} props.image The post/page image.
 * @param {string|number} props.width The image width.
 * @param {string|number} props.height The image height.
 * @return {React.ReactElement} The FeaturedImage component.
 */
export default function FeaturedImage({
  className,
  image,
  width,
  height,
  ...props
}) {

  useEffect(() => {
    AOS.init({
        once: true,
        duration: 800
    });
    AOS.refresh();
  }, []);

  let src;
  if (image?.sourceUrl instanceof Function) {
    src = image?.sourceUrl();
  } else {
    src = image?.sourceUrl;
  }
  const { altText } = image || '';

  width = width ? width : image?.mediaDetails?.width;
  height = height ? height : image?.mediaDetails?.height;

  return src && width && height ? (
    <figure className={cn(['featured-image', className])} data-aos="zoom-in">
      <Image
        src={src}
        width={width}
        height={height}
        alt={altText}
        {...props}
      />
    </figure>
  ) : null;
}
