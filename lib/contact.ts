// Bar's real contact details (from the workshop portfolio data).
const EMAIL = "1barmoshe1@gmail.com";
const PHONE = "+972546561465"; // wa.me wants the international number, no '+'

const WHATSAPP_NUMBER = PHONE.replace(/[^\d]/g, "");

const DEFAULT_WA_TEXT =
  "Hi Bar, reaching out from CHEQ. Let's talk about the AI Engineer role.";
const DEFAULT_MAIL_SUBJECT = "CHEQ x Bar Moshe";
const DEFAULT_MAIL_BODY =
  "Hi Bar,\n\nThanks for the page. I'd like to talk about the AI Engineer role.\n\n";

export const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
  DEFAULT_MAIL_SUBJECT,
)}&body=${encodeURIComponent(DEFAULT_MAIL_BODY)}`;

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_WA_TEXT,
)}`;

export const githubHref = "https://github.com/barmoshe";
export const linkedinHref = "https://www.linkedin.com/in/barmoshe/";
export const cvHref = "/Bar_Moshe_Resume.pdf";
