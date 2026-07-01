'use client';

import { useState, type FormEvent } from 'react';

// Interim lead-capture store: this is a static-export site (GitHub Pages has
// no server), so submissions are relayed by FormSubmit.co directly to this
// inbox — no account signup or secret token required, which keeps the repo
// secret-free. Replace with a POST to MSC-4's intake API once that store
// exists.
const LEAD_INBOX = 'maisilva@gmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${LEAD_INBOX}`;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill every field, humans never see this one.
    if (String(data.get('_honey') ?? '').length > 0) {
      setStatus('success');
      form.reset();
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (!response.ok) {
        throw new Error(`FormSubmit responded ${response.status}`);
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Lead capture submission failed', error);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New lead — MS Corp Studio site" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="field honeypot-field" aria-hidden="true">
        <label htmlFor="_honey">Leave this field empty</label>
        <input type="text" id="_honey" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required autoComplete="name" />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" />
      </div>

      <div className="field">
        <label htmlFor="company">Company (optional)</label>
        <input type="text" id="company" name="company" autoComplete="organization" />
      </div>

      <div className="field">
        <label htmlFor="message">Tell us about your project</label>
        <textarea id="message" name="message" required />
      </div>

      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send'}
      </button>

      {status === 'success' && (
        <p className="form-status success" role="status">
          Thanks — we&apos;ve got your message and will be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="form-status error" role="alert">
          Something went wrong sending that. Please email us directly at{' '}
          {LEAD_INBOX} instead.
        </p>
      )}
    </form>
  );
}
