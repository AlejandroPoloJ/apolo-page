import './StatusBadge.css';

const VARIANTS = {
  ok: { code: '200 OK', className: 'status-badge--ok' },
  wip: { code: '102 EN CURSO', className: 'status-badge--wip' },
  archived: { code: '410 ARCHIVADO', className: 'status-badge--archived' },
  rateLimit: { code: '429 TOO MANY REQUESTS', className: 'status-badge--error' },
  serverError: { code: '500 ERROR', className: 'status-badge--error' },
  error: { code: 'ERR_FAILED', className: 'status-badge--error' },
};

export default function StatusBadge({ variant = 'ok' }) {
  const { code, className } = VARIANTS[variant] ?? VARIANTS.error;
  
  return (
    <span className={'status-badge mono ' + className}>
      <span className="status-badge__dot" />
      {code}
    </span>
  );
}