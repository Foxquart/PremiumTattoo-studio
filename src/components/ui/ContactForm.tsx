'use client';
import React, { useState } from 'react';
import { formFields } from '../../data/dataForm';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('access_key', process.env.NEXT_PUBLIC_ACCESS_KEY || '');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log('Form submitted successfully:', result);
      (event.target as HTMLFormElement).reset();
      setIsSubmitted(true);
    } else {
      console.error('Form submission failed:', result);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-md mx-auto gap-1"
    >
      {formFields.map(field => (
        <React.Fragment key={field.id}>
          <label
            htmlFor={field.id}
            className="font-syne text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1.5 mt-4"
          >
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              name={field.name}
              required={field.required}
              disabled={isSubmitted}
              rows={4}
              className="glass-input rounded-xl px-4 py-3 text-sm font-sans resize-none"
              placeholder="Tell us about your dream tattoo..."
            />
          ) : (
            <input
              id={field.id}
              name={field.name}
              type={field.type}
              required={field.required}
              disabled={isSubmitted}
              className="glass-input rounded-xl px-4 py-3.5 text-sm font-sans"
              placeholder={
                field.type === 'email'
                  ? 'your@email.com'
                  : field.type === 'tel'
                  ? '+1 (555) 000-0000'
                  : 'Your full name'
              }
            />
          )}
        </React.Fragment>
      ))}

      <p className="text-gray-500 mt-3 text-xs font-sans">
        By submitting, you agree to our privacy policy.
      </p>

      <button
        type="submit"
        disabled={isSubmitted}
        className={`mt-6 flex items-center justify-center gap-2.5 font-syne text-sm uppercase tracking-widest font-bold py-4 px-8 rounded-full transition-all duration-300 ${
          isSubmitted
            ? 'bg-green-900/30 text-green-400 border border-green-500/30 cursor-default'
            : 'bg-gradient-to-r from-darkOrange to-amber-600 text-black hover:shadow-glow-orange hover:scale-[1.02]'
        }`}
      >
        {isSubmitted ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Request Sent
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Request
          </>
        )}
      </button>
    </form>
  );
}
