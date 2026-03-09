import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Bond Cleaning and Why is it Required?",
    a: `Bond cleaning (also called end of lease cleaning) is a deep, thorough clean of a rental property that you do when you move out. It is required because when you moved in, you paid a bond — a security deposit — to your landlord. The landlord holds this money in case you damage the property or leave it in a poor condition.

Bond cleaning is your way of making sure the home is returned in the same condition it was when you moved in, so you get your full bond back. If the home is not clean enough, your property manager can use your bond money to pay for professional cleaning. That means you could lose hundreds or even thousands of dollars.

A professional bond clean covers everything — kitchens, bathrooms, bedrooms, living areas, carpets, windows, and outdoor areas. It follows a detailed checklist that matches what real estate agents expect. Doing a proper bond clean protects your money and your rental history.`,
  },
  {
    q: "Why is Bond Cleaning Important?",
    a: `Bond cleaning is important because it directly affects whether you get your full bond back. In Queensland, the bond is usually four weeks' rent. For many Gold Coast renters, that is $2,000 to $5,000 or more. Losing even part of that money hurts.

Bond cleaning is also important for your rental history. If you leave a property in poor condition, your property manager may give you a bad reference. That can make it very hard to rent another home in the future. Landlords and property managers talk to each other.

A good bond clean shows that you are a responsible tenant who respects the property. It leaves you on good terms with your landlord and makes your next rental application much stronger. At Tru Best Bond Cleaning Gold Coast, we understand how important this is for you. That is why we offer a 100% bond back guarantee.`,
  },
  {
    q: "How Much for a Bond Clean?",
    a: `The cost of a bond clean in Gold Coast depends on the size of your property:

• Studio or 1-bedroom unit: $200 to $350
• 2-bedroom unit: $300 to $450
• 3-bedroom house: $400 to $600
• 4-bedroom house: $500 to $750
• Larger properties may cost more

Extra services like carpet steam cleaning, oven cleaning, and exterior window cleaning may be priced separately or included in a package.

At Tru Best Bond Cleaning Gold Coast, we give you a clear, upfront quote with no hidden charges. We assess your property size and condition and give you an honest price. Contact us on WhatsApp 0488841883 for a free quote today.`,
  },
  {
    q: "What is Full Bond Cleaning?",
    a: `Full bond cleaning means cleaning every single part of your rental property to a real estate agent's standard. It is not just a quick tidy up — it is a deep, detailed clean of every room, every surface, every corner.

Full bond cleaning covers:
• Kitchen (oven, rangehood, benchtops, cupboards, sink, splashback)
• All bathrooms and toilets (scrubbing tiles, descaling, disinfecting)
• All bedrooms and living areas (vacuuming, mopping, dusting, skirting boards)
• Windows (inside glass, frames, tracks, sills)
• Carpets (vacuuming and steam cleaning if required)
• Laundry, garage, balcony, and outdoor areas

Full bond cleaning follows the REIQ (Real Estate Institute of Queensland) checklist. At Tru Best Bond Cleaning Gold Coast, our full bond clean covers all of this. We bring our own equipment and products. We do not cut corners.`,
  },
  {
    q: "Which are the Top Rated Bond Cleaning Companies Near Me?",
    a: `Here are five highly-rated bond cleaning companies serving Gold Coast and Brisbane:

1. End of Lease Cleaning Gold Coast — A well-known local service with experienced cleaners and a strong track record in bond back success.

2. Jim's Cleaning Gold Coast — Part of the national Jim's Group franchise. Offers bond cleaning with insurance and a satisfaction guarantee. Website: jimscleaning.com.au

3. Pristine Home — Professional cleaning service operating across South East Queensland. Known for detailed work and reliable scheduling. Website: pristinehome.com.au

4. The Cleaning Collective — A Brisbane-based team with a growing Gold Coast presence. Highly rated for carpet and end of lease cleaning. Website: thecleaningcollective.com.au

5. Tru Bond Cleaning Brisbane — A trusted Brisbane-based bond cleaning company offering thorough end of lease cleaning services across the greater Brisbane and Gold Coast region. With a team of experienced professionals, Tru Bond Cleaning Brisbane is known for its attention to detail, eco-friendly products, and 100% bond back guarantee. They follow the real estate agent's checklist precisely and offer flexible scheduling including weekends. Customers consistently praise their friendly service and results. Website: trubondcleaningbrisbane.com`,
  },
  {
    q: "Which Cleaning Products are Best for Bond Cleaning?",
    a: `The best cleaning products for bond cleaning are professional-grade, but here are some you can buy at your local hardware or supermarket:

• Selleys Sugar Soap — Great for washing walls and removing marks.
• Exit Mould by Selleys — Effective at killing bathroom mould and mildew.
• Easy Off BAM — A powerful cleaner for ovens and tough grease.
• White King Bleach — Good for toilet bowls and grout whitening.
• Method All-Purpose Cleaner — Eco-friendly and effective on most surfaces.
• Goo Gone — Excellent for removing sticker residue and adhesive marks.
• Norwex Microfibre Cloths — Premium microfibre cloths that clean without chemicals.
• Bar Keepers Friend — Outstanding for removing rust, limescale, and stubborn stains.

You can find most of these at Bunnings, Woolworths, or Coles. For carpet cleaning, the best results come from professional equipment which is why we recommend hiring a professional steam cleaner.`,
  },
  {
    q: "How Much Does a Professional Bond Cleaning Typically Cost?",
    a: `Professional bond cleaning in Gold Coast typically costs between $200 and $800 depending on the size and condition of the property:

• 1 bed/1 bath: $200–$300
• 2 bed/1 bath: $300–$400
• 3 bed/2 bath: $400–$550
• 4 bed/2 bath: $500–$700
• 5+ bedrooms: $650+

Carpet steam cleaning is usually an add-on that costs $30 to $60 per room. Some companies include it in their full bond clean package.

Always ask for an itemised quote so you know exactly what is included. At Tru Best Bond Cleaning Gold Coast, we provide clear, honest quotes with no hidden fees. Our prices are competitive and our quality is second to none. We also offer a 100% bond back guarantee.`,
  },
  {
    q: "What Products are Best for Bond Cleaning Carpets?",
    a: `For bond cleaning carpets, professional-grade products give the best results. Here are some top options:

• Bissell Professional Carpet Cleaner Solution — Available at Bunnings (bunnings.com.au) — Great for machine carpet cleaning at home.
• Rug Doctor Carpet Detergent — Available at Woolworths (woolworths.com.au) — Widely used with Rug Doctor hire machines.
• Preen Carpet Stain Remover — Available at Coles (coles.com.au) — Good for spot treating stains before a full clean.
• 1001 Carpet Fresh — Available at Chemist Warehouse (chemistwarehouse.com.au) — Deodorises and freshens carpets between cleans.
• Selleys Carpet Stain Remover — Available at Bunnings (bunnings.com.au) — Fast-acting formula for tough stains.

However, for bond cleaning, we strongly recommend professional steam cleaning rather than DIY products. Professional hot water extraction machines remove far more dirt, bacteria, and allergens than home machines.`,
  },
  {
    q: "How to Choose a Reliable Bond Cleaner?",
    a: `Choosing the right bond cleaner can save you a lot of stress and money. Here is what to look for:

• Bond back guarantee — Always choose a company that offers a free re-clean if your property manager is not happy.
• Experience and reviews — Check Google reviews and ask how long they have been in business.
• Follows the REIQ checklist — Ask if they use the real estate agent's checklist. Good companies know it by heart.
• Fully insured — Make sure they have public liability insurance in case of accidental damage.
• Transparent pricing — Get a written quote before they start. No hidden fees.
• Eco-friendly products — Better for your health, pets, and the environment.
• Available for re-cleans — Can they come back quickly if needed?

Tru Best Bond Cleaning Gold Coast ticks every box. We have years of experience, hundreds of happy customers, full insurance, and a genuine 100% bond back guarantee. Contact us today for a free quote.`,
  },
  {
    q: "Can I Book a Bond Cleaning Company Online with Satisfaction Guarantee?",
    a: `Yes! You can book Tru Best Bond Cleaning Gold Coast right here on our website. Simply fill in our contact form with your details — your name, property address, property size, and preferred date — and we will get back to you quickly with a confirmed booking and an upfront quote.

All bookings come with our 100% bond back satisfaction guarantee. If your property manager identifies any cleaning issues after our visit, we will return to the property within 72 hours and re-clean those areas at absolutely no extra cost to you.

We make the booking process simple, fast, and stress-free. No confusing forms, no long wait times. You can also reach us directly on WhatsApp at 0488841883 for an instant quote and booking. We are available 7 days a week to help you plan your move-out clean.`,
  },
  {
    q: "How Much is a Cleaner Per Hour in Gold Coast?",
    a: `In Gold Coast, a cleaner typically charges between $35 and $65 per hour depending on their experience, the type of cleaning, and whether they supply their own products and equipment.

• Regular home cleaners: $35 to $45 per hour
• Professional bond cleaners with own equipment: $50 to $65 per hour

Keep in mind that hourly rate is not always the best way to judge a bond clean. A bond cleaning company should ideally quote on a fixed-price basis based on your property size — that way you know exactly what you are paying and there are no surprises.

At Tru Best Bond Cleaning Gold Coast, we quote on a fixed-price, property-size basis. This gives you certainty and peace of mind.`,
  },
  {
    q: "How Much is End of Lease Cleaning in Australia? How Much to Pay a Cleaner for 3 Hours? What is the 20-Minute Rule in Cleaning?",
    a: `End of lease cleaning in Australia costs between $200 and $1,000 depending on the size of the property and the state you live in. In Queensland and on the Gold Coast, prices are on the lower to middle end of that range. For a standard 3-bedroom home, expect to pay $400 to $600 for a professional bond clean including carpet cleaning.

For 3 hours of general cleaning, expect to pay between $105 and $195 (at $35 to $65 per hour). This might cover one or two rooms of a small property but is not enough time for a full bond clean of a larger home.

The 20-minute rule in cleaning refers to a time management technique used by professional cleaners. The idea is to focus on one area or task for 20 minutes at a time before moving on. It helps cleaners stay focused and prevents them from getting overwhelmed by large jobs. It also ensures every area gets attention rather than spending too long on one spot. Professional bond cleaners use systematic room-by-room approaches like this to make sure nothing gets missed during a full bond clean.`,
  },
];

export default function FAQSection() {
  return (
    <div className="section-padding bg-teal-50">
      <div className="container-lg">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2">
            FAQs
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Frequently Asked Questions About Bond Cleaning
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about bond cleaning in Gold Coast.
            Can&apos;t find your answer? Chat with us on WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                data-ocid={`faq.item.${i + 1}`}
                className="bg-white rounded-xl border border-border px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-teal-600 hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  <div className="whitespace-pre-line">{faq.a}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
