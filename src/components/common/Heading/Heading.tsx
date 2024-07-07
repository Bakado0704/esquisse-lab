import { createElement } from 'react';

import type { HeadingProps } from './Heading.types';

const Heading = ({
  children,
  className,
  headingLevel = 'h1',
  ...styleProps
}: HeadingProps) => {
  return createElement(
    headingLevel,
    { className, style: { ...styleProps } },
    children,
  );
};

export default Heading;
