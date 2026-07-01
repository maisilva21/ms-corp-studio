import type { Metadata } from 'next';
import intakeData from '@/data/intake.json';
import { STAGES, type IntakeRequest } from '@/lib/intake';

export const metadata: Metadata = {
  title: 'Client Intake — MS Corp Studio',
  description: 'Every open client request and its stage, in one place.',
};

const requests = intakeData.requests as IntakeRequest[];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function IntakePage() {
  return (
    <main
      style={{
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '960px',
        margin: '0 auto',
        padding: '2rem 1.5rem 4rem',
      }}
    >
      <p style={{ marginBottom: '0.5rem' }}>
        <a href="./">&larr; MS Corp Studio</a>
      </p>
      <h1 style={{ marginBottom: '0.25rem' }}>Client Intake Tracker</h1>
      <p style={{ color: '#555', marginTop: 0 }}>
        Every open client request and its current stage. Updated by the
        engineer as requests come in and move forward; see the repo README
        for how entries are added.
      </p>

      {requests.length === 0 && (
        <p style={{ marginTop: '2rem', color: '#555' }}>
          No client requests logged yet.
        </p>
      )}

      {STAGES.map(({ key, label }) => {
        const stageRequests = requests
          .filter((r) => r.stage === key)
          .sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );

        return (
          <section key={key} style={{ marginTop: '2rem' }}>
            <h2
              style={{
                borderBottom: '1px solid #ddd',
                paddingBottom: '0.5rem',
              }}
            >
              {label} ({stageRequests.length})
            </h2>

            {stageRequests.length === 0 ? (
              <p style={{ color: '#888', fontStyle: 'italic' }}>
                Nothing in this stage.
              </p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {stageRequests.map((r) => (
                  <li
                    key={r.id}
                    style={{
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      padding: '1rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <strong>{r.clientName}</strong>
                    {r.company ? ` — ${r.company}` : ''}
                    <div style={{ color: '#555', fontSize: '0.9rem' }}>
                      {r.contactEmail} · {r.source === 'lead_form' ? 'Lead form' : 'Manual entry'}
                      {' · '}Logged {formatDate(r.createdAt)}
                      {r.updatedAt !== r.createdAt
                        ? ` · Updated ${formatDate(r.updatedAt)}`
                        : ''}
                    </div>
                    <p style={{ marginBottom: r.notes ? '0.5rem' : 0 }}>
                      {r.summary}
                    </p>
                    {r.notes && (
                      <p style={{ color: '#555', fontSize: '0.9rem', margin: 0 }}>
                        Notes: {r.notes}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </main>
  );
}
