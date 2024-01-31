import Link from 'next/link';
import { classNames as cn } from 'utils';

/**
 * Render the Button component.
 *
 * @param {Props} props The props object.
 * @param {string} props.href The href attribute. If provided the button will be an <a> element.
 * @param {primary|secondary} props.styleType The type of the button
 * @param {string} props.className An optional className to be added to the button
 * @return {React.ReactElement} The Button component.
 */
export default function Button({
  href,
  styleType,
  outlineOption,
  block,
  className,
  children,
  ...props
}) {

  let style = styleType ? styleType : 'primary';
  let outline = outlineOption ? 'outline-' : '';

  let buttonStyle = 'btn-' + outline + style;
  let buttonBlock = block ? 'btn-block' : '';

  let classNames = cn([
    'btn',
    buttonStyle,
    buttonBlock,
    className,
  ]);

  if (href) {
    return (
      <Link href={href}>
        <a role="button" href={href} className={classNames} {...props}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
