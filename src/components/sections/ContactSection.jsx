import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  AlertCircle,
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

const businessCategories = [
  'Garment & Fashion Store',
  'Restaurant / Café',
  'School / Educational Institution',
  'Furniture Showroom',
  'Jewellery Store',
  'Clinic / Healthcare Business',
  'Retail / Wholesale Business',
  'Service Provider',
  'Other Business',
];

const serviceOptions = [
  'Business Website Development',
  'E-commerce Website Development',
  'Custom Web Applications',
  'AI Integration and Automation',
  'Website Redesign',
  'Website Maintenance and Support',
];

const budgetOptions = [
  'Starter Website (Around ₹4,999)',
  'Business Website (Around ₹8,999)',
  'Premium Website (Around ₹14,999)',
  'E-commerce Website (Starting at ₹19,999)',
  'Custom Web Application / AI Solution',
];

const initialForm = {
  name: '',
  businessName: '',
  phone: '',
  email: '',
  businessCategory: '',
  requiredService: '',
  projectBudget: '',
  projectDescription: '',
};

export default function ContactSection() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  // Pre-fill service or budget if navigated from Services/Pricing cards
  useEffect(() => {
    const preService = searchParams.get('service');
    const preBudget = searchParams.get('budget');
    if (preService || preBudget) {
      setForm((prev) => ({
        ...prev,
        requiredService: preService && serviceOptions.includes(preService) ? preService : prev.requiredService,
        projectBudget: preBudget && budgetOptions.includes(preBudget) ? preBudget : prev.projectBudget,
      }));
    }
  }, [searchParams]);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!form.businessName.trim()) {
      nextErrors.businessName = 'Please enter your business or organization name.';
    }
    const cleanPhone = form.phone.replace(/[\s\-+()]/g, '');
    if (!cleanPhone || cleanPhone.length < 10 || cleanPhone.length > 15 || !/^\d+$/.test(cleanPhone)) {
      nextErrors.phone = 'Please enter a valid 10–15 digit phone number.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.businessCategory) {
      nextErrors.businessCategory = 'Please select your business category.';
    }
    if (!form.requiredService) {
      nextErrors.requiredService = 'Please select the required service.';
    }
    if (!form.projectBudget) {
      nextErrors.projectBudget = 'Please select an estimated project budget.';
    }
    if (!form.projectDescription.trim() || form.projectDescription.trim().length < 15) {
      nextErrors.projectDescription = 'Please share a brief description (at least 15 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const buildWhatsAppLink = () => {
    const text = [
      `Hello ${siteConfig.brandName}, I would like to start a project enquiry:`,
      form.name ? `• Name: ${form.name}` : null,
      form.businessName ? `• Business: ${form.businessName}` : null,
      form.businessCategory ? `• Category: ${form.businessCategory}` : null,
      form.requiredService ? `• Service: ${form.requiredService}` : null,
      form.projectBudget ? `• Estimated Budget: ${form.projectBudget}` : null,
      form.projectDescription ? `• Details: ${form.projectDescription}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Real backend integration if siteConfig.formEndpoint is configured
    if (siteConfig.formEndpoint) {
      try {
        setStatus({ type: 'submitting', message: 'Sending your enquiry...' });
        const response = await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!response.ok) throw new Error('Submission failed');
        setStatus({
          type: 'success',
          message: 'Thank you! Your project enquiry has been submitted successfully.',
        });
        setForm(initialForm);
      } catch {
        setStatus({
          type: 'error',
          message: 'Unable to reach the form server right now. Please use the WhatsApp button below.',
        });
      }
      return;
    }

    // Clearly separated Frontend Demonstration Mode when no backend endpoint is attached yet
    setStatus({
      type: 'demo-success',
      message:
        'Frontend Demo Mode: Form validation passed! To send this enquiry live right now, click "Send via WhatsApp" below (or connect your backend/Formspree URL in src/config/siteConfig.js).',
    });
  };

  const inputClass = (field) =>
    `mt-1.5 w-full rounded-xl border bg-midnight/85 px-4 py-3 text-sm text-snow placeholder:text-softgrey/60 focus:outline-none focus:ring-2 focus:ring-electric ${
      errors[field] ? 'border-rose-400/70' : 'border-snow/15 hover:border-snow/30'
    }`;

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Start Your Project"
          title="Let's Build Something Extraordinary."
          description="Share your business requirements below or reach out directly via WhatsApp. We will review your goals and propose a clear, transparent path forward."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Left info panel */}
          <div className="space-y-6 lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-snow">Direct Contact Details</h3>
              <p className="mt-2 text-sm leading-relaxed text-softgrey">
                Placeholder details are shown below until your official phone, email, and WhatsApp
                credentials are updated in <code className="text-electric">src/config/siteConfig.js</code>.
              </p>

              <ul className="mt-6 space-y-4 text-sm text-softgrey">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                  <div>
                    <p className="font-medium text-snow">Service Region</p>
                    <p>{siteConfig.contact.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                  <div>
                    <p className="font-medium text-snow">Phone</p>
                    <a href={siteConfig.contact.phoneHref} className="transition hover:text-electric">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                  <div>
                    <p className="font-medium text-snow">Email</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="break-all transition hover:text-electric">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-7 border-t border-snow/10 pt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-softgrey">
                  Prefer Instant Messaging?
                </p>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/35 bg-emerald-500/15 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/25"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-panel rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-snow">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g., Karthik Sundaram"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-xs font-medium text-snow">
                    Business Name *
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    value={form.businessName}
                    onChange={handleChange}
                    placeholder="e.g., Sundaram Textiles"
                    className={inputClass('businessName')}
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-xs text-rose-400">{errors.businessName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-snow">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-snow">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@business.com"
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="businessCategory" className="block text-xs font-medium text-snow">
                    Business Category *
                  </label>
                  <select
                    id="businessCategory"
                    name="businessCategory"
                    value={form.businessCategory}
                    onChange={handleChange}
                    className={inputClass('businessCategory')}
                  >
                    <option value="">Select category</option>
                    {businessCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.businessCategory && (
                    <p className="mt-1 text-xs text-rose-400">{errors.businessCategory}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="requiredService" className="block text-xs font-medium text-snow">
                    Required Service *
                  </label>
                  <select
                    id="requiredService"
                    name="requiredService"
                    value={form.requiredService}
                    onChange={handleChange}
                    className={inputClass('requiredService')}
                  >
                    <option value="">Select service</option>
                    {serviceOptions.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                  {errors.requiredService && (
                    <p className="mt-1 text-xs text-rose-400">{errors.requiredService}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="projectBudget" className="block text-xs font-medium text-snow">
                    Estimated Project Budget *
                  </label>
                  <select
                    id="projectBudget"
                    name="projectBudget"
                    value={form.projectBudget}
                    onChange={handleChange}
                    className={inputClass('projectBudget')}
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.projectBudget && (
                    <p className="mt-1 text-xs text-rose-400">{errors.projectBudget}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="projectDescription" className="block text-xs font-medium text-snow">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={form.projectDescription}
                    onChange={handleChange}
                    placeholder="Tell us about your business, pages/features you need, and any goals you have in mind..."
                    className={inputClass('projectDescription')}
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-xs text-rose-400">{errors.projectDescription}</p>
                  )}
                </div>
              </div>

              {status.type !== 'idle' && (
                <div
                  role="status"
                  className={`mt-5 flex items-start gap-3 rounded-xl border p-4 text-xs sm:text-sm ${
                    status.type === 'error'
                      ? 'border-rose-400/40 bg-rose-500/10 text-rose-200'
                      : 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200'
                  }`}
                >
                  {status.type === 'error' ? (
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  )}
                  <div className="space-y-2">
                    <p>{status.message}</p>
                    {status.type === 'demo-success' && (
                      <a
                        href={buildWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-3.5 py-2 text-xs font-semibold text-midnight transition hover:brightness-110"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        Send Enquiry via WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-softgrey">
                  {siteConfig.formEndpoint
                    ? 'Connected to live enquiry endpoint.'
                    : 'Frontend form validation active • Instant WhatsApp handoff supported.'}
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status.type === 'submitting'}
                >
                  <Send className="h-4 w-4" />
                  {status.type === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
