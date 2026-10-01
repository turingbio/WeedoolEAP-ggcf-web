'use client';

import { trackEvent } from '@/lib/analytics';
import type { TrackedEvent } from '@/lib/analytics';

type TrackedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: TrackedEvent;
};

export function TrackedLink({ event, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        trackEvent(...event);
        onClick?.(clickEvent);
      }}
    />
  );
}
