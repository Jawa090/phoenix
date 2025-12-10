import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, FileText, Globe } from "lucide-react";
import heroBg from "@/assets/services-hero.jpg";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Privacy Policy Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/95 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>

                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="p-3 bg-primary/20 rounded-xl border border-primary/20 backdrop-blur-sm">
                                <Shield className="w-8 h-8 text-primary" />
                            </span>
                            <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium tracking-wide border border-white/10 uppercase">
                                Legal Documentation
                            </span>
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            We value your trust and are committed to protecting your personal data.
                            This policy outlines how we collect, use, and safeguard your information.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-[1fr_300px] gap-12">

                        {/* Main Content */}
                        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
                            <div className="prose prose-lg prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none">
                                <p className="lead text-lg text-foreground font-medium">
                                    Effective Date: December 09, 2025
                                </p>
                                <p>
                                    At Phoenix Estimating ("we," "us," or "our"), safeguarding your privacy is at the core of our operations. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                                </p>

                                <hr className="my-8 border-border" />

                                <h2 className="flex items-center gap-3 text-2xl">
                                    <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary text-sm">1</span>
                                    Information We Collect
                                </h2>
                                <p>
                                    We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                                </p>
                                <h3 className="text-xl">Personal Data</h3>
                                <p>
                                    Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
                                </p>
                                <h3 className="text-xl">Derivative Data</h3>
                                <p>
                                    Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                                </p>

                                <h2 className="flex items-center gap-3 text-2xl mt-12">
                                    <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary text-sm">2</span>
                                    Use of Your Information
                                </h2>
                                <p>
                                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Create and manage your account.</li>
                                    <li>Process your project estimates and orders.</li>
                                    <li>Email you regarding your account or order.</li>
                                    <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                                    <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                                    <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                                    <li>Notify you of updates to the Site.</li>
                                </ul>

                                <h2 className="flex items-center gap-3 text-2xl mt-12">
                                    <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary text-sm">3</span>
                                    Disclosure of Your Information
                                </h2>
                                <p>
                                    We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                                </p>
                                <h3 className="text-xl">By Law or to Protect Rights</h3>
                                <p>
                                    If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                                </p>

                                <h2 className="flex items-center gap-3 text-2xl mt-12">
                                    <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary text-sm">4</span>
                                    Security of Your Information
                                </h2>
                                <p>
                                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                                </p>

                                <h2 className="flex items-center gap-3 text-2xl mt-12">
                                    <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary text-sm">5</span>
                                    Contact Us
                                </h2>
                                <p>
                                    If you have questions or comments about this Privacy Policy, please contact us at:
                                </p>
                                <div className="bg-muted p-6 rounded-xl border border-border not-prose">
                                    <p className="font-display text-xl mb-2 text-foreground">Phoenix Estimating</p>
                                    <p className="text-muted-foreground mb-1">Phoenix, Arizona, USA</p>
                                    <p className="text-muted-foreground">
                                        Email: <a href="mailto:info@phoenixestimating.com" className="text-primary hover:underline">info@phoenixestimating.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / Quick Nav */}
                        <div className="space-y-6">
                            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                                <h3 className="font-display text-lg mb-4">Table of Contents</h3>
                                <nav className="flex flex-col space-y-3">
                                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                        <Eye className="w-4 h-4" /> Information Collection
                                    </a>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                        <FileText className="w-4 h-4" /> Information Usage
                                    </a>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                        <Globe className="w-4 h-4" /> Disclosure
                                    </a>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                        <Lock className="w-4 h-4" /> Security
                                    </a>
                                </nav>

                                <div className="mt-8 pt-6 border-t border-border">
                                    <h4 className="font-medium mb-2 text-sm">Need Help?</h4>
                                    <p className="text-xs text-muted-foreground mb-4">
                                        If you can't find the answer you're looking for, our support team is here to help.
                                    </p>
                                    <Link to="/contact" className="text-xs font-semibold text-primary hover:underline">
                                        Contact Support →
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
