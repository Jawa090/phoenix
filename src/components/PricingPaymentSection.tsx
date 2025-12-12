import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, CreditCard, Wallet, Building2, CheckCircle2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

const PricingPaymentSection = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        zipCode: "",
        message: "",
    });
    const [file, setFile] = useState<File | null>(null);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

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
    };

    const paymentMethods = [
        { name: "Bank Transfer", icon: Building2, color: "text-blue-600" },
        { name: "eCheck", icon: CheckCircle2, color: "text-green-600" },
        { name: "Payoneer", icon: Wallet, color: "text-orange-500" },
        { name: "Visa", icon: CreditCard, color: "text-blue-700" },
        { name: "Stripe", icon: CreditCard, color: "text-indigo-600" },
        { name: "Amex", icon: CreditCard, color: "text-blue-500" },
        { name: "PayPal", icon: Wallet, color: "text-blue-400" },
        { name: "Mastercard", icon: CreditCard, color: "text-red-500" },
    ];

    return (
        <section className="py-20 bg-hero relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-primary/90 mix-blend-multiply opacity-50" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop')] bg-cover bg-center opacity-10" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Left Side: Payment Methods Card */}
                    <div className="flex flex-col items-center h-full pt-8">

                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-6 font-display">
                            Our Payment Methods
                        </h2>

                        <p className="text-gray-300 text-center text-sm lg:text-base leading-relaxed mb-10">
                            As our construction estimating firm believes in flexibility, we offer our customers various payment methods. You don't need to visit our location; you can clear our service charges from your comfort zone. We accept payment from multiple channels, including Credit card, Debit card, and PayPal.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
                            {paymentMethods.map((method, index) => (
                                <div key={index} className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-white/10 hover:shadow-md transition-all duration-300 bg-white shadow-sm">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <method.icon className={`w-8 h-8 ${method.color}`} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-700 tracking-wide text-center uppercase">{method.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Consistent Contact/Upload Form */}
                    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl lg:text-3xl font-bold text-black font-display mb-2">
                                GET YOUR <span className="text-primary">ESTIMATION NOW</span>
                            </h2>
                            <p className="text-muted-foreground text-sm">
                                Submit your plans and receive an accurate estimate within 24 hours
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name and Email in one row */}
                            <div className="grid sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                                        Name *
                                    </label>
                                    <Input
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="h-10"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                                        Email *
                                    </label>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="h-10"
                                    />
                                </div>
                            </div>

                            {/* Phone and ZIP in one row */}
                            <div className="grid sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                                        Phone *
                                    </label>
                                    <Input
                                        name="phone"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="h-10"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                                        ZIP Code
                                    </label>
                                    <Input
                                        name="zipCode"
                                        placeholder="85001"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        className="h-10"
                                    />
                                </div>
                            </div>

                            {/* Project Details */}
                            <div>
                                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                                    Project Details
                                </label>
                                <Textarea
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="resize-none text-sm"
                                />
                            </div>

                            {/* Compact File Upload */}
                            <div>
                                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                                    Upload Plans (Optional)
                                </label>
                                <div
                                    className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer group relative"
                                    onClick={() => document.getElementById('pricing-file-upload')?.click()}
                                >
                                    <input
                                        type="file"
                                        id="pricing-file-upload"
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

                            {/* Submit Button */}
                            <Button variant="hero" size="lg" className="w-full group">
                                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                Get Estimation Now
                            </Button>

                            {/* Privacy Note */}
                            <p className="text-muted-foreground text-xs text-center">
                                🔒 Your information is secure. We respond within 24 hours.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PricingPaymentSection;
