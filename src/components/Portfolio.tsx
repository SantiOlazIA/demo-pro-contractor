import { motion } from 'framer-motion';

const projects = [
    { id: 1, title: 'Torre Althea', category: 'Infraestructura Comercial', year: '2025', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'Centro Logístico Sur', category: 'Nave Industrial', year: '2024', img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop' },
    { id: 3, title: 'Oficinas Centrales', category: 'Corporativo', year: '2023', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' },
];

export const Portfolio = () => {
    return (
        <section id="obras" className="py-32 px-6 md:px-16 bg-[#09090b] text-primary border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col justify-between mb-20 gap-6 border-b border-primary/10 pb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-[2px] bg-accent"></div>
                        <span className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-xs">01 // PORTFOLIO</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                        <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tighter uppercase text-balance leading-none">
                            Obras <br />Destacadas
                        </h2>
                        <a href="#" className="flex items-center gap-4 hover:text-accent transition-colors group">
                            <span className="font-bold tracking-widest uppercase text-sm">Explorar Archivo</span>
                            <div className="w-12 h-[1px] bg-primary group-hover:w-20 group-hover:bg-accent transition-all duration-300"></div>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-[#18181b] mb-8 relative">
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                                />
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-3xl font-black font-sans tracking-tight uppercase leading-none">{p.title}</h3>
                                <span className="font-sans font-bold text-sm text-primary/40 tracking-widest">{p.year}</span>
                            </div>
                            <div className="w-full h-[1px] bg-primary/10 mb-4 group-hover:bg-accent/50 transition-colors duration-500"></div>
                            <p className="text-primary/60 font-medium tracking-wide text-sm uppercase">{p.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
