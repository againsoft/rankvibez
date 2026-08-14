type IconProps = { size?: number };

export function LinkedInIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
    </svg>
  );
}

export function FacebookIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.35C16.24 4.32 15.36 4.24 14.33 4.24c-2.15 0-3.63 1.31-3.63 3.72V10.5H8.25v3H10.7V21h2.8Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12s0-3.2-.41-4.75a2.78 2.78 0 0 0-1.96-1.97C18.05 5 12 5 12 5s-6.05 0-7.63.28a2.78 2.78 0 0 0-1.96 1.97C2 8.8 2 12 2 12s0 3.2.41 4.75a2.78 2.78 0 0 0 1.96 1.97C5.95 19 12 19 12 19s6.05 0 7.63-.28a2.78 2.78 0 0 0 1.96-1.97C22 15.2 22 12 22 12Zm-11.75 3.02V8.98L15.5 12l-5.25 3.02Z" />
    </svg>
  );
}

export function XIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 3h4.2l4 5.6L16.9 3H20l-6.4 8.2L20.3 21H16l-4.4-6.1L6.8 21H3.6l6.9-8.7L4 3Z" />
    </svg>
  );
}
