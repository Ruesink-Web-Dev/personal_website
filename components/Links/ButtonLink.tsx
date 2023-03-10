import React, { forwardRef, Ref } from 'react';
import Link, { LinkProps } from 'next/link';
import { Button, ButtonProps } from '@mui/material';

type LinkRef = HTMLButtonElement;
type NextLinkProps = Omit<ButtonProps, 'href'> &
  Pick<LinkProps, 'href' | 'as' | 'prefetch' | 'locale'>;

const LinkButton = (
  { href, as, prefetch, locale, ...props }: NextLinkProps,
  ref: Ref<LinkRef>
) => (
  <Link
    style={{ textDecoration: 'none' }}
    href={href}
    as={as}
    prefetch={prefetch}
    locale={locale}
    passHref
  >
    <Button ref={ref} {...props} />
  </Link>
);

export default forwardRef<LinkRef, NextLinkProps>(LinkButton);
