import { useState, useRef, useEffect } from "react";
import { Phone, FileText, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useDragControls } from "framer-motion";

const FloatingCTA = () => {
    const constraintsRef = useRef(null);
    const controls = useDragControls();

    return (
        <>
            {/* Constraint container covering the whole viewport - hidden on mobile */}
            <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block" />

            {/* Mobile Version - Static at bottom */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
                <div className="container mx-auto px-4 py-3 flex items-center gap-3 justify-between">
                    {/* Call Button - Mobile */}
                    <a
                        href="tel:+12128122993"
                        className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                        aria-label="Call Us"
                    >
                        <Phone className="w-4 h-4" />
                    </a>

                    {/* Get Quote Button - Mobile */}
                    <Link to="/contact" className="flex-1">
                        <Button
                            size="sm"
                            className="w-full h-10 rounded-full shadow-md bg-primary text-white font-semibold text-sm flex items-center justify-center gap-2"
                        >
                            <FileText className="w-4 h-4" />
                            <span>Get Estimation Now</span>
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Desktop Version - Draggable */}
            <motion.div
                drag
                dragControls={controls}
                dragMomentum={false}
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                initial={{ x: 0, y: 0 }}
                className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3 items-end touch-none"
            >
                {/* Drag Handle */}
                <div
                    className="flex justify-end w-full cursor-grab active:cursor-grabbing p-2"
                    onPointerDown={(e) => controls.start(e)}
                >
                    <div className="bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-1 transition-colors">
                        <GripVertical className="w-4 h-4 text-white/70" />
                    </div>
                </div>

                {/* Call Button */}
                <a
                    href="tel:+12128122993"
                    className="group flex items-center justify-center w-12 h-12 bg-white text-primary rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-primary/10 hover:shadow-primary/25 pointer-events-auto"
                    aria-label="Call Us"
                    draggable="false"
                >
                    <Phone className="w-5 h-5 fill-current" />
                    <span className="absolute right-14 bg-white text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Call Now
                    </span>
                </a>

                {/* Get Quote Button */}
                <Link to="/contact" draggable="false" className="pointer-events-auto">
                    <Button
                        size="lg"
                        className="h-14 px-6 rounded-full shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 bg-primary text-secondary font-bold text-base flex items-center gap-2"
                    >
                        <FileText className="w-5 h-5" />
                        <span>Get Estimation Now</span>
                    </Button>
                </Link>
            </motion.div>
        </>
    );
};

export default FloatingCTA;
