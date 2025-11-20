INSERT INTO job (id, title, description, requirements, created_at)
VALUES (
  '11111111-1111-1111-1111-111111111111',
  'Senior Full-Stack Engineer',
  'We are building a modern ATS with heavy AI integration...',
  '5+ years TypeScript, NestJS, Next.js, experience with LLMs, CQRS architecture, clean code obsession',
  NOW()
)
ON CONFLICT DO NOTHING;