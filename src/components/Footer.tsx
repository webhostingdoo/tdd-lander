"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top row: Logo + Address */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Left: Logo + certifications */}
          <div>
            <Image src="/images/logos/amity-logo.png" alt="Tru Dallas Detox" width={250} height={50} quality={80} className="w-[200px] h-auto mb-6" />
            <p className="text-white/50 text-sm mb-2">Licensed and Certified by:</p>
            <p className="text-white/75 text-sm mb-1">The Joint Commission Accredited</p>
            <p className="text-white/75 text-sm mb-4">LegitScript Certified</p>
            <p className="text-white/50 text-sm">
              <span className="text-gold">Adults 18+</span> · All Major Insurance Accepted
            </p>
          </div>
          {/* Right: Address */}
          <a href="https://maps.google.com/?q=2901+Broadway+West+Palm+Beach+FL+33407" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:opacity-80 transition">
            <svg className="text-gold shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <p className="text-white font-semibold text-sm">Tru Dallas Detox</p>
              <p className="text-white/60 text-sm">2901 Broadway</p>
              <p className="text-white/60 text-sm">Dallas, TX</p>
            </div>
          </a>
        </div>

        {/* Certification seals */}
        <div className="flex items-center gap-6 mb-10">
          <Image src="/images/logos/jointcommission.webp" alt="Joint Commission Accredited" width={100} height={100} className="h-16 w-auto opacity-90" />
          <a href="https://www.legitscript.com/websites/?checker_keywords=dallasdetox.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/logos/45265114.png" alt="LegitScript Certified" width={100} height={100} className="h-16 w-auto opacity-90 hover:opacity-100 transition" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <nav className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/accessibility" className="text-white/60 hover:text-white transition-colors">Accessibility</a>
              <a href="/hipaa-disclosure" className="text-white/60 hover:text-white transition-colors">HIPAA Disclosure</a>
            </nav>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/amitypalmbeach/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/amitypalmbeach/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
