import { useState, useEffect } from 'react';
import Section from '../components/Section';
import { useForm, ValidationError } from '@formspree/react';

const initial = {
  name: '', company: '', phone: '', email: '', equipment: '', message: ''
};

export default function Contact() {
  const [form, setForm] = useState(initial);

  // Formspree hook
  const [state, handleSubmitFormspree] = useForm("xvgbrkwe");

  // Reset form on successful submission
  useEffect(() => {
    if (state.succeeded) {
      setForm(initial);
    }
  }, [state.succeeded]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleSubmitFormspree(e);
  }

  return (
    <Section>
      <h1 className="h1">Contact Us</h1>
      <p className="muted mt-3">Tell us what you need and we’ll get back within 1 business day.</p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="md:col-span-1">
          <label className="text-l font-medium">Name</label>
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            required 
            className="mt-1 w-full rounded-xl2 border border-slate-300 p-3 outline-brand-primary" 
          />
          <ValidationError field="name" errors={state.errors} />
        </div>

        <div className="md:col-span-1">
          <label className="text-l font-medium">Company</label>
          <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-xl2 border border-slate-300 p-3 outline-brand-primary" />
          <ValidationError field="company" errors={state.errors} />
        </div>

        <div className="md:col-span-1">
          <label className="text-l font-medium">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-xl2 border border-slate-300 p-3 outline-brand-primary" />
          <ValidationError field="phone" errors={state.errors} />
        </div>

        <div className="md:col-span-1">
          <label className="text-l font-medium">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-xl2 border border-slate-300 p-3 outline-brand-primary" />
          <ValidationError field="email" errors={state.errors} />
        </div>

        <div className="md:col-span-2">
          <label className="text-l font-medium">Equipment Needed</label>
          <input name="equipment" value={form.equipment} onChange={handleChange} placeholder="e.g. 5x Excavators, 2x 500kVA Generators" className="mt-1 w-full rounded-xl2 border border-slate-300 p-3 outline-brand-primary" />
          <ValidationError field="equipment" errors={state.errors} />
        </div>

        <div className="md:col-span-2">
          <label className="text-l font-medium">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="mt-1 w-full rounded-xl2 border border-slate-300 p-3 outline-brand-primary" />
          <ValidationError field="message" errors={state.errors} />
        </div>

        <div className="md:col-span-2">
          <button type="submit" disabled={state.submitting} className="btn btn-primary">
            Send Message
          </button>
          {state.succeeded && <span className="ml-3 text-l text-green-700">Thanks! We’ll be in touch.</span>}
        </div>
      </form>
    </Section>
  );
}
