import * as React from 'react';
import { SVGProps } from 'react';

export default function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
      <path d="m4 4 11.733 16H20L8.267 4zM4 20l6.768-6.768m2.46-2.46L20 4" />
    </svg>
  );
}
