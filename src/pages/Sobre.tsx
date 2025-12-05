import { Layout } from "@/components/layout/Layout";
import { Scissors, Heart, Leaf, Award, Clock, Users } from "lucide-react";
import artisanImage from "@/assets/artisan-portrait.jpg";
import heroImage from "@/assets/hero-artisan.jpg";

const values = [
  {
    icon: Scissors,
    title: "Tradição",
    description: "Técnicas passadas de geração em geração, preservando a essência do artesanato brasileiro."
  },
  {
    icon: Heart,
    title: "Paixão",
    description: "Cada peça é feita com amor, dedicação e atenção aos mínimos detalhes."
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Uso de materiais naturais e práticas conscientes com o meio ambiente."
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Compromisso com a excelência em cada criação, do início ao fim."
  },
  {
    icon: Clock,
    title: "Tempo",
    description: "Respeito ao tempo necessário para criar peças verdadeiramente especiais."
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Valorização da cultura local e apoio a outros artesãos da região."
  }
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Ateliê de artesanato"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-background animate-fade-up">
            Nossa História
          </h1>
          <p className="font-body text-lg text-background/80 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
            Conheça a jornada por trás de cada peça artesanal
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative animate-fade-up">
              <div className="image-frame aspect-[4/5]">
                <img
                  src={artisanImage}
                  alt="A artesã"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg -z-10" />
            </div>

            <div className="space-y-6 animate-fade-up delay-200">
              <span className="font-body text-sm tracking-widest uppercase text-primary">
                Quem somos
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
                Vimedecore é Arte
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                 Na Vime Decore, acreditamos que a beleza está nos detalhes e que o artesanal tem alma, Somos uma empresa
                 brasileira apaixonada por transformar o vime, um material natural, leve e resistente - em peças únicas Que
                 encantam e acolhem. 
                </p>
                <p>
                  Localizada em Correia Pinto, Santa Catarina, nossa missão é levar o charme do feito à mão para dentro da sua 
                  casa.Trabalhamos com dedicação para criar produtos que unem tradição, sustentabilidade e design, como cadeira
                  infantis, guirlandas com carinho, respeitando o tempo e o talento dos nossos artesãos. Valorizamos o trabalho
                  manual, a criatividade e o cuidador com o meio ambiente, oferecendo peças que contam histórias e criam memórias.
                </p>
                <p>
                  Seja para decorar, presentear ou transformar ambientes, a Vime Decore é o seu destino para artesanato autêntico e 
                  cheio de personalidade. Vime Decore - onde o natural encontra o encantador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-primary">
              Nossos Valores
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2">
              O Que Nos Move
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`card-artisan p-8 text-center animate-fade-up delay-${(index % 3 + 1) * 100}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-primary">
              O Processo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2">
              Como as Peças Ganham Vida
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inspiração", description: "A natureza, a cultura e as histórias inspiram cada criação" },
              { step: "02", title: "Seleção", description: "Escolha cuidadosa de materiais naturais e de qualidade" },
              { step: "03", title: "Criação", description: "Horas de trabalho manual com técnicas tradicionais" },
              { step: "04", title: "Acabamento", description: "Atenção aos detalhes que fazem toda a diferença" },
            ].map((item, index) => (
              <div key={index} className={`text-center animate-fade-up delay-${(index + 1) * 100}`}>
                <span className="font-display text-5xl font-bold text-primary/20">
                  {item.step}
                </span>
                <h3 className="font-display text-lg font-medium text-foreground mt-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
