import { Building2, Mail, MapPinned, Linkedin, ArrowRight } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="w-full bg-[#18181b] pt-12 md:pt-24 pb-12 px-6 md:px-16 border-t border-accent relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-10 md:mb-20">

                <div className="md:col-span-5 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <Building2 className="text-accent" size={36} strokeWidth={1.5} />
                            <span className="text-3xl font-sans font-black text-primary tracking-tighter uppercase leading-none">Constructor<br />PRO</span>
                        </div>
                        <p className="text-primary/60 font-sans font-medium leading-relaxed max-w-sm">
                            Soluciones integrales de arquitectura comercial, industrial y civil. Construyendo rentabilidad y eficiencia operativa desde la base.
                        </p>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <a href="#" className="flex items-center justify-center w-12 h-12 bg-[#09090b] text-primary hover:bg-accent border border-white/5 transition-colors duration-300">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-12 h-12 bg-[#09090b] text-primary hover:bg-accent border border-white/5 transition-colors duration-300">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-accent mb-8">Especialidades</h4>
                    <ul className="space-y-4 text-primary/70 font-sans font-medium text-sm uppercase tracking-wider">
                        <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Naves Industriales</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Arquitectura Corporativa</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Centros Logísticos</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Masterplanning</a></li>
                    </ul>
                </div>

                <div className="md:col-span-4 bg-[#09090b] p-8 border border-white/5">
                    <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-accent mb-8">Sede Administrativa</h4>

                    <div className="flex items-start gap-4 mb-6">
                        <MapPinned size={24} className="text-primary/30 shrink-0" strokeWidth={1.5} />
                        <p className="text-primary/70 font-sans font-medium leading-relaxed text-sm">
                            Complejo Althea, Torre C, Piso 9.<br />
                            Distrito Financiero.<br />
                            Buenos Aires, Argentina.
                        </p>
                    </div>

                    <div className="pt-8 mt-8 border-t border-white/5">
                        <a href="#contacto" className="text-accent font-bold text-sm tracking-widest uppercase hover:text-primary transition-colors flex justify-between items-center group">
                            Solicitar Catálogo PDF
                            <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-white/10">
                <p className="text-primary/50 text-xs font-sans font-bold tracking-widest uppercase">© {new Date().getFullYear()} Constructora PRO S.A.</p>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-primary/50 text-xs font-sans font-bold tracking-widest uppercase hover:text-primary transition-colors">Legales</a>
                    <a href="#" className="text-primary/50 text-xs font-sans font-bold tracking-widest uppercase hover:text-primary transition-colors">Privacidad</a>
                    <span className="text-accent text-xs font-sans font-bold tracking-widest uppercase">SYS: <span className="text-primary">Su Agencia</span></span>
                </div>
            </div>
        </footer>
    );
};
