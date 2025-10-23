import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Comment fonctionne le dépôt-vente ?",
      answer:
        "Vous nous confiez vos objets de luxe, nous les authentifions, les évaluons et les mettons en vente dans notre boutique et en ligne. Une fois vendus, vous recevez 70% du prix de vente (notre commission est de 30%).",
    },
    {
      question: "Quels types d'objets acceptez-vous ?",
      answer:
        "Nous acceptons les sacs à main de luxe (Chanel, Hermès, Dior, Louis Vuitton...), les bijoux de créateurs et les montres de prestige. Les articles doivent être authentiques et en bon état général.",
    },
    {
      question: "Comment garantissez-vous l'authenticité ?",
      answer:
        "Chaque pièce est expertisée par nos spécialistes formés à l'authentification des grandes maisons de luxe. Nous vérifions les matériaux, les coutures, les marquages et les numéros de série. Un certificat d'authenticité est fourni avec chaque vente.",
    },
    {
      question: "Combien de temps gardez-vous mes objets ?",
      answer:
        "La durée standard du contrat de dépôt-vente est de 3 mois, renouvelable. Si votre objet ne se vend pas, nous vous le restituons ou pouvons ajuster le prix en accord avec vous.",
    },
    {
      question: "Quand suis-je payé(e) ?",
      answer:
        "Vous êtes payé(e) sous 7 jours après la vente de votre objet, par virement bancaire. Vous recevez une notification dès que votre article est vendu.",
    },
    {
      question: "Puis-je fixer le prix de vente ?",
      answer:
        "Nous établissons ensemble un prix de vente basé sur l'état de l'objet, sa rareté et le marché actuel. Votre accord est nécessaire avant la mise en vente. Vous pouvez également nous indiquer un prix minimum acceptable.",
    },
    {
      question: "Mes objets sont-ils assurés ?",
      answer:
        "Oui, tous les objets en dépôt-vente sont assurés contre le vol, l'incendie et les dommages pendant toute la durée du contrat. Nous prenons le plus grand soin de vos pièces précieuses.",
    },
    {
      question: "Que se passe-t-il si je change d'avis ?",
      answer:
        "Vous pouvez récupérer vos objets à tout moment avant la vente, moyennant un préavis de 48h. Aucun frais ne vous sera facturé si l'objet n'a pas été vendu.",
    },
    {
      question: "Proposez-vous aussi le rachat direct ?",
      answer:
        "Oui, si vous souhaitez une vente immédiate, nous pouvons vous faire une offre de rachat direct. Le prix sera inférieur au dépôt-vente, mais vous êtes payé(e) immédiatement.",
    },
    {
      question: "Comment prendre rendez-vous ?",
      answer:
        "Après l'ouverture mi-novembre, vous pourrez prendre rendez-vous directement en boutique, par téléphone ou via notre site web. En attendant, vous pouvez nous envoyer une demande via le formulaire de dépôt.",
    },
  ];

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="text-center space-y-3">
        <h3 className="text-2xl md:text-3xl font-serif text-primary">
          Questions Fréquentes
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          Tout ce que vous devez savoir sur notre service de dépôt-vente
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base md:text-lg text-foreground hover:text-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center pt-6">
        <p className="text-sm text-muted-foreground">
          Vous avez d'autres questions ?{" "}
          <a
            href="mailto:contact@heritage-precieux.fr"
            className="text-primary hover:underline font-medium"
          >
            Contactez-nous
          </a>
        </p>
      </div>
    </div>
  );
}

