const KEYWORDS = [
  ['Full Stack Developer', 'AI Enthusiast', 'Computer Science Enthusiast'],
  [
    'Drizzle',
    'Prisma',
    'Tensorflow',
    'Node.js',
    'React.js',
    'Next.js',
    'Tailwind CSS',
  ],
  ['Vercel', 'Linux', 'NixOS', 'Figma', 'Git/Github'],
];

export function KeywordScroll() {
  return (
    <div className='gs-keyword-scroll-list my-16 w-full overflow-hidden'>
      <div className='gs-keyword-scroll-list text-2xl' aria-hidden='true'>
        {KEYWORDS.map((row, i) => (
          <p
            key={i}
            className='gs-keyword-scroll-list__row inline-block translate-x-[-0.06em] whitespace-nowrap py-3 text-3xl tracking-[-0.03em] transition'
          >
            {row.map((keyword, j) => (
              <span
                key={j}
                className='gs-keyword-scroll-list__keyword text-muted-foreground  before:pr-3 after:inline-block after:h-[0.95em] after:rotate-[15deg] after:border-r after:border-primary after:px-2 after:text-emerald-500/40 after:no-underline'
              >
                {keyword}
              </span>
            ))}
          </p>
        ))}
      </div>
      <span className='sr-only'>
        On scroll animation of three rows of Skills and Areas of Expertise.
      </span>
    </div>
  );
}
