import { ArrowRightIcon, ZapIcon, CheckIcon } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { motion } from 'framer-motion';

export default function Hero() {

    const mainImageUrl = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop';

    const galleryStripImages = [
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=80&auto=format&fit=crop',
    ];

    return (
        <>
            <section id="home" className="relative z-10">
                <div className="max-w-6xl mx-auto px-4 max-md:w-screen max-md:overflow-hidden pt-32 xl:pt-40 pb-20 flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="text-left">

                            <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                Fuse product images <br />
                                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400">
                                     with model photos
                                </span>
                            </motion.h1>

                            <motion.p className="text-gray-300 max-w-lg mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                            >
                                Upload a product image and a model image — our AI-powered platform uses Google Gemini to generate realistic composite visuals and converts them into short-form videos using Google Veo.
                            </motion.p>

                            <motion.div className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                            >
                                <a href="/generate" className="w-full sm:w-auto">
                                    <PrimaryButton className="max-sm:w-full py-3 px-7">
                                        Start generating — it's free
                                        <ArrowRightIcon className="size-4" />
                                    </PrimaryButton>
                                </a>
                            </motion.div>

                            <motion.div className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm text-gray-200 bg-white/10 rounded"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                                    <ZapIcon className="size-4 text-sky-500" />
                                    <div>
                                        <div>Seconds to create</div>
                                        <div className="text-xs text-gray-400">
                                            Optimized social formats
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block h-6 w-px bg-white/6" />

                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                                    <CheckIcon className="size-4 text-cyan-500" />
                                    <div>
                                        <div>Commercial rights</div>
                                        <div className="text-xs text-gray-400">
                                            Use anywhere, no fuss
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: modern mockup card */}
                        <motion.div className="mx-auto w-full max-w-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
                        >
                            <motion.div className="rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent">
                                <div className="relative aspect-16/10 bg-gray-900">
                                    <img
                                        src={mainImageUrl}
                                        alt="agency-work-preview"
                                        className="w-full h-full object-cover object-center"
                                    />

                                    <div className="absolute left-4 top-4 px-3 py-1 rounded-full bg-black/15 backdrop-blur-sm text-xs">
                                        Social-ready • 9:16 & 16:9
                                    </div>

                                </div>
                            </motion.div>

                            <div className="mt-4 flex gap-3 items-center justify-start">
                                {galleryStripImages.map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                                        className="w-14 h-10 rounded-lg overflow-hidden border border-white/6"
                                    >
                                        <img
                                            src={src}
                                            alt="project-thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                                <motion.div className="text-sm text-gray-400 ml-2 flex items-center gap-2"
                                    initial={{ y: 60, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                                >
                                    <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300" />

                                        <span className="relative inline-flex size-2 rounded-full bg-green-600" />
                                    </div>
                                    +20 more
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    );
};