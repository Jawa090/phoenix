import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Gavel } from "lucide-react";
import heroBg from "@/assets/services-hero.jpg";

const TermsOfServices = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Terms of Service Background"
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
                                <FileText className="w-8 h-8 text-primary" />
                            </span>
                            <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium tracking-wide border border-white/10 uppercase">
                                Legal Documentation
                            </span>
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            Please read these terms carefully before using our services. They outline your rights and obligations when working with Phoenix Estimating.
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
                                    Last Updated: December 09, 2025
                                </p>
                                <p>
                                    These Terms of Service ("Terms") engage you ("Client," "you," or "your") and Phoenix Estimating ("Service Provider," "we," "us," or "our") concerning your access to and use of our construction estimating services. By accessing or using the Service, you agree to be bound by these Terms.
                                </p>

                                <hr className="my-8 border-border" />

                                <h2 className="flex items-center gap-3 text-2xl">
                                    <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary text-sm">1</span>
                                    Acceptance of Agreements
                                </h2>
                                <p>
                                    By using our website and services, you signify your acceptance of these Terms of Service. If you do not agree to this, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
                                </p>

                                <h2 className="flex items-center gap-3 text-2xl mt-12">
                                    <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary text-sm">2</span>
                                    Use License
                                </h2>
                                <p>
                                    Permission is granted to temporarily download one copy of the materials (information or software) on Phoenix Estimating's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Modify or copy the materials;</li>
                                    <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                    <li>Attempt to decompile or reverse engineer any software contained on Phoenix Estimating's website;</li>
                                    <li>Remove any copyright or other proprietary notations from the materials; or</li>
                                    <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                                </ul>

                                <h2 className="flex items-center gap-3 text-2xl mt-12">
                                    <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary text-sm">3</span>
                                    Disclaimer
                                </h2>
                                <p>
                                    The materials on Phoenix Estimating's website are provided on an 'as is' basis. Phoenix Estimating makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>
                                <p>
                                    Further, Phoenix Estimating does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                                </p>

                                <h2 className="flex items-center gap-3 text-2xl mt-12">
                                    <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary text-sm">4</span>
                                    Limitations
                                </h2>
                                <p>
                                    In no event shall Phoenix Estimating or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Phoenix Estimating's website, even if Phoenix Estimating or a Phoenix Estimating authorized representative has been notified orally or in writing of the possibility of such damage.
                                </p>

                                <h2 className="flex items-center gap-3 text-2xl mt-12">
                                    <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary text-sm">5</span>
                                    Governing Law
                                </h2>
                                <p>
                                    These terms and conditions are governed by and construed in accordance with the laws of Arizona and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar / Quick Nav */}
                        <div className="space-y-6">
                            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                                <h3 className="font-display text-lg mb-4">Table of Contents</h3>
                                <nav className="flex flex-col space-y-3">
                                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" /> Acceptance
                                    </a>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                        <FileText className="w-4 h-4" /> Usage License
                                    </a>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" /> Disclaimers
                                    </a>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                        <Gavel className="w-4 h-4" /> Governing Law
                                    </a>
                                </nav>

                                <div className="mt-8 pt-6 border-t border-border">
                                    <h4 className="font-medium mb-2 text-sm">Need Help?</h4>
                                    <p className="text-xs text-muted-foreground mb-4">
                                        Have questions about our terms? Our team is ready to assist you.
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

export default TermsOfServices;
