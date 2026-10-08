const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// English/Spanish translations. We keep the content in the page itself rather
// than relying on an automatic translation widget, so the medical wording stays controlled.
const translations = {
  en: {
    nav: ["Home","About Us","Exams","GoodRx Prescription Savings","Contact Lenses","Insurance","Store Hours / Location","Eye Health Blog","Book Online","Book Online"],
    heroEyebrow: "Sight 4 Eyes Optical · Franklin, Wisconsin",
    heroTitle: "Clear vision.<br><em>Personal care.</em>",
    heroText: "Count on Sight 4 Eyes Optical for the eye care you need. Whether you need new glasses or require treatment for a serious eye condition such as glaucoma, we provide the best eye care possible.",
    heroBook: "Book Online <span>→</span>", heroExams: "Explore Eye Exams", heroNote: "Walk-ins are welcome and same-day appointments are available.",
    trust: [["Frames & Contacts","Designer brands at affordable prices"],["Eye Exams","Accurate prescriptions & eye care"],["Contact Lenses","A wide selection of leading brands"],["Most Glasses in 1 Hour","Ask us about available same-day glasses"]],
    framesEyebrow:"Frames & Contacts", framesTitle:"See well.<br><em>Look good.</em>",
    framesText:"We carry the designer brands that will give you the look you want at affordable prices. We also carry a large selection of contacts and can fit you with the most comfortable ones.", framesLearn:"Learn More <span>→</span>",
    aboutEyebrow:"About Us", aboutTitle:"Your excellent care.<br><em>Founded in experience.</em>",
    aboutIntro:"Rely on Sight 4 Eyes Optical for the excellent vision care you need. When it comes to something as complex and precious as your vision, trust none other than our experienced, trained, and skilled opticians.",
    aboutQuote:"“Whether you need a new prescription, or you have a serious medical condition affecting your vision – such as glaucoma – I apply the experience I’ve developed over the years to give you the finest vision care possible.”",
    aboutQuoteBy:"— Dr. James P. Wagner, OD", aboutSubhead:"Better Quality of Life through Healthy Vision",
    aboutSubtext:"Every day, I perform exams, diagnose problems, fit prescriptions and see that my patients get the results they want and deserve. But I know what I’m really doing is improving the quality of life for the people in my care. The quality of your vision impacts everything – from the things you need to do, to the things you love to do. Good vision is a must. This is why I chose to dedicate myself to optometry. I get tremendous satisfaction seeing the difference I make in my patients’ lives each and every day.",
    examsEyebrow:"Eye Exams", examsTitle:"Modern technology.<br>Personal attention.",
    examsIntro:"Sight 4 Eyes Optical continues to invest in the latest technology for our office. This enables us to provide you with the best and most convenient eye care possible.",
    examsCopy1:"Our systems allow us to reduce exam times and provide accurate prescriptions to our patients quickly.",
    examsCopy2:"Walk-ins are welcome and same-day appointments are available. We'll work with your insurance company and help you with your claim. Contact us today to schedule your appointment.",
    examsRoom:"First Preliminary Room", auto:"Auto refractor", autoText:"We first scan the eye to determine your prescription, the curves on the front of your eye, and determine the optical clarity of all the structures in your eye from front to back.",
    air:"Air puff", airText:"The second test measures the pressure in each of your eyes to determine if you have glaucoma.", retina:"Retina camera", retinaText:"This camera takes digital photographs of the back of your eye, the retina, and stores the images. For diabetics and patients with high blood pressure or glaucoma, this is very important.",
    examDisclaimer:"For patients who are at risk or who have glaucoma, macular degeneration, diabetic retinopathy, brain tumors, multiple sclerosis, high blood pressure, lupus, and other doctor-recommended patients may receive a second and third preliminary test.",
    contactsEyebrow:"Contact Lenses", contactsTitle:"Brands you<br><em>trust.</em>",
    contactsText:"Contacts and the types of lenses needed are as individual as our patients’ own eyes. We offer leading contact lenses including Acuvue, Air Optix, Precision 7, Total 30, Ultra and toric and multifocal options. Your vision and comfort are our top priority. Dr. Wagner and staff will help you find the right lenses for your needs.",
    contactsNoteTitle:"Need something not listed?", contactsNoteText:"Not all brands of contacts are listed. If you do not see the brand you wear, please contact us to check availability. We also carry toric lenses for the hard-to-fit eyes.",
    goodrxEyebrow:"GoodRx Prescription Savings", goodrxTitle:"Prescription savings,<br><em>kept easy to find.</em>", goodrxText:"The original site provides these prescription discount coupon files. We've kept them here, but the displayed coupon prices are historical and should be verified before use.",
    insuranceEyebrow:"Insurance", insuranceTitle:"We'll help you<br><em>with your claim.</em>", insuranceText:"We work with a variety of vision insurance plans and can help you understand your benefits and navigate your claim. Insurance networks can change, so please call us to confirm your current coverage before your appointment. VSP is out of network, but we can help you self-submit for out-of-network reimbursement.",
    bookingEyebrow:"Online Scheduling", bookingTitle:"Ready to see clearly?", bookingText:"Choose a convenient appointment time online. You can book an eye exam, an office visit, or a contact lens class.", bookingButton:"Book Your Appointment <span>→</span>",
    locationEyebrow:"Store Hours / Location", locationTitle:"Come see us<br><em>in Franklin.</em>", address:"Address", phone:"Phone", fax:"Fax", language:"Language", hours:"Normal Business Hours", call:"Call the Office", directions:"Get Directions", footerTag:"Great Care at Great Value", blogEyebrow:"Eye Health Education", blogTitle:"Learn more about<br><em>your vision.</em>", blogText:"Explore practical guides about glaucoma, cataracts, macular degeneration and diabetic retinopathy. New patient-education articles can be added each month.", blogButton:"Visit the Eye Health Blog <span>→</span>", heroWalkins:"Walk-ins welcome", heroGlasses:"Most glasses in 1 hour"
  },
  es: {
    nav: ["Inicio","Sobre Nosotros","Exámenes de la Vista","Ahorros de Recetas GoodRx","Lentes de Contacto","Seguros","Horario / Ubicación","Blog de Salud Visual","Reservar en Línea","Reservar en Línea"],
    heroEyebrow: "Sight 4 Eyes Optical · Franklin, Wisconsin",
    heroTitle: "Visión clara.<br><em>Atención personal.</em>",
    heroText: "Confíe en Sight 4 Eyes Optical para el cuidado de sus ojos. Ya sea que necesite lentes nuevos o tratamiento para una condición ocular seria como el glaucoma, le brindamos el mejor cuidado visual posible.",
    heroBook: "Reservar en Línea <span>→</span>", heroExams: "Ver Exámenes de la Vista", heroNote: "Aceptamos pacientes sin cita y ofrecemos citas para el mismo día.",
    trust: [["Armazones y Lentes","Marcas de diseñador a precios accesibles"],["Exámenes de la Vista","Recetas precisas y cuidado visual"],["Lentes de Contacto","Una amplia selección de marcas líderes"],["La mayoría de los lentes en 1 hora","Pregunte por las opciones disponibles el mismo día"]],
    framesEyebrow:"Armazones y Lentes", framesTitle:"Vea bien.<br><em>Luzca bien.</em>",
    framesText:"Ofrecemos marcas de diseñador para darle el estilo que desea a precios accesibles. También contamos con una amplia selección de lentes de contacto y podemos adaptarle los más cómodos.", framesLearn:"Más Información <span>→</span>",
    aboutEyebrow:"Sobre Nosotros", aboutTitle:"Excelente atención.<br><em>Experiencia que cuenta.</em>",
    aboutIntro:"Confíe en Sight 4 Eyes Optical para el excelente cuidado visual que necesita. Cuando se trata de algo tan complejo y valioso como su visión, confíe en nuestros optometristas experimentados, capacitados y profesionales.",
    aboutQuote:"“Ya sea que necesite una nueva receta o tenga una condición seria que afecte su visión —como el glaucoma— aplico la experiencia que he desarrollado a lo largo de los años para brindarle el mejor cuidado visual posible.”",
    aboutQuoteBy:"— Dr. James P. Wagner, OD", aboutSubhead:"Una mejor calidad de vida gracias a una visión saludable",
    aboutSubtext:"Cada día realizo exámenes, diagnostico problemas, adapto recetas y me aseguro de que mis pacientes obtengan los resultados que necesitan y merecen. Pero sé que lo que realmente hago es mejorar la calidad de vida de las personas que atiendo. La calidad de su visión influye en todo: desde las cosas que necesita hacer hasta las cosas que disfruta. Una buena visión es esencial. Por eso elegí dedicarme a la optometría. Me da una enorme satisfacción ver la diferencia que puedo hacer en la vida de mis pacientes cada día.",
    examsEyebrow:"Exámenes de la Vista", examsTitle:"Tecnología moderna.<br>Atención personal.",
    examsIntro:"Sight 4 Eyes Optical continúa invirtiendo en la tecnología más reciente para nuestra oficina. Esto nos permite ofrecerle el mejor cuidado visual de la manera más conveniente posible.",
    examsCopy1:"Nuestros sistemas nos permiten reducir el tiempo de los exámenes y proporcionar recetas precisas a nuestros pacientes rápidamente.",
    examsCopy2:"Aceptamos pacientes sin cita y ofrecemos citas para el mismo día. Trabajaremos con su compañía de seguros y le ayudaremos con su reclamación. Comuníquese con nosotros para programar su cita.",
    examsRoom:"Primera Sala de Evaluación", auto:"Autorrefractor", autoText:"Primero escaneamos el ojo para determinar su receta, las curvas de la parte frontal del ojo y la claridad óptica de todas las estructuras del ojo, de adelante hacia atrás.",
    air:"Prueba de aire", airText:"La segunda prueba mide la presión de cada ojo para determinar si presenta glaucoma.", retina:"Cámara de retina", retinaText:"Esta cámara toma fotografías digitales de la parte posterior del ojo, la retina, y guarda las imágenes. Para pacientes con diabetes, presión arterial alta o glaucoma, esto es muy importante.",
    examDisclaimer:"Los pacientes que están en riesgo o que tienen glaucoma, degeneración macular, retinopatía diabética, tumores cerebrales, esclerosis múltiple, presión arterial alta, lupus u otras condiciones indicadas por su médico pueden recibir una segunda y tercera prueba preliminar.",
    contactsEyebrow:"Lentes de Contacto", contactsTitle:"Marcas en las<br><em>que puede confiar.</em>",
    contactsText:"Los lentes de contacto y el tipo de lente que necesita son tan individuales como sus propios ojos. Ofrecemos marcas líderes como Acuvue, Air Optix, Precision 7, Total 30, Ultra y opciones tóricas y multifocales. Su visión y comodidad son nuestra prioridad. El Dr. Wagner y su equipo le ayudarán a encontrar los lentes adecuados para sus necesidades.",
    contactsNoteTitle:"¿No ve la marca que busca?", contactsNoteText:"No aparecen todas las marcas de lentes de contacto en esta lista. Si no ve la marca que usa, comuníquese con nosotros para verificar su disponibilidad. También ofrecemos lentes tóricos para ojos difíciles de adaptar.",
    goodrxEyebrow:"Ahorros de Recetas GoodRx", goodrxTitle:"Ahorros en recetas,<br><em>fáciles de encontrar.</em>", goodrxText:"El sitio original ofrece estos cupones de descuento para medicamentos recetados. Los hemos conservado aquí, pero los precios mostrados son históricos y deben verificarse antes de usarlos.",
    insuranceEyebrow:"Seguros", insuranceTitle:"Le ayudamos<br><em>con su reclamación.</em>", insuranceText:"Trabajamos con varios planes de seguro de la vista y podemos ayudarle a entender sus beneficios y gestionar su reclamación. Las redes pueden cambiar, así que llámenos para confirmar su cobertura actual antes de su cita. VSP está fuera de la red, pero podemos ayudarle a presentar su solicitud de reembolso fuera de la red.",
    bookingEyebrow:"Citas en Línea", bookingTitle:"¿Listo para ver con claridad?", bookingText:"Elija una hora conveniente para su cita en línea. Puede reservar un examen de la vista, una visita a la oficina o una clase de lentes de contacto.", bookingButton:"Reservar Su Cita <span>→</span>",
    locationEyebrow:"Horario / Ubicación", locationTitle:"Visítenos<br><em>en Franklin.</em>", address:"Dirección", phone:"Teléfono", fax:"Fax", language:"Idioma", hours:"Horario Normal", call:"Llamar a la Oficina", directions:"Cómo Llegar", footerTag:"Excelente Atención a un Gran Valor", blogEyebrow:"Educación sobre la Salud Visual", blogTitle:"Aprenda más sobre<br><em>su visión.</em>", blogText:"Explore guías prácticas sobre glaucoma, cataratas, degeneración macular y retinopatía diabética. Se pueden agregar nuevos artículos educativos cada mes.", blogButton:"Visitar el Blog de Salud Visual <span>→</span>", heroWalkins:"Se aceptan pacientes sin cita", heroGlasses:"La mayoría de los lentes en 1 hora"
  }
};

function setText(selector, value, index=0) {
  const nodes=document.querySelectorAll(selector); if(nodes[index]) nodes[index].innerHTML=value;
}
function setLanguage(lang){
  const t=translations[lang] || translations.en;
  document.documentElement.lang=lang;
  document.querySelectorAll('.nav a').forEach((a,i)=>{ if(t.nav[i]) a.textContent=t.nav[i]; });
  setText('.hero-copy .eyebrow',t.heroEyebrow); setText('.hero h1',t.heroTitle); setText('.hero-text',t.heroText); setText('.hero-actions .button-primary',t.heroBook); setText('.hero-actions .button-ghost',t.heroExams); setText('.hero-note', '<span class="dot"></span>'+t.heroNote);
  document.querySelectorAll('.trust-grid>div').forEach((el,i)=>{if(t.trust[i]){el.querySelector('strong').textContent=t.trust[i][0];el.querySelector('span').textContent=t.trust[i][1];}});
  setText('.frames-intro .eyebrow',t.framesEyebrow); setText('.frames-intro h2',t.framesTitle); setText('.frames-intro .two-column-intro>div:nth-child(2)>p',t.framesText); setText('.frames-intro .text-link',t.framesLearn);
  setText('.about .eyebrow',t.aboutEyebrow); setText('.about h2',t.aboutTitle); setText('.about-copy>p',t.aboutIntro); setText('.about blockquote',t.aboutQuote+'<cite>'+t.aboutQuoteBy+'</cite>'); setText('.about-subsection h3',t.aboutSubhead); setText('.about-subsection p',t.aboutSubtext);
  setText('.exams .eyebrow',t.examsEyebrow); setText('.exams h2',t.examsTitle); setText('.section-heading>p',t.examsIntro); setText('.exam-copy p',t.examsCopy1,0); setText('.exam-copy p',t.examsCopy2,1); setText('.exam-tests h3',t.examsRoom); setText('.test-item strong',t.auto,0); setText('.test-item p',t.autoText,0); setText('.test-item strong',t.air,1); setText('.test-item p',t.airText,1); setText('.test-item strong',t.retina,2); setText('.test-item p',t.retinaText,2); setText('.test-item .small-note',t.examDisclaimer);
  setText('.contacts .eyebrow',t.contactsEyebrow); setText('.contacts h2',t.contactsTitle); setText('.contacts-head>p',t.contactsText); setText('.contact-note strong',t.contactsNoteTitle); setText('.contact-note p',t.contactsNoteText);
  setText('.goodrx .eyebrow',t.goodrxEyebrow); setText('.goodrx h2',t.goodrxTitle); setText('.goodrx .section-heading>p',t.goodrxText);
  setText('.insurance .eyebrow',t.insuranceEyebrow); setText('.insurance h2',t.insuranceTitle); setText('.insurance-copy>p',t.insuranceText);
  setText('.booking-banner .eyebrow',t.bookingEyebrow); setText('.booking-banner h2',t.bookingTitle); setText('.booking-banner .booking-inner>div>p:last-child',t.bookingText); setText('.booking-button',t.bookingButton);
  setText('.location .eyebrow',t.locationEyebrow); setText('.contact-copy h2',t.locationTitle); setText('.contact-details span',t.address,0); setText('.contact-details span',t.phone,1); setText('.contact-details span',t.fax,2); setText('.contact-details span',t.language,3); setText('.hours h3',t.hours); setText('.location .hero-actions .button-primary',t.bookOnline || (lang==='es'?'Reservar en Línea <span>→</span>':'Book Online <span>→</span>')); setText('.location .hero-actions .button-ghost',t.directions);
  setText('.eye-health-teaser .eyebrow',t.blogEyebrow); setText('.eye-health-teaser h2',t.blogTitle); setText('.eye-health-teaser-inner>div:nth-child(2)>p',t.blogText); setText('.eye-health-teaser .button',t.blogButton);
  setText('.hero-photo-badge strong',t.heroWalkins); setText('.hero-photo-badge span',t.heroGlasses);
  setText('.footer-grid p',t.footerTag);
  document.querySelectorAll('.lang-button').forEach(b=>{const active=b.dataset.lang===lang;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  localStorage.setItem('sight4eyes-language',lang);
}

document.querySelectorAll('.lang-button').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
setLanguage(localStorage.getItem('sight4eyes-language')==='es'?'es':'en');
