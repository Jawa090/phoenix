import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import phoenixSkyline from "@/assets/phoenix_skyline_contact.png";

const ContactPage = () => {
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
                        Have a project in mind? Reach out to our team of experts for a free consultation and quote.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section id="contact" className="py-16 bg-background relative">
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
                                    <a href="tel:+17187196171" className="text-primary font-semibold hover:underline text-sm">(718) 719-6171</a>
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
                                            <p className="text-muted-foreground mb-0.5 text-sm">Phoenix, Arizona</p>
                                            <p className="text-muted-foreground text-xs">Serving clients nationwide across the United States.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Container (Compacted) */}
                            <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[250px] relative bg-muted">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.7865261356!2d-112.20038837500001!3d33.4754774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1709658097123!5m2!1sen!2sus"
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

                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#1e2b4d] uppercase">Name</label>
                                            <Input placeholder="John Doe" className="bg-gray-50 border-gray-200 h-10 focus:ring-primary focus:border-primary" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#1e2b4d] uppercase">Phone</label>
                                            <Input placeholder="(555) 000-0000" type="tel" className="bg-gray-50 border-gray-200 h-10 focus:ring-primary focus:border-primary" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#1e2b4d] uppercase">Email</label>
                                        <Input placeholder="john@example.com" type="email" className="bg-gray-50 border-gray-200 h-10 focus:ring-primary focus:border-primary" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#1e2b4d] uppercase">Project Type</label>
                                        <Input placeholder="Residential, Commercial, etc." className="bg-gray-50 border-gray-200 h-10 focus:ring-primary focus:border-primary" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#1e2b4d] uppercase">Message</label>
                                        <Textarea placeholder="Tell us about your project..." className="bg-gray-50 border-gray-200 min-h-[120px] resize-none focus:ring-primary focus:border-primary" />
                                    </div>

                                    <Button className="w-full h-12 text-base font-bold bg-[#1e2b4d] hover:bg-[#1e2b4d]/90 shadow-lg mt-2">
                                        Send Message
                                        <Send className="w-4 h-4 ml-2" />
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
                                    src={phoenixSkyline}
                                    alt="Phoenix City Skyline"
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
