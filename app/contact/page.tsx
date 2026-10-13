"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import toast from "react-hot-toast";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import {
  RiMailLine,
  RiGithubLine,
  RiLinkedinLine,
  RiMapPinLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

import Circles from "@/components/Circles";
import {
  CONTACT_RECAPTCHA_ACTION,
  isValidContactEmail,
  isValidContactMessage,
  isValidContactName,
  isValidContactSubject,
  type ContactFormFields,
} from "@/lib/contact";
import { fadeIn } from "@/variants";

const FIELD_VALIDATORS: Record<
  keyof ContactFormFields,
  (value: string) => boolean
> = {
  name: isValidContactName,
  email: isValidContactEmail,
  subject: isValidContactSubject,
  message: isValidContactMessage,
};

const ContactFormContent = ({
  executeRecaptcha,
}: {
  executeRecaptcha?: (action?: string) => Promise<string>;
}) => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const hasAttemptedSubmit = useRef(false);

  const [form, setForm] = useState<ContactFormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    const el = messageRef.current;
    if (!el) return;

    el.style.overflowY = "hidden";
    el.style.height = "auto";

    const nextHeight = el.scrollHeight;
    const maxHeight = Number.parseFloat(getComputedStyle(el).maxHeight);

    if (Number.isFinite(maxHeight) && nextHeight >= maxHeight) {
      el.style.height = `${maxHeight}px`;
      el.style.overflowY = "auto";
      return;
    }

    el.style.height = `${nextHeight}px`;
  }, [form.message]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name as keyof ContactFormFields;
    const value = e.target.value;

    setForm((prev) => ({ ...prev, [field]: value }));

    if (!hasAttemptedSubmit.current) return;

    const isInvalid = !FIELD_VALIDATORS[field](value);
    setFieldErrors((prev) =>
      prev[field] === isInvalid ? prev : { ...prev, [field]: isInvalid },
    );
  };

  const validateForm = () => {
    hasAttemptedSubmit.current = true;

    const nextErrors = {
      name: !isValidContactName(form.name),
      email: !isValidContactEmail(form.email),
      subject: !isValidContactSubject(form.subject),
      message: !isValidContactMessage(form.message),
    };

    setFieldErrors(nextErrors);

    return (
      !nextErrors.name &&
      !nextErrors.email &&
      !nextErrors.subject &&
      !nextErrors.message
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!executeRecaptcha) {
      // Fallback ketika reCAPTCHA belum disetup di environment
      const mailtoUrl = `mailto:muhammad.rizki1303@gmail.com?subject=${encodeURIComponent(
        form.subject,
      )}&body=${encodeURIComponent(
        `Halo Muhammad Rizki,\n\nNama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`,
      )}`;
      window.open(mailtoUrl, "_blank");
      toast.success("Membuka aplikasi email...");
      return;
    }

    setIsLoading(true);

    try {
      const recaptchaToken = await executeRecaptcha(CONTACT_RECAPTCHA_ACTION);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          recaptchaToken,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        // Fallback jika API backend belum dikonfigurasi Resend
        const mailtoUrl = `mailto:muhammad.rizki1303@gmail.com?subject=${encodeURIComponent(
          form.subject,
        )}&body=${encodeURIComponent(
          `Halo Muhammad Rizki,\n\nNama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`,
        )}`;
        window.open(mailtoUrl, "_blank");
        toast.success(
          "Pesan diarahkan ke email: muhammad.rizki1303@gmail.com",
        );
        return;
      }

      toast.success("Terima kasih! Pesan Anda berhasil dikirim.");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFieldErrors({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
    } catch (error) {
      console.error(error);
      const mailtoUrl = `mailto:muhammad.rizki1303@gmail.com?subject=${encodeURIComponent(
        form.subject,
      )}&body=${encodeURIComponent(
        `Halo Muhammad Rizki,\n\nNama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`,
      )}`;
      window.open(mailtoUrl, "_blank");
      toast.success("Membuka aplikasi email...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-col gap-4 w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xs"
      onSubmit={handleSubmit}
      autoComplete="off"
      autoCapitalize="off"
      noValidate
    >
      <div className="mb-2">
        <h3 className="text-xl font-semibold text-white">Kirim Pesan Langsung</h3>
        <p className="text-xs text-white/50 mt-1">
          Isi formulir di bawah ini untuk mengirim pesan langsung kepada saya.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="flex-1 min-w-0">
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            className="input"
            value={form.name}
            onChange={handleChange}
            disabled={isLoading}
            aria-disabled={isLoading}
            maxLength={200}
            aria-invalid={fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-1 text-left text-xs text-accent" role="alert">
              Nama harus diisi minimal 2 karakter
            </p>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <input
            type="email"
            name="email"
            placeholder="Alamat Email"
            className="input"
            value={form.email}
            onChange={handleChange}
            disabled={isLoading}
            aria-disabled={isLoading}
            maxLength={100}
            aria-invalid={fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1 text-left text-xs text-accent" role="alert">
              Format email tidak valid
            </p>
          )}
        </div>
      </div>

      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subjek Pesan"
          className="input"
          value={form.subject}
          onChange={handleChange}
          disabled={isLoading}
          aria-disabled={isLoading}
          maxLength={200}
          aria-invalid={fieldErrors.subject}
          aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
        />
        {fieldErrors.subject && (
          <p id="subject-error" className="mt-1 text-left text-xs text-accent" role="alert">
            Subjek harus diisi minimal 3 karakter
          </p>
        )}
      </div>

      <div>
        <textarea
          ref={messageRef}
          name="message"
          placeholder="Tulis pesan atau pertanyaan Anda di sini..."
          className="textarea"
          rows={4}
          value={form.message}
          onChange={handleChange}
          disabled={isLoading}
          aria-disabled={isLoading}
          maxLength={500}
          aria-invalid={fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-1 text-left text-xs text-accent" role="alert">
            Pesan harus diisi minimal 10 karakter
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          className="btn rounded-full border border-white/50 px-8 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:pointer-events-none w-full sm:w-auto"
          disabled={isLoading}
          aria-disabled={isLoading}
        >
          <span
            className={
              isLoading
                ? ""
                : "group-hover:translate-y-[-120%] group-hover:opacity-0 transition-all duration-500"
            }
          >
            {isLoading ? "Mengirim..." : "Kirim Pesan"}
          </span>

          {!isLoading && (
            <BsArrowRight
              className="translate-y-[-120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[20px]"
              aria-hidden
            />
          )}
        </button>

        <span className="text-[11px] text-white/40 text-center sm:text-right">
          Atau hubungi langsung melalui email / sosial media
        </span>
      </div>
    </motion.form>
  );
};

const ContactFormWithRecaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  return <ContactFormContent executeRecaptcha={executeRecaptcha} />;
};

const Contact = () => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const contactList = [
    {
      name: "Email",
      value: "muhammad.rizki1303@gmail.com",
      link: "mailto:muhammad.rizki1303@gmail.com",
      Icon: RiMailLine,
      label: "Kirim Email Langsung",
    },
    {
      name: "GitHub",
      value: "github.com/MuhammadRizki1303",
      link: "https://github.com/MuhammadRizki1303",
      Icon: RiGithubLine,
      label: "Lihat Repositori & Proyek",
    },
    {
      name: "LinkedIn",
      value: "muhammadrizki130304",
      link: "https://www.linkedin.com/in/muhammadrizki130304",
      Icon: RiLinkedinLine,
      label: "Koneksi Profesional",
    },
  ];

  return (
    <div className="page-scroll min-h-screen bg-primary/30 py-24 xl:py-36 pb-24 xl:pb-0">
      <Circles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-start max-w-6xl mx-auto">
          {/* Kolom Kiri: Informasi Kontak */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col justify-center text-center xl:text-left"
          >
            <h2 className="text-[30px] md:text-[42px] font-semibold leading-tight mb-4">
              Mari <span className="text-accent">terhubung.</span>
            </h2>

            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto xl:mx-0">
              Tertarik untuk berkolaborasi, mendiskusikan peluang proyek, atau
              memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui
              informasi kontak di bawah ini atau melalui formulir pesan.
            </p>

            {/* Daftar Kontak Langsung */}
            <div className="space-y-4 mb-8">
              {contactList.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 rounded-xl transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-x-4 min-w-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <item.Icon />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-white/50">{item.name}</div>
                      <div className="text-sm md:text-base font-medium text-white truncate group-hover:text-accent transition-colors duration-300">
                        {item.value}
                      </div>
                      <div className="text-[11px] text-white/40">{item.label}</div>
                    </div>
                  </div>
                  <BsArrowUpRight className="text-white/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-lg shrink-0 ml-2" />
                </Link>
              ))}
            </div>

            {/* Status & Lokasi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-x-3 p-3.5 bg-white/5 border border-white/10 rounded-xl">
                <RiCheckboxCircleLine className="text-accent text-xl shrink-0" />
                <div className="text-xs">
                  <span className="text-white/50 block">Status:</span>
                  <span className="text-white font-medium">Terbuka untuk Peluang</span>
                </div>
              </div>
              <div className="flex items-center gap-x-3 p-3.5 bg-white/5 border border-white/10 rounded-xl">
                <RiMapPinLine className="text-accent text-xl shrink-0" />
                <div className="text-xs">
                  <span className="text-white/50 block">Lokasi:</span>
                  <span className="text-white font-medium">Indonesia</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Formulir Kontak */}
          <div className="w-full">
            {siteKey ? (
              <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
                <ContactFormWithRecaptcha />
              </GoogleReCaptchaProvider>
            ) : (
              <ContactFormContent />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
