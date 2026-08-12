import { brand } from "@/app/data/brand";

export const metadata = {
  title: "Contact | YG Collective",
  description: "Get in touch with YG Collective.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-ink">
      <div className="max-w-5xl mx-auto px-4 w-full">
        
        {/* Header */}
        <p className="text-gold text-xs tracking-[0.3em] font-bold uppercase mb-4">
          Reach Out
        </p>
        <h1 className="font-display text-5xl md:text-8xl text-bone mb-16 leading-[0.9]">
          GET IN TOUCH
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Direct Contact */}
          <div className="bg-ink p-8 border-2 border-bone/10">
            <h2 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Direct Line</h2>
            
            <a href={`https://wa.me/${brand.whatsapp.replace('+', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-bone mb-6 hover:text-gold transition-colors">
              <div className="w-12 h-12 border border-bone/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              </div>
              <div>
                <p className="font-bold">WhatsApp</p>
                <p className="text-sm text-bone/50">{brand.whatsapp}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-bone mb-6">
              <div className="w-12 h-12 border border-bone/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-sm text-bone/50">info@{brand.domain}</p>
              </div>
            </div>
          </div>

          {/* Social & Location */}
          <div className="bg-ink p-8 border-2 border-bone/10">
             <h2 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Connect</h2>
             
             <a href={`https://instagram.com/${brand.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-bone mb-6 hover:text-gold transition-colors">
              <div className="w-12 h-12 border border-bone/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <div>
                <p className="font-bold">Instagram</p>
                <p className="text-sm text-bone/50">{brand.instagram}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-bone mb-6">
              <div className="w-12 h-12 border border-bone/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="font-bold">Headquarters</p>
                <p className="text-sm text-bone/50">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

