import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-center px-6 md:px-16 overflow-hidden bg-background">

            {/* Absolute Brand Header */}
            <header className="absolute top-0 left-0 w-full p-6 md:p-10 z-20 flex justify-between items-center mix-blend-difference">
                <div className="flex items-center gap-3 text-primary">
                    <div className="w-6 h-6 bg-accent"></div> {/* Minimalist brutalist solid color box */}
                    <span className="text-xl md:text-3xl font-sans font-black tracking-tighter uppercase">STRUCTURA</span>
                </div>
                <a href="#contacto" className="hidden md:block px-8 py-3 border-2 border-primary text-primary font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-dark transition-colors rounded-none">
                    Portal de Clientes
                </a>
            </header>

            {/* Dramatic Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="/images/hero/construction.jpg"
                    alt="Modern Architecture Construction"
                    className="w-full h-full object-cover grayscale brightness-50 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent w-full md:w-3/4"></div>
            </div>

            <motion.div
                className="z-10 w-full max-w-7xl mx-auto mt-32"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[2px] bg-accent"></div>
                    <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-xs md:text-sm">INGENIERÍA CORPORATIVA</span>
                </div>

                <div className="max-w-4xl">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] font-sans font-black text-primary mb-8 leading-[0.95] tracking-tighter uppercase text-balance">
                        Construimos <br className="hidden md:block" />el futuro de <br className="hidden md:block" /><span className="text-primary/40">tu industria.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-primary/70 mb-12 max-w-2xl font-sans font-normal leading-relaxed">
                        Desarrollo de infraestructura corporativa, naves industriales y arquitectura de alto rendimiento. Resultados estructurales garantizados desde 1998.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href="#contacto"
                            className="group relative inline-flex justify-center items-center bg-primary text-dark px-10 py-5 font-bold tracking-widest uppercase text-sm overflow-hidden rounded-none"
                        >
                            <span className="relative z-10 transition-colors group-hover:text-primary">Iniciar Proyecto</span>
                            <div className="absolute inset-0 bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        </a>
                        <a
                            href="#obras"
                            className="inline-flex justify-center items-center border border-primary/20 text-primary px-10 py-5 font-bold tracking-widest uppercase text-sm hover:bg-white/5 transition-colors rounded-none"
                        >
                            Explorar Obras
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
