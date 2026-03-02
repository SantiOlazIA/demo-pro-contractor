import { motion } from 'framer-motion';

export const Stats = () => {
    return (
        <section className="w-full py-16 md:py-32 px-6 md:px-16 bg-[#09090b] border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-y-16">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        className="flex flex-col border-l border-accent/50 pl-6"
                    >
                        <span className="text-6xl md:text-7xl font-sans font-black text-primary mb-2 tracking-tighter leading-none">25<span className="text-accent">+</span></span>
                        <div className="w-8 h-[1px] bg-primary/20 mb-4 mt-2"></div>
                        <span className="text-sm font-bold tracking-widest uppercase text-primary/60">Años de<br />Trayectoria</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
                        className="flex flex-col border-l border-accent/50 pl-6"
                    >
                        <span className="text-6xl md:text-7xl font-sans font-black text-primary mb-2 tracking-tighter leading-none">150<span className="text-accent">+</span></span>
                        <div className="w-8 h-[1px] bg-primary/20 mb-4 mt-2"></div>
                        <span className="text-sm font-bold tracking-widest uppercase text-primary/60">Obras<br />Entregadas</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
                        className="flex flex-col border-l border-accent/50 pl-6"
                    >
                        <span className="text-6xl md:text-7xl font-sans font-black text-primary mb-2 tracking-tighter leading-none">1.2<span className="text-accent">M</span></span>
                        <div className="w-8 h-[1px] bg-primary/20 mb-4 mt-2"></div>
                        <span className="text-sm font-bold tracking-widest uppercase text-primary/60">Metros<br />Cuadrados</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
                        className="flex flex-col border-l border-accent/50 pl-6"
                    >
                        <span className="text-6xl md:text-7xl font-sans font-black text-primary mb-2 tracking-tighter leading-none">0<span className="text-accent">%</span></span>
                        <div className="w-8 h-[1px] bg-primary/20 mb-4 mt-2"></div>
                        <span className="text-sm font-bold tracking-widest uppercase text-primary/60">Fallas<br />Estructurales</span>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
