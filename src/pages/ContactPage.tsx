import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            details: ["(718) 719-6171"],
            link: "tel:+17187196171"
        },
        {
            icon: Mail,
            title: "Email",
            details: ["info@phoenixestimating.com"],
            link: "mailto:info@phoenixestimating.com"
        },
        {
            icon: MapPin,
            title: "Location",
            details: ["Phoenix, Arizona", "United States"],
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 4PM"],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-hero overflow-hidden">
                <div className="absolute inset-0 pattern-diagonal opacity-30" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-6">
                            GET IN <span className="text-primary">TOUCH</span>
                        </h1>
                        <p className="text-xl text-secondary-foreground/80 leading-relaxed">
                            Have a project in mind? We're here to help. Reach out to us and let's discuss how we can support your construction estimating needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <info.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                                <div className="space-y-1">
                                    {info.details.map((detail, idx) => (
                                        info.link ? (
                                            <a
                                                key={idx}
                                                href={info.link}
                                                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                                            >
                                                {detail}
                                            </a>
                                        ) : (
                                            <p key={idx} className="text-muted-foreground text-sm">
                                                {detail}
                                            </p>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <ContactForm />

            {/* Map Section (Optional - Placeholder) */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-display text-3xl text-foreground mb-8 text-center">
                            OUR <span className="text-primary">LOCATION</span>
                        </h2>
                        <div className="bg-card rounded-2xl p-4 border border-border h-96 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                                <p className="text-foreground font-semibold mb-2">Phoenix, Arizona</p>
                                <p className="text-muted-foreground">Serving the Greater Phoenix Area</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Quick Links */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display text-3xl text-foreground mb-6">
                            HAVE <span className="text-primary">QUESTIONS?</span>
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Check out our FAQ section for quick answers to common questions about our services, pricing, and process.
                        </p>
                        <a
                            href="/#faq"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                        >
                            View FAQs
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
