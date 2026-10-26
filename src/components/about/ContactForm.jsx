"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import Button from "@/components/ui/Button";

const initial = { name: "", email: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = "নামটা লিখুন।";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "সঠিক ইমেইল দিন।";
  if (values.message.trim().length < 10) errors.message = "অন্তত ১০ অক্ষরের একটা বার্তা লিখুন।";
  return errors;
};

const inputClass = "w-full border-b-2 border-dotted bg-white/60 px-3 font-hand text-[18px] text-ink-blue outline-none placeholder:font-body placeholder:text-[15px] placeholder:text-ink-3 focus:border-solid focus:border-ink-blue";

const ContactForm = () => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (field) => (event) => setValues({ ...values, [field]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setStatus("sending");
    // TODO: replace with POST to the contact API once the backend exists
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("demo");
    setValues(initial);
  };

  const fieldBorder = (field) => (errors[field] ? "border-brick" : "border-ink-blue/40");

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="sr-only">নাম</label>
          <input id="contact-name" value={values.name} onChange={update("name")} placeholder="নাম" aria-invalid={Boolean(errors.name)} aria-describedby="contact-name-error" className={`${inputClass} h-12 ${fieldBorder("name")}`} />
          <p id="contact-name-error" className="mt-1 text-sm text-brick">{errors.name}</p>
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">ইমেইল</label>
          <input id="contact-email" type="email" value={values.email} onChange={update("email")} placeholder="ইমেইল" aria-invalid={Boolean(errors.email)} aria-describedby="contact-email-error" className={`${inputClass} h-12 ${fieldBorder("email")}`} />
          <p id="contact-email-error" className="mt-1 text-sm text-brick">{errors.email}</p>
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="sr-only">বার্তা</label>
        <textarea id="contact-message" rows={4} value={values.message} onChange={update("message")} placeholder="আপনার বার্তা লিখুন… কোনো খেলা বাদ পড়েছে? নিজের গল্প বলতে চান?" aria-invalid={Boolean(errors.message)} aria-describedby="contact-message-error" className={`${inputClass} py-3 ${fieldBorder("message")}`} />
        <p id="contact-message-error" className="mt-1 text-sm text-brick">{errors.message}</p>
      </div>
      <Button type="submit" disabled={status === "sending"} className="w-full">
        <Send aria-hidden="true" className="size-4" />
        {status === "sending" ? "পাঠানো হচ্ছে…" : "পাঠান"}
      </Button>
      {status === "demo" && (
        <p role="status" className="border-2 border-dashed border-ink-blue/50 px-4 py-3 text-sm text-ink-blue">
          ডেমো মোড: ফর্মটা ঠিকঠাক কাজ করছে, কিন্তু সার্ভার এখনো যুক্ত হয়নি, তাই বার্তাটা কোথাও পাঠানো হয়নি।
        </p>
      )}
    </form>
  );
};

export default ContactForm;
