import { useState, useRef, useEffect } from "react";
import { Phone, FileText, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useDragControls } from "framer-motion";

const FloatingCTA = () => {
    const constraintsRef = useRef(null);
    const controls = useDragControls();

    // Initial position: bottom right with some padding
    // We'll manage position via CSS classes mostly, but use motion for dragging

    return (
        <>
            {/* Constraint container covering the whole viewport */}
            <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden" />

            <motion.div
                drag
                dragControls={controls}
                dragMomentum={false}
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                initial={{ x: 0, y: 0 }}
                className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end touch-none"
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
                    href="tel:+17187196171"
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
                        <span>Get Free Quote</span>
                    </Button>
                </Link>
            </motion.div>
        </>
    );
};

export default FloatingCTA;
