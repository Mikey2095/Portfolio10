import { Header } from "../components/Home";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { projectId } from "../utils/supabase/info";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "general",
    message: ""
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-83cff061/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log("Form submitted successfully");
      setSent(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setSent(false);
        setFormData({ name: "", email: "", type: "general", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center">
      <Header />
      <main className="w-full max-w-[1280px] mx-auto px-[20px] md:px-[64px] py-[40px] md:py-[80px]">
        
        <h1 className="font-['Instrument_Sans',sans-serif] text-[40px] md:text-[64px] text-black mb-12 text-center md:text-left">
          Let's Connect
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Module 1: Contact & Hire Info */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h2 className="font-['Instrument_Sans',sans-serif] text-2xl font-semibold">Contact & Availability</h2>
              <p className="font-['Instrument_Sans',sans-serif] text-lg text-gray-600 leading-relaxed">
                I am currently open to freelance projects and full-time opportunities. 
                Whether you have a question, a project proposal, or just want to say hello, feel free to reach out.
              </p>
              
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-4 text-gray-800">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">MATVD.CO@GMAIL.COM</span>
                </div>
                <div className="flex items-center gap-4 text-gray-800">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">602. 585. 6560</span>
                </div>
                <div className="flex items-center gap-4 text-gray-800">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">Phoenix, Arizona</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-['Instrument_Sans',sans-serif] text-xl font-semibold mb-2">Why Hire Me?</h3>
              <p className="text-gray-600">
                Specializing in Design Systems, UX/UI, and 3D Modeling. I bring a structured yet creative approach to solving complex digital problems.
              </p>
            </div>
          </div>

          {/* Module 2: The "Window" (Form) */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-xl">
            <h2 className="font-['Instrument_Sans',sans-serif] text-2xl font-semibold mb-6">Send a Message</h2>
            
            {sent ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Inquiry Type</label>
                  <select 
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="project">Project / Freelance</option>
                    <option value="hiring">Full-time Hiring</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
