// Main menu, used by the header and footer.
// `soon` marks sections whose real pages come in a later phase.

export type NavItem = { label: string; href: string; soon?: boolean };

export const mainNav: NavItem[] = [
  { label: 'Our story', href: '/story' },
  { label: 'Learn', href: '/learn' },
  { label: 'Library', href: '/library' },
  { label: 'Feed', href: '/feed' },
  { label: 'Innovation', href: '/innovation', soon: true },
  { label: 'Give', href: '/give', soon: true },
  { label: 'Get involved', href: '/get-involved', soon: true },
];

// Placeholder until we have the Substack publication URL.
export const subscribeHref = '/#newsletter';

export const contactEmail = 'info@pouliosbrothers.com';
