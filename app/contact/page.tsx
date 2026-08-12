import { brand } from "@/app/data/brand";
import { Instagram, MessageCircle, Globe, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact | YG Collective",
  description: "Get in touch with YG Collective.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-ink flex flex-col items-center">
      <div className="max-w-3xl px-4 w-full">
        <h1 className="font-display text-5xl md:text-7xl text-bone mb-8 text-center">
          GET IN TOUCH
        </h1>
        <p className="text-center text-bone/60 mb-16 uppercase tracking-widest text-sm">
          Customer Support &bull; Press &bull; Collaborations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direct Contact */}
          <div className="bg-[#0d0d0d] p-10 rounded-2xl border border-bone/5 shadow-2xl">
            <h2 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Direct Line</h2>
            
            <a href={`https://wa.me/${brand.whatsapp.replace('+', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-bone mb-6 hover:text-gold transition-colors">
              <div className="w-12 h-12 rounded-full bg-bone/5 flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="font-bold">WhatsApp</p>
                <p className="text-sm text-bone/50">{brand.whatsapp}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-bone mb-6">
              <div className="w-12 h-12 rounded-full bg-bone/5 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-sm text-bone/50">info@{brand.domain}</p>
              </div>
            </div>
          </div>

          {/* Social & Location */}
          <div className="bg-[#0d0d0d] p-10 rounded-2xl border border-bone/5 shadow-2xl">
             <h2 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Connect</h2>
             
             <a href={`https://instagram.com/${brand.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-bone mb-6 hover:text-gold transition-colors">
              <div className="w-12 h-12 rounded-full bg-bone/5 flex items-center justify-center">
                <Instagram size={20} />
              </div>
              <div>
                <p className="font-bold">Instagram</p>
                <p className="text-sm text-bone/50">{brand.instagram}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-bone mb-6">
              <div className="w-12 h-12 rounded-full bg-bone/5 flex items-center justify-center">
                <MapPin size={20} />
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
