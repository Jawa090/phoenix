import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, Upload, Loader2 } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import commercialBuilding from "@/assets/commercial-building.jpg";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";
import { submitToGoogleSheet } from "@/lib/google-sheets";
import { GOOGLE_SCRIPT_URL } from "@/lib/constants";

const ContactPage = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        zipCode: "",
        message: "",
    });
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            if (selectedFile.type === "application/pdf") {
                setFile(selectedFile);
                toast({
                    title: "File uploaded successfully",
                    description: selectedFile.name,
                });
            } else {
                toast({
                    title: "Invalid file type",
                    description: "Please upload a PDF file",
                    variant: "destructive",
                });
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Submit to Google Sheets
        const success = await submitToGoogleSheet(formData, file, GOOGLE_SCRIPT_URL);

        if (!success) {
            toast({
                title: "Submission failed",
                description: "Please check your internet connection and try again.",
                variant: "destructive",
            });
            setIsLoading(false);
            return;
        }

        // Trigger confetti animation
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        }

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);

        toast({
            title: "Estimation sent successfully",
            description: "We'll get back to you within 24 hours with your estimate.",
        });
        setFormData({ name: "", email: "", phone: "", zipCode: "", message: "" });
        setFile(null);
        setIsLoading(false);
    };
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-hero">
                <div className="absolute inset-0 bg-secondary/90 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
                    style={{ backgroundImage: `url(${servicesHero})` }}
                />

                {/* Decorative Elements */}
                <div className="absolute inset-0 z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center">
                    <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block animate-fade-up">
                        We're Here To Help
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-up delay-100">
                        CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">US</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-up delay-200">
                        If you too are looking for the best solution for your estimation cost services, Phoenix construction estimating services is the answer for you. Call us today or book a meeting and start winning more projects!

                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section id="contact" className="py-16 pb-24 md:pb-16 bg-background relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left Side: Contact Info & Map (Compacted) */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                                    Get In Touch
                                </h2>
                                <p className="text-muted-foreground text-base leading-relaxed">
                                    Whether you have a question about our services, pricing, or need a custom estimate, our team is ready to answer all your questions.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors group">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                                        <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                                    </div>
                                    <h3 className="font-bold text-base mb-1">Phone</h3>
                                    <p className="text-muted-foreground text-xs mb-1">Mon-Fri from 8am to 6pm</p>
                                    <a href="tel:+12128122993" className="text-primary font-semibold hover:underline text-sm">(212) 812-2993</a>
                                </div>

                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors group">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                                    </div>
                                    <h3 className="font-bold text-base mb-1">Email</h3>
                                    <p className="text-muted-foreground text-xs mb-1">Our friendly team is here to help.</p>
                                    <a href="mailto:info@phoenixestimating.com" className="text-primary font-semibold hover:underline truncate block text-sm">info@phoenixestimating.com</a>
                                </div>

                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors group sm:col-span-2">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                            <MapPin className="w-5 h-5 text-primary group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base mb-1">Office Location</h3>
                                            <p className="text-muted-foreground mb-0.5 text-sm">1655 E University Dr, Tempe, Arizona, 85288, USA</p>
                                            <p className="text-muted-foreground text-xs">Serving clients nationwide across the United States.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Container (Compacted) */}
                            <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[250px] relative bg-muted">
                                <iframe
                                    src="https://maps.google.com/maps?q=1655%20E%20University%20Dr%2C%20Tempe%2C%20Arizona%2C%2085288%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right Side: Form (Compacted) */}
                        <div className="relative">
                            <div className="bg-white rounded-[2rem] shadow-2xl p-6 lg:p-8 border border-t-[6px] border-t-primary relative">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-[#1e2b4d] mb-1">Send us a Message</h3>
                                    <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you shortly.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#1e2b4d] uppercase">Name</label>
                                            <Input
                                                name="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="bg-gray-50 border-gray-200 h-10 focus:ring-primary focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#1e2b4d] uppercase">Phone</label>
                                            <Input
                                                name="phone"
                                                placeholder="(123) 456-7890"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="bg-gray-50 border-gray-200 h-10 focus:ring-primary focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#1e2b4d] uppercase">Email</label>
                                            <Input
                                                name="email"
                                                placeholder="john@example.com"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="bg-gray-50 border-gray-200 h-10 focus:ring-primary focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#1e2b4d] uppercase">ZIP Code</label>
                                            <Input
                                                name="zipCode"
                                                placeholder="85001"
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                                className="bg-gray-50 border-gray-200 h-10 focus:ring-primary focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#1e2b4d] uppercase">Project Details</label>
                                        <Textarea
                                            name="message"
                                            placeholder="Tell us about your project..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="bg-gray-50 border-gray-200 min-h-[120px] resize-none focus:ring-primary focus:border-primary"
                                        />
                                    </div>

                                    {/* File Upload */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#1e2b4d] uppercase">
                                            Upload Plans (Optional)
                                        </label>
                                        <div
                                            className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer group relative bg-gray-50"
                                            onClick={() => document.getElementById('contact-page-file-upload')?.click()}
                                        >
                                            <input
                                                type="file"
                                                id="contact-page-file-upload"
                                                className="hidden"
                                                accept=".pdf"
                                                onChange={handleFileChange}
                                            />
                                            <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1 group-hover:text-primary transition-colors" />
                                            <p className="text-muted-foreground text-xs">
                                                {file ? (
                                                    <span className="text-primary font-medium">{file.name}</span>
                                                ) : (
                                                    <>Drop files or <span className="text-primary font-medium">browse</span> (PDF only)</>
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    <Button className="w-full h-12 text-base font-bold bg-[#1e2b4d] hover:bg-[#1e2b4d]/90 shadow-lg mt-2 group" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Get Estimation Now
                                                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>

                            {/* Floating Elements behind form */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations / Services Section (Reference Design) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="relative border-4 border-[#1e2b4d] rounded-3xl bg-white max-w-6xl mx-auto shadow-2xl">
                        <div className="grid lg:grid-cols-2">
                            {/* Left Content */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2b4d] mb-8 leading-tight">
                                    From Where Can You Contact Us <br />
                                    And Have Our Services!!!
                                </h2>

                                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                    <div className="h-1 w-24 bg-[#1e2b4d] mb-6"></div>
                                    <p>
                                        Construction estimating service Phoenix's main focus is Phoenix, AZ. But in addition to our estimating and takeoff services in the city, we also provide our services to its outskirts and nationwide. You can contact us to ask anything related to our services and once you are satisfied with us, you can order for them.
                                    </p>
                                    <p className="font-medium text-[#1e2b4d]">
                                        Do not waste around, reach us at any of the given options to enquire and have our highly apt and practical services!
                                    </p>
                                </div>
                            </div>

                            {/* Right Image Overlay */}
                            <div className="relative h-[400px] lg:h-auto lg:min-h-[500px] lg:translate-y-8 lg:translate-x-8 lg:-mb-8 lg:-mr-8">
                                <div className="absolute inset-0 bg-[#1e2b4d] transform translate-x-4 translate-y-4 rounded-3xl lg:hidden"></div>
                                <img
                                    src={commercialBuilding}
                                    alt="Commercial Construction Building"
                                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl lg:shadow-none border-4 border-white lg:border-none"
                                />
                                {/* Overlay Shadow for Desktop */}
                                <div className="hidden lg:block absolute inset-0 rounded-3xl shadow-[20px_20px_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
