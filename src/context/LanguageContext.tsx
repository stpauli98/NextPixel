import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Tipovi jezika koje podržavamo
type Language = 'sr' | 'en' | 'de';

// Sučelje za kontekst jezika
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<string, string>>;
}

// Prijevodi za srpski jezik
const srTranslations = {
  // Navigacija
  'nav.home': 'Početna',
  'nav.about': 'O nama',
  'nav.services': 'Usluge',
  'nav.portfolio': 'Portfolio',
  'nav.contact': 'Kontakt',
  'nav.contactUs': 'Kontaktirajte nas',
  
  // O nama sekcija
  'about.title': 'Ko smo mi',
  'about.subtitle': 'Digitalna agencija sa strašću za inovacije',
  'about.description': 'NextPixel je digitalna agencija koja se bavi izradom web stranica, web shopova, SEO optimizacijom, održavanjem web sajtova, kao i razvojem softverskih rješenja po zahtjevu klijenata.',
  'about.history': 'Od 2015. godine posvećeni smo stvaranju digitalnih rješenja koja pomažu našim klijentima da ostvare svoje poslovne ciljeve. Naš pristup kombinuje tehničku stručnost, kreativnost i duboko razumijevanje poslovnih potreba naših klijenata.',
  'about.philosophy': 'Vjerujemo da uspješna digitalna rješenja moraju biti ne samo tehnički izvrsna, već i prilagođena korisnicima, estetski privlačna i optimizovana za postizanje poslovnih rezultata.',
  
  // Značajke
  'features.expertise.title': 'Stručni tim',
  'features.expertise.description': 'Naš tim stručnjaka ima višegodišnje iskustvo u razvoju web i softverskih rješenja.',
  'features.userFocus.title': 'Korisnički fokus',
  'features.userFocus.description': 'Svaki projekat prilagođavamo specifičnim potrebama klijenata i njihovih korisnika.',
  'features.fastDelivery.title': 'Brza isporuka',
  'features.fastDelivery.description': 'Poštujemo rokove i osiguravamo brzu implementaciju projekata bez kompromisa u kvaliteti.',
  'features.quality.title': 'Kvalitet',
  'features.quality.description': 'Koristimo najnovije tehnologije i najbolje prakse za razvoj visokokvalitetnih rješenja.',
  
  // Hero sekcija
  'hero.title': 'Digitalna rješenja za moderno poslovanje',
  'hero.subtitle': 'Kreiramo web stranice i softverska rješenja koja pokreću vaš biznis. Naš tim stručnjaka posvećen je stvaranju inovativnih digitalnih rješenja koja donose rezultate.',
  'hero.services': 'Naše usluge',
  'hero.contact': 'Kontaktirajte nas',
  'hero.learnMore': 'Saznajte više',
  
  // Usluge sekcija
  'services.title': 'Naše usluge',
  'services.subtitle': 'Pružamo širok spektar digitalnih usluga kako bismo pomogli vašem biznisu da raste i napreduje u digitalnom svijetu.',
  'services.requestQuote': 'Zatražite ponudu',
  'services.webDesign.title': 'Web dizajn',
  'services.webDesign.description': 'Kreiramo vizuelno atraktivne i funkcionalne web stranice koje ostavljaju snažan utisak na posjetioce.',
  'services.ecommerce.title': 'E-commerce rješenja',
  'services.ecommerce.description': 'Razvijamo online prodavnice koje povećavaju prodaju i pružaju izvrsno korisničko iskustvo.',
  'services.seo.title': 'SEO optimizacija',
  'services.seo.description': 'Optimizujemo vaš sajt za pretraživače kako biste bili vidljivi potencijalnim klijentima.',
  'services.maintenance.title': 'Održavanje web stranica',
  'services.maintenance.description': 'Brinemo o vašoj web stranici, osiguravajući da je uvijek sigurna, ažurna i funkcionalna.',
  'services.development.title': 'Razvoj softvera',
  'services.development.description': 'Razvijamo prilagođena softverska rješenja koja automatizuju procese i povećavaju efikasnost.',
  'services.responsive.title': 'Responzivni dizajn',
  'services.responsive.description': 'Osiguravamo da vaša web stranica izgleda i funkcioniše savršeno na svim uređajima.',
  
  // Portfolio sekcija
  'portfolio.title': 'Naši radovi',
  'portfolio.subtitle': 'Pogledajte neke od naših najuspješnijih projekata i otkrijte šta možemo učiniti za vas.',
  'portfolio.startProject': 'Započnite projekat',
  'portfolio.category.all': 'sve',
  'portfolio.category.webDesign': 'web-dizajn',
  'portfolio.category.webShop': 'web-shop',
  'portfolio.category.seo': 'seo',
  'portfolio.category.software': 'softver',
  'portfolio.project1.title': 'E-commerce platforma',
  'portfolio.project1.description': 'Razvoj moderne e-commerce platforme sa integriranim sistemom plaćanja i upravljanjem zalihama.',
  'portfolio.project2.title': 'Korporativna web stranica',
  'portfolio.project2.description': 'Dizajn i razvoj responzivne korporativne web stranice sa naprednim funkcionalnostima.',
  'portfolio.project3.title': 'Aplikacija za upravljanje projektima',
  'portfolio.project3.description': 'Razvoj prilagođene aplikacije za upravljanje projektima i timovima.',
  'portfolio.project4.title': 'SEO optimizacija',
  'portfolio.project4.description': 'Implementacija SEO strategije koja je povećala organsku posjećenost za 150%.',
  'portfolio.project5.title': 'Mobilna aplikacija',
  'portfolio.project5.description': 'Razvoj mobilne aplikacije za iOS i Android platforme.',
  'portfolio.project6.title': 'Redizajn web stranice',
  'portfolio.project6.description': 'Kompletan redizajn postojeće web stranice sa fokusom na korisničko iskustvo.',
  
  // Kontakt sekcija
  'contact.title': 'Kontaktirajte nas',
  'contact.subtitle': 'Imate pitanje ili želite započeti projekat? Javite nam se i odgovorićemo vam u najkraćem mogućem roku.',
  'contact.sendMessage': 'Pošaljite nam poruku',
  'contact.name': 'Ime i prezime',
  'contact.email': 'Email adresa',
  'contact.subject': 'Predmet',
  'contact.message': 'Vaša poruka',
  'contact.send': 'Pošalji poruku',
  'contact.sending': 'Slanje...',
  'contact.success': 'Hvala na poruci! Kontaktiraćemo vas uskoro.',
  'contact.info.email': 'Email',
  'contact.info.phone': 'Telefon',
  'contact.info.address': 'Adresa',
  'contact.info.addressDetails': 'Jovana Ducica 15, 78499 Gradiska, Bosna i Hercegovina',
  'contact.info.title': 'Kontakt informacije',
  'contact.workingHours.title': 'Radno vrijeme',
  'contact.workingHours.weekdays': 'Ponedjeljak - Petak: 9:00 - 17:00',
  'contact.workingHours.weekend': 'Subota - Nedjelja: Zatvoreno',
  'contact.followUs': 'Pratite nas',
  
  // Zašto odabrati nas sekcija
  'whyChooseUs.title': 'Zašto odabrati nas',
  'whyChooseUs.subtitle': 'Naša misija je pomoći vašem biznisu da raste kroz digitalne inovacije. Evo zašto klijenti biraju NextPixel.',
  'whyChooseUs.talkAboutProject': 'Razgovarajmo o vašem projektu',
  'whyChooseUs.creativity.title': 'Kreativnost',
  'whyChooseUs.creativity.description': 'Donosimo svježe i inovativne ideje koje će vašu web stranicu učiniti jedinstvenom.',
  'whyChooseUs.fastDelivery.title': 'Brza isporuka',
  'whyChooseUs.fastDelivery.description': 'Poštujemo rokove i osiguravamo brzu isporuku projekata bez kompromisa u kvaliteti.',
  'whyChooseUs.expertTeam.title': 'Stručni tim',
  'whyChooseUs.expertTeam.description': 'Naš tim čine stručnjaci sa dugogodišnjim iskustvom u digitalnoj industriji.',
  'whyChooseUs.support.title': 'Podrška 24/7',
  'whyChooseUs.support.description': 'Uvijek smo dostupni za sva vaša pitanja i pružamo kontinuiranu podršku.',
  'whyChooseUs.deadlines.title': 'Poštovanje rokova',
  'whyChooseUs.deadlines.description': 'Posvećeni smo isporuci projekata na vrijeme i u skladu sa dogovorenim budžetom.',
  'whyChooseUs.quality.title': 'Kvalitet i pouzdanost',
  'whyChooseUs.quality.description': 'Naša rješenja su testirana i optimizovana za najbolje performanse i korisničko iskustvo.',
  'whyChooseUs.results.title': 'Fokus na rezultate',
  'whyChooseUs.results.description': 'Razvijamo rješenja koja donose mjerljive poslovne rezultate i povrat investicije.',
  
  // Footer
  'footer.description': 'Razvijamo digitalna rješenja koja pokreću vaš biznis. Naš tim stručnjaka posvećen je stvaranju inovativnih web rješenja koja donose rezultate.',
  'footer.quickLinks.title': 'Brzi linkovi',
  'footer.services.title': 'Naše usluge',
  'footer.services.webDevelopment': 'Web development',
  'footer.contact.address': 'Jovana Ducica 15, 78499 Gradiska, Bosna i Hercegovina',
  'footer.copyright': 'Sva prava zadržana.',
  'footer.privacyPolicy': 'Politika privatnosti',
  'footer.terms': 'Uslovi korištenja'
};

// Prijevodi za engleski jezik
const enTranslations = {
  // Navigation
  'nav.home': 'Home',
  'nav.about': 'About Us',
  'nav.services': 'Services',
  'nav.portfolio': 'Portfolio',
  'nav.contact': 'Contact',
  'nav.contactUs': 'Contact Us',
  
  // About section
  'about.title': 'Who We Are',
  'about.subtitle': 'Digital Agency with a Passion for Innovation',
  'about.description': 'NextPixel is a digital agency specializing in website development, e-commerce solutions, SEO optimization, website maintenance, and custom software development tailored to client requirements.',
  'about.history': 'Since 2015, we have been dedicated to creating digital solutions that help our clients achieve their business goals. Our approach combines technical expertise, creativity, and a deep understanding of our clients\'s business needs.',
  'about.philosophy': 'We believe that successful digital solutions must not only be technically excellent, but also user-friendly, aesthetically appealing, and optimized to achieve business results.',
  
  // Features
  'features.expertise.title': 'Expert Team',
  'features.expertise.description': 'Our team of experts has years of experience in web and software development.',
  'features.userFocus.title': 'User Focus',
  'features.userFocus.description': 'We customize each project to the specific needs of clients and their users.',
  'features.fastDelivery.title': 'Fast Delivery',
  'features.fastDelivery.description': 'We respect deadlines and ensure quick implementation of projects without compromising quality.',
  'features.quality.title': 'Quality',
  'features.quality.description': 'We use the latest technologies and best practices to develop high-quality solutions.',
  
  // Hero section
  'hero.title': 'Digital Solutions for Modern Business',
  'hero.subtitle': 'We create websites and software solutions that drive your business. Our team of experts is dedicated to creating innovative digital solutions that deliver results.',
  'hero.services': 'Our Services',
  'hero.contact': 'Contact Us',
  'hero.learnMore': 'Learn More',
  
  // Services section
  'services.title': 'Our Services',
  'services.subtitle': 'We provide a wide range of digital services to help your business grow and thrive in the digital world.',
  'services.requestQuote': 'Request a Quote',
  'services.webDesign.title': 'Web Design',
  'services.webDesign.description': 'We create visually attractive and functional websites that make a strong impression on visitors.',
  'services.ecommerce.title': 'E-commerce Solutions',
  'services.ecommerce.description': 'We develop online stores that increase sales and provide excellent user experience.',
  'services.seo.title': 'SEO Optimization',
  'services.seo.description': 'We optimize your site for search engines to make you visible to potential clients.',
  'services.maintenance.title': 'Website Maintenance',
  'services.maintenance.description': 'We take care of your website, ensuring it is always secure, up-to-date, and functional.',
  'services.development.title': 'Software Development',
  'services.development.description': 'We develop custom software solutions that automate processes and increase efficiency.',
  'services.responsive.title': 'Responsive Design',
  'services.responsive.description': 'We ensure your website looks and functions perfectly on all devices.',
  
  // Portfolio section
  'portfolio.title': 'Our Works',
  'portfolio.subtitle': 'Take a look at some of our most successful projects and discover what we can do for you.',
  'portfolio.startProject': 'Start a Project',
  'portfolio.category.all': 'all',
  'portfolio.category.webDesign': 'web-design',
  'portfolio.category.webShop': 'web-shop',
  'portfolio.category.seo': 'seo',
  'portfolio.category.software': 'software',
  'portfolio.project1.title': 'E-commerce Platform',
  'portfolio.project1.description': 'Development of a modern e-commerce platform with integrated payment system and inventory management.',
  'portfolio.project2.title': 'Corporate Website',
  'portfolio.project2.description': 'Design and development of a responsive corporate website with advanced functionalities.',
  'portfolio.project3.title': 'Project Management Application',
  'portfolio.project3.description': 'Development of a custom project management application for teams.',
  'portfolio.project4.title': 'SEO Optimization',
  'portfolio.project4.description': 'Implementation of an SEO strategy that increased organic traffic by 150%.',
  'portfolio.project5.title': 'Mobile Application',
  'portfolio.project5.description': 'Development of a mobile application for iOS and Android platforms.',
  'portfolio.project6.title': 'Website Redesign',
  'portfolio.project6.description': 'Complete redesign of an existing website with a focus on user experience.',
  
  // Contact section
  'contact.title': 'Contact Us',
  'contact.subtitle': 'Have a question or want to start a project? Get in touch with us and we will respond as soon as possible.',
  'contact.sendMessage': 'Send us a message',
  'contact.name': 'Full Name',
  'contact.email': 'Email Address',
  'contact.subject': 'Subject',
  'contact.message': 'Your Message',
  'contact.send': 'Send Message',
  'contact.sending': 'Sending...',
  'contact.success': 'Thank you for your message! We will contact you soon.',
  'contact.info.email': 'Email',
  'contact.info.phone': 'Phone',
  'contact.info.address': 'Address',
  'contact.info.addressDetails': 'Jovana Ducica 15, 78499 Gradiska, Bosna i Hercegovina',
  'contact.info.title': 'Contact Information',
  'contact.workingHours.title': 'Working Hours',
  'contact.workingHours.weekdays': 'Monday - Friday: 9:00 - 17:00',
  'contact.workingHours.weekend': 'Saturday - Sunday: Closed',
  'contact.followUs': 'Follow Us',
  
  // Why Choose Us section
  'whyChooseUs.title': 'Why Choose Us',
  'whyChooseUs.subtitle': 'Our mission is to help your business grow through digital innovation. Here is why clients choose NextPixel.',
  'whyChooseUs.talkAboutProject': 'Let\'s talk about your project',
  'whyChooseUs.creativity.title': 'Creativity',
  'whyChooseUs.creativity.description': 'We bring fresh and innovative ideas that will make your website unique.',
  'whyChooseUs.fastDelivery.title': 'Fast Delivery',
  'whyChooseUs.fastDelivery.description': 'We respect deadlines and ensure quick delivery of projects without compromising quality.',
  'whyChooseUs.expertTeam.title': 'Expert Team',
  'whyChooseUs.expertTeam.description': 'Our team consists of experts with years of experience in the digital industry.',
  'whyChooseUs.support.title': '24/7 Support',
  'whyChooseUs.support.description': 'We are always available for all your questions and provide continuous support.',
  'whyChooseUs.deadlines.title': 'Meeting Deadlines',
  'whyChooseUs.deadlines.description': 'We are committed to delivering projects on time and in accordance with the agreed budget.',
  'whyChooseUs.quality.title': 'Quality and Reliability',
  'whyChooseUs.quality.description': 'Our solutions are tested and optimized for the best performance and user experience.',
  'whyChooseUs.results.title': 'Focus on Results',
  'whyChooseUs.results.description': 'We develop solutions that bring measurable business results and return on investment.',
  
  // Footer
  'footer.description': 'We develop digital solutions that drive your business. Our team of experts is dedicated to creating innovative web solutions that deliver results.',
  'footer.quickLinks.title': 'Quick Links',
  'footer.services.title': 'Our Services',
  'footer.services.webDevelopment': 'Web Development',
  'footer.contact.address': 'Address 123, 71000 Sarajevo, Bosnia and Herzegovina',
  'footer.copyright': 'All rights reserved.',
  'footer.privacyPolicy': 'Privacy Policy',
  'footer.terms': 'Terms of Use'
};

// Prijevodi za njemački jezik
const deTranslations = {
  // Navigation
  'nav.home': 'Startseite',
  'nav.about': 'Über uns',
  'nav.services': 'Dienstleistungen',
  'nav.portfolio': 'Portfolio',
  'nav.contact': 'Kontakt',
  'nav.contactUs': 'Kontaktieren Sie uns',
  
  // About section
  'about.title': 'Wer wir sind',
  'about.subtitle': 'Digitalagentur mit Leidenschaft für Innovation',
  'about.description': 'NextPixel ist eine Digitalagentur, die sich auf Webentwicklung, E-Commerce-Lösungen, SEO-Optimierung, Website-Wartung und kundenspezifische Softwareentwicklung spezialisiert hat.',
  'about.history': 'Seit 2015 widmen wir uns der Entwicklung digitaler Lösungen, die unseren Kunden helfen, ihre Geschäftsziele zu erreichen. Unser Ansatz kombiniert technisches Fachwissen, Kreativität und ein tiefes Verständnis der Geschäftsanforderungen unserer Kunden.',
  'about.philosophy': 'Wir glauben, dass erfolgreiche digitale Lösungen nicht nur technisch hervorragend sein müssen, sondern auch benutzerfreundlich, ästhetisch ansprechend und auf die Erzielung von Geschäftsergebnissen optimiert sein sollten.',
  
  // Features
  'features.expertise.title': 'Expertenteam',
  'features.expertise.description': 'Unser Expertenteam verfügt über jahrelange Erfahrung in der Web- und Softwareentwicklung.',
  'features.userFocus.title': 'Benutzerfokus',
  'features.userFocus.description': 'Wir passen jedes Projekt an die spezifischen Bedürfnisse der Kunden und ihrer Benutzer an.',
  'features.fastDelivery.title': 'Schnelle Lieferung',
  'features.fastDelivery.description': 'Wir respektieren Fristen und gewährleisten eine schnelle Umsetzung von Projekten ohne Qualitätseinbußen.',
  'features.quality.title': 'Qualität',
  'features.quality.description': 'Wir verwenden die neuesten Technologien und Best Practices, um hochwertige Lösungen zu entwickeln.',
  
  // Hero section
  'hero.title': 'Digitale Lösungen für modernes Business',
  'hero.subtitle': 'Wir erstellen Websites und Softwarelösungen, die Ihr Unternehmen voranbringen. Unser Expertenteam widmet sich der Schaffung innovativer digitaler Lösungen, die Ergebnisse liefern.',
  'hero.services': 'Unsere Dienstleistungen',
  'hero.contact': 'Kontaktieren Sie uns',
  'hero.learnMore': 'Mehr erfahren',
  
  // Services section
  'services.title': 'Unsere Dienstleistungen',
  'services.subtitle': 'Wir bieten ein breites Spektrum an digitalen Dienstleistungen, um Ihrem Unternehmen zu helfen, in der digitalen Welt zu wachsen und zu gedeihen.',
  'services.requestQuote': 'Angebot anfordern',
  'services.webDesign.title': 'Webdesign',
  'services.webDesign.description': 'Wir erstellen visuell ansprechende und funktionale Websites, die einen starken Eindruck bei den Besuchern hinterlassen.',
  'services.ecommerce.title': 'E-Commerce-Lösungen',
  'services.ecommerce.description': 'Wir entwickeln Online-Shops, die den Umsatz steigern und ein hervorragendes Benutzererlebnis bieten.',
  'services.seo.title': 'SEO-Optimierung',
  'services.seo.description': 'Wir optimieren Ihre Website für Suchmaschinen, damit Sie für potenzielle Kunden sichtbar sind.',
  'services.maintenance.title': 'Website-Wartung',
  'services.maintenance.description': 'Wir kümmern uns um Ihre Website und stellen sicher, dass sie immer sicher, aktuell und funktional ist.',
  'services.development.title': 'Softwareentwicklung',
  'services.development.description': 'Wir entwickeln maßgeschneiderte Softwarelösungen, die Prozesse automatisieren und die Effizienz steigern.',
  'services.responsive.title': 'Responsives Design',
  'services.responsive.description': 'Wir stellen sicher, dass Ihre Website auf allen Geräten perfekt aussieht und funktioniert.',
  
  // Portfolio section
  'portfolio.title': 'Unsere Arbeiten',
  'portfolio.subtitle': 'Sehen Sie sich einige unserer erfolgreichsten Projekte an und entdecken Sie, was wir für Sie tun können.',
  'portfolio.startProject': 'Projekt starten',
  'portfolio.category.all': 'alle',
  'portfolio.category.webDesign': 'webdesign',
  'portfolio.category.webShop': 'webshop',
  'portfolio.category.seo': 'seo',
  'portfolio.category.software': 'software',
  'portfolio.project1.title': 'E-Commerce-Plattform',
  'portfolio.project1.description': 'Entwicklung einer modernen E-Commerce-Plattform mit integriertem Zahlungssystem und Bestandsverwaltung.',
  'portfolio.project2.title': 'Unternehmenswebsite',
  'portfolio.project2.description': 'Design und Entwicklung einer responsiven Unternehmenswebsite mit erweiterten Funktionen.',
  'portfolio.project3.title': 'Projektmanagement-Anwendung',
  'portfolio.project3.description': 'Entwicklung einer maßgeschneiderten Projektmanagement-Anwendung für Teams.',
  'portfolio.project4.title': 'SEO-Optimierung',
  'portfolio.project4.description': 'Implementierung einer SEO-Strategie, die den organischen Traffic um 150% erhöht hat.',
  'portfolio.project5.title': 'Mobile Anwendung',
  'portfolio.project5.description': 'Entwicklung einer mobilen Anwendung für iOS- und Android-Plattformen.',
  'portfolio.project6.title': 'Website-Redesign',
  'portfolio.project6.description': 'Komplettes Redesign einer bestehenden Website mit Fokus auf Benutzererfahrung.',
  
  // Contact section
  'contact.title': 'Kontaktieren Sie uns',
  'contact.subtitle': 'Haben Sie eine Frage oder möchten Sie ein Projekt starten? Kontaktieren Sie uns und wir werden uns so schnell wie möglich bei Ihnen melden.',
  'contact.sendMessage': 'Senden Sie uns eine Nachricht',
  'contact.name': 'Vollständiger Name',
  'contact.email': 'E-Mail-Adresse',
  'contact.subject': 'Betreff',
  'contact.message': 'Ihre Nachricht',
  'contact.send': 'Nachricht senden',
  'contact.sending': 'Wird gesendet...',
  'contact.success': 'Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.',
  'contact.info.email': 'E-Mail',
  'contact.info.phone': 'Telefon',
  'contact.info.address': 'Adresse',
  'contact.info.addressDetails': 'Jovana Ducica 15, 78499 Gradiska, Bosna i Hercegovina',
  'contact.info.title': 'Kontaktinformationen',
  'contact.workingHours.title': 'Öffnungszeiten',
  'contact.workingHours.weekdays': 'Montag - Freitag: 9:00 - 17:00',
  'contact.workingHours.weekend': 'Samstag - Sonntag: Geschlossen',
  'contact.followUs': 'Folgen Sie uns',
  
  // Why Choose Us section
  'whyChooseUs.title': 'Warum uns wählen',
  'whyChooseUs.subtitle': 'Unsere Mission ist es, Ihrem Unternehmen durch digitale Innovation zu Wachstum zu verhelfen. Hier ist, warum Kunden NextPixel wählen.',
  'whyChooseUs.talkAboutProject': 'Lassen Sie uns über Ihr Projekt sprechen',
  'whyChooseUs.creativity.title': 'Kreativität',
  'whyChooseUs.creativity.description': 'Wir bringen frische und innovative Ideen, die Ihre Website einzigartig machen werden.',
  'whyChooseUs.fastDelivery.title': 'Schnelle Lieferung',
  'whyChooseUs.fastDelivery.description': 'Wir respektieren Fristen und gewährleisten eine schnelle Lieferung von Projekten ohne Qualitätseinbußen.',
  'whyChooseUs.expertTeam.title': 'Expertenteam',
  'whyChooseUs.expertTeam.description': 'Unser Team besteht aus Experten mit langjähriger Erfahrung in der digitalen Branche.',
  'whyChooseUs.support.title': '24/7 Support',
  'whyChooseUs.support.description': 'Wir sind immer für all Ihre Fragen verfügbar und bieten kontinuierliche Unterstützung.',
  'whyChooseUs.deadlines.title': 'Einhaltung von Fristen',
  'whyChooseUs.deadlines.description': 'Wir sind bestrebt, Projekte termingerecht und gemäß dem vereinbarten Budget zu liefern.',
  'whyChooseUs.quality.title': 'Qualität und Zuverlässigkeit',
  'whyChooseUs.quality.description': 'Unsere Lösungen werden getestet und für beste Leistung und Benutzererfahrung optimiert.',
  'whyChooseUs.results.title': 'Fokus auf Ergebnisse',
  'whyChooseUs.results.description': 'Wir entwickeln Lösungen, die messbare Geschäftsergebnisse und Return on Investment bringen.',
  
  // Footer
  'footer.description': 'Wir entwickeln digitale Lösungen, die Ihr Unternehmen voranbringen. Unser Expertenteam ist darauf spezialisiert, innovative Web-Lösungen zu schaffen, die Ergebnisse liefern.',
  'footer.quickLinks.title': 'Schnelllinks',
  'footer.services.title': 'Unsere Dienstleistungen',
  'footer.services.webDevelopment': 'Webentwicklung',
  'footer.contact.address': 'Jovana Ducica 15, 78499 Gradiska, Bosna i Hercegovina',
  'footer.copyright': 'Alle Rechte vorbehalten.',
  'footer.privacyPolicy': 'Datenschutzrichtlinie',
  'footer.terms': 'Nutzungsbedingungen'
};

// Svi prijevodi
const allTranslations = {
  sr: srTranslations,
  en: enTranslations,
  de: deTranslations
};

// Stvaranje konteksta
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider komponenta
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Dohvati spremljeni jezik ili koristi srpski kao zadani
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return (savedLanguage as Language) || 'sr';
  });

  // Funkcija za promjenu jezika
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
  };

  // Efekt koji se pokreće kada se promijeni jezik
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        translations: allTranslations
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Hook za korištenje konteksta jezika
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Helper funkcija za prijevod
export const useTranslate = () => {
  const { language, translations } = useLanguage();
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return { t };
};
