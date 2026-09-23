/** Preencha os campos reais antes de disponibilizar reservas. */
export const site = {
  name: "Chácaras Beira da Mata",
  tagline: "Um convite para viver mais perto da natureza.",
  location: "Localização a confirmar",
  whatsapp: "", // Exemplo: "5535999999999"; somente números com código do país.
  whatsappMessage: "Olá! Gostaria de saber mais sobre as Chácaras Beira da Mata.",
};
export const contactUrl = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : "#contato";
export const photos = {
  hero: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=85",
  landscape: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  forest: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
  leisure: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
};
