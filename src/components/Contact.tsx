export const Contact = () => {
    return (
        <section id="contacto" className="py-16 md:py-32 px-6 md:px-16 bg-[#09090b] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-20 relative z-10">
                <div className="w-full lg:w-5/12">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-[2px] bg-accent"></div>
                        <span className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-xs">02 // CONTACTO</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black mb-10 tracking-tighter text-balance uppercase leading-none text-primary">
                        Iniciemos su proyecto.
                    </h2>

                    <div className="space-y-10 text-primary/70 font-sans font-medium text-lg pt-10 border-t border-primary/20">
                        <div>
                            <p className="text-sm font-bold tracking-widest uppercase text-accent mb-2">Oficinas Centrales</p>
                            <p className="leading-relaxed">Av. Libertador 1234, Piso 15.<br />San Juan, Argentina.</p>
                        </div>
                        <div>
                            <p className="text-sm font-bold tracking-widest uppercase text-accent mb-2">Contacto Directo</p>
                            <p className="leading-relaxed">info@constructorapro.com<br />+54 9 264 555-0000</p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-7/12 bg-[#121214] p-5 md:p-12 border border-white/5">
                    <form onSubmit={(e) => { e.preventDefault(); alert("Form Submitted! (Demo Mode)"); }} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative group">
                                <label className="absolute -top-3 left-0 text-xs font-bold tracking-widest uppercase text-accent bg-[#121214] pr-2">Empresa / Nombre</label>
                                <input required type="text" className="w-full px-0 py-4 bg-transparent border-b border-primary/20 focus:border-accent outline-none transition-colors rounded-none text-primary font-sans font-medium" />
                            </div>
                            <div className="relative group">
                                <label className="absolute -top-3 left-0 text-xs font-bold tracking-widest uppercase text-accent bg-[#121214] pr-2">Correo corporativo</label>
                                <input required type="email" className="w-full px-0 py-4 bg-transparent border-b border-primary/20 focus:border-accent outline-none transition-colors rounded-none text-primary font-sans font-medium" />
                            </div>
                        </div>

                        <div className="relative group pt-4">
                            <label className="absolute top-1 left-0 text-xs font-bold tracking-widest uppercase text-accent bg-[#121214] pr-2">Tipo de Obra Proyectada</label>
                            <select required className="w-full px-0 py-4 bg-transparent border-b border-primary/20 focus:border-accent outline-none transition-colors rounded-none text-primary font-sans font-medium appearance-none mt-2 cursor-pointer [&>option]:bg-[#121214]">
                                <option value="" disabled selected className="text-primary/30">Seleccione la clasificación comercial</option>
                                <option value="nave">Naves Industriales / Logística</option>
                                <option value="comercial">Desarrollo Comercial / Retail</option>
                                <option value="oficinas">Edificios / Oficinas Corporativas</option>
                                <option value="otro">Infraestructura Especial / Otro</option>
                            </select>
                        </div>

                        <div className="relative group pt-4">
                            <label className="absolute top-1 left-0 text-xs font-bold tracking-widest uppercase text-accent bg-[#121214] pr-2">Especificaciones de la Cotización</label>
                            <textarea required rows={5} placeholder="Describa superficie en metros cuadrados, ubicación y plazos estimados..." className="w-full px-0 py-4 mt-2 bg-transparent border-b border-primary/20 focus:border-accent outline-none transition-colors rounded-none resize-none text-primary font-sans font-medium placeholder:text-primary/30"></textarea>
                        </div>

                        <div className="pt-6 border-t border-primary/10">
                            <button type="submit" className="group relative w-full px-10 py-6 bg-primary text-dark font-sans font-black uppercase tracking-widest text-sm overflow-hidden text-center hover:text-primary transition-colors duration-300 rounded-none">
                                <span className="relative z-10 transition-colors duration-300">Enviar Documentación Formal</span>
                                <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
