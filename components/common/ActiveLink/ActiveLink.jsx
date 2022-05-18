//next + react
import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, onClick, ...props }) => {
  const router = useRouter();

  const child = React.Children.only(children);

  let className = child.props.className || '';
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return (
    <NextLink {...props} passHref>
      {React.cloneElement(child, { className, onClick })}
    </NextLink>
  );
};

export default ActiveLink;
