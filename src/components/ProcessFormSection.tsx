import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

interface ProcessStep {
    title: string;
    description: string;
}

interface ProcessFormSectionProps {
    steps: ProcessStep[];
}

const ProcessFormSection: React.FC<ProcessFormSectionProps> = ({ steps }) => {
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

    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content - Process Steps */}
                    <div>
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                            Our Process
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-8">
                            HOW IT WORKS
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Our streamlined process ensures you get accurate estimates quickly and efficiently. We've optimized every step to save you time and provide clarity.
                        </p>

                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-4 group relative">
                                    {/* Connecting Line */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-white/10 group-hover:bg-primary/30 transition-colors" />
                                    )}

                                    <div className="flex-shrink-0 w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-display text-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                                        {index + 1}
                                    </div>
                                    <div className="pt-2 pb-6">
                                        <h3 className="font-display text-xl text-white mb-2 group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-base">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Contact Form */}
                    <div className="bg-card rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
                        {/* Decorative gradient blob */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="font-display text-2xl text-foreground mb-4">
                                Get Estimation Now
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name *</label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="h-10 bg-background/50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email *</label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="h-10 bg-background/50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-medium text-muted-foreground mb-1.5">Phone *</label>
                                        <Input
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="h-10 bg-background/50"
                                            placeholder="(123) 456-7890"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-muted-foreground mb-1.5">ZIP Code</label>
                                        <Input
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                            className="h-10 bg-background/50"
                                            placeholder="85001"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Project Details</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="resize-none bg-background/50"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Upload Plans</label>
                                    <div
                                        className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group bg-background/30 relative"
                                        onClick={() => document.getElementById('process-file-upload')?.click()}
                                    >
                                        <input
                                            type="file"
                                            id="process-file-upload"
                                            className="hidden"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                        />
                                        <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1 group-hover:text-primary transition-colors" />
                                        <p className="text-muted-foreground text-sm">
                                            {file ? (
                                                <span className="text-primary font-medium">{file.name}</span>
                                            ) : (
                                                <>Drop files here or <span className="text-primary font-medium">browse</span> (PDF Only)</>
                                            )}
                                        </p>
                                        <p className="text-xs text-muted-foreground/60 mt-0.5">
                                            PDF up to 50MB
                                        </p>
                                    </div>
                                </div>

                                <Button variant="hero" size="lg" className="w-full text-lg h-11 shadow-lg hover:shadow-primary/25 transition-all">
                                    <Send className="w-4 h-4 mr-2" />
                                    Get Estimation Now
                                </Button>

                                <p className="text-center text-xs text-muted-foreground">
                                    We respect your privacy. 100% confidential.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFormSection;
