import { default as NextImage } from 'next/image';
import { classNames as cn } from 'utils';

/**
 * 
 * @param {Props} props The props object.
 * @param {string} props.title The post/page title.
 * @param {MediaItem} props.image The post/page image.
 * @param {string|number} props.width The image width.
 * @param {string|number} props.height The image height.
 * @return {React.ReactElement} The Wordpress Image component.
 */
export default function Image({
  className,
  image,
  width,
  height,
  ...props
}) {

  const classNames = cn([
    className
  ]);

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
    <NextImage
      src={src}
      width={width}
      height={height}
      alt={altText}
      className={classNames}
      {...props}
    />
  ) : null;

}
