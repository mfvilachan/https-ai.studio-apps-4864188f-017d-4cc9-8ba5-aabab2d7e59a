import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  RotateCcw, 
  Send, 
  LayoutTemplate, 
  Keyboard,
  CalendarDays,
  Hash,
  ArrowRight
} from 'lucide-react';
import { HOLIDAYS } from './data/copyTemplates';
import { GeneratedDraft } from './types';

export default function App() {
  const [selectedHoliday, setSelectedHoliday] = useState<string>('');
  const [keywords, setKeywords] = useState({ k1: '', k2: '', k3: '' });
  const [drafts, setDrafts] = useState<GeneratedDraft[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!selectedHoliday || !keywords.k1 || !keywords.k2 || !keywords.k3) return;

    setIsGenerating(true);
    
    // Artificial small delay for "feeling" of creation
    setTimeout(() => {
      const template = HOLIDAYS[selectedHoliday];
      const newDrafts: GeneratedDraft[] = [];

      for (let i = 0; i < 3; i++) {
        // Random selection logic
        const opening = template.openings[Math.floor(Math.random() * template.openings.length)];
        const bodyTemplate = template.bodies[Math.floor(Math.random() * template.bodies.length)];
        
        // Inject keywords
        const body = bodyTemplate
          .replace('{k1}', `**${keywords.k1}**`)
          .replace('{k2}', `**${keywords.k2}**`)
          .replace('{k3}', `**${keywords.k3}**`);

        // Select random hashtags (3-4)
        const shuffledHashtags = [...template.hashtags].sort(() => 0.5 - Math.random());
        const selectedHashtags = shuffledHashtags.slice(0, Math.min(4, template.hashtags.length));

        newDrafts.push({
          id: Math.random().toString(36).substr(2, 9),
          opening,
          body,
          hashtags: selectedHashtags
        });
      }

      setDrafts(newDrafts);
      setIsGenerating(false);
    }, 600);
  };

  const copyToClipboard = (draft: GeneratedDraft) => {
    const text = `${draft.opening}\n\n${draft.body.replace(/\*\*/g, '')}\n\n${draft.hashtags.join(' ')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(draft.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const reset = () => {
    setDrafts([]);
    setSelectedHoliday('');
    setKeywords({ k1: '', k2: '', k3: '' });
  };

  const isFormValid = selectedHoliday && keywords.k1 && keywords.k2 && keywords.k3;

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-200">
          <Send size={32} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
          Draft<span className="text-blue-600">Fast</span>
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
          Reduce horas de redacción creativa a segundos. Selecciona una festividad, 
          define tu producto y crea copys listos para publicar.
        </p>
      </motion.header>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Controls */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-4 space-y-6"
        >
          {/* Step 1: Holiday */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-4 uppercase tracking-wider">
              <CalendarDays size={18} className="text-blue-600" />
              1. Selecciona Festividad
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(HOLIDAYS).map(([key, data]) => (
                <button
                  key={key}
                  id={`holiday-${key}`}
                  onClick={() => setSelectedHoliday(key)}
                  className={`px-4 py-2 text-sm rounded-lg border transition-all duration-200 text-left ${
                    selectedHoliday === key 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-[1.02]' 
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-blue-300 hover:bg-neutral-50'
                  }`}
                >
                  {data.label}
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Keywords */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-4 uppercase tracking-wider">
              <Keyboard size={18} className="text-blue-600" />
              2. Palabras Clave
            </label>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-neutral-400 mb-1 block">Producto o Marca</span>
                <input
                  type="text"
                  id="keyword-1"
                  placeholder="Ej: Zapatillas Urbanas"
                  value={keywords.k1}
                  onChange={(e) => setKeywords({ ...keywords, k1: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <span className="text-xs text-neutral-400 mb-1 block">Beneficio o Atributo</span>
                <input
                  type="text"
                  id="keyword-2"
                  placeholder="Ej: Comodidad extrema"
                  value={keywords.k2}
                  onChange={(e) => setKeywords({ ...keywords, k2: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <span className="text-xs text-neutral-400 mb-1 block">Diferenciador</span>
                <input
                  type="text"
                  id="keyword-3"
                  placeholder="Ej: Envío gratis hoy"
                  value={keywords.k3}
                  onChange={(e) => setKeywords({ ...keywords, k3: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>
            </div>
          </section>

          {/* Generate Button */}
          <div className="flex gap-3">
            <button
              id="btn-generate"
              onClick={handleGenerate}
              disabled={!isFormValid || isGenerating}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold transition-all shadow-lg ${
                !isFormValid || isGenerating 
                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed border-none' 
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 active:scale-x-95 active:scale-y-95'
              }`}
            >
              {isGenerating ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Sparkles size={20} />
                  Generar Estrategias
                </>
              )}
            </button>
            
            {drafts.length > 0 && (
              <button
                id="btn-reset"
                onClick={reset}
                className="p-4 bg-white border border-neutral-200 rounded-2xl text-neutral-400 hover:text-blue-600 hover:border-blue-600 transition-colors"
                title="Nueva redacción"
              >
                <RotateCcw size={20} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Results Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <AnimatePresence mode="wait">
            {drafts.length === 0 ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-[500px] border-2 border-dashed border-neutral-200 rounded-3xl bg-neutral-50/50"
              >
                <div className="p-4 bg-neutral-100 rounded-full text-neutral-300 mb-4">
                  <LayoutTemplate size={48} />
                </div>
                <p className="text-neutral-400 font-medium text-center px-8">
                  Completa el formulario para ver las opciones de copy.<br/>
                  Tus borradores aparecerán aquí.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 gap-6"
              >
                {drafts.map((draft, idx) => (
                  <motion.div
                    key={draft.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/40 transition-all cursor-default relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => copyToClipboard(draft)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-semibold hover:bg-blue-100 transition-colors shadow-sm"
                      >
                        {copiedId === draft.id ? <Check size={16} /> : <Copy size={16} />}
                        {copiedId === draft.id ? 'Copiado' : 'Copiar'}
                      </button>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-xs font-bold ring-4 ring-blue-50">
                        0{idx + 1}
                      </span>
                      <h3 className="font-bold text-neutral-800 uppercase tracking-tight text-xs bg-neutral-100 px-3 py-1 rounded-full">
                        Variante Estratégica
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="text-lg font-bold text-blue-600 italic">
                        "{draft.opening}"
                      </div>
                      <p className="text-neutral-600 leading-relaxed text-lg" dangerouslySetInnerHTML={{ 
                        __html: draft.body.replace(/\n/g, '<br/>') 
                      }} />
                      
                      <div className="flex flex-wrap gap-2 pt-4">
                        <Hash size={16} className="text-neutral-300 mt-1" />
                        {draft.hashtags.map(tag => (
                          <span key={tag} className="text-sm font-medium text-blue-400 hover:text-blue-600 transition-colors cursor-pointer">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-50 flex items-center justify-between text-xs text-neutral-400">
                      <span>Listo para Instagram, Facebook o Twitter</span>
                      <div className="flex items-center gap-1 group/link cursor-pointer hover:text-blue-600">
                        <span>Ver guías de formato</span>
                        <ArrowRight size={12} className="transform group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-neutral-200 text-center text-neutral-400 text-sm w-full max-w-4xl">
        <p>&copy; {new Date().getFullYear()} DraftFast - Impulsa tu Redacción Creativa.</p>
        <p className="mt-1">Hecho para marketers que valoran su tiempo.</p>
      </footer>
    </div>
  );
}
