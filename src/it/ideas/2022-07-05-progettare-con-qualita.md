---
title: "Progettare con qualità: l’accessibilità al centro del design system del Paese"
description: "Dieci suggerimenti ideali e pratici per realizzare servizi pubblici digitali semplici, accessibili e inclusivi"
canonical: https://medium.com/designers-italia/progettare-con-qualita-accessibilita-al-centro-del-design-system-del-paese-5e3599170099
permalink: /it/idee/progettare-con-qualita/
image: cover.webp
tags: [Accessibility,A11y,Design System,Italia,Pubblica Amministrazione]
lastUpdate: 2024-01-10
---

<p class="lead">Dieci suggerimenti ideali e pratici per realizzare servizi pubblici digitali semplici, accessibili e inclusivi</p>

**[Daniele Tabellini](https://fupete.medium.com/)** del [Dipartimento per la trasformazione digitale](https://medium.com/@trasformazione_digitale)  
**[Fabrizio Caccavello](https://medium.com/@fabrizio.caccavello)** di [AGID - Agenzia per l'Italia Digitale](https://medium.com/@AgidGov)

Pubblicato su [Designers Italia (Medium)](https://medium.com/designers-italia/progettare-con-qualita-accessibilita-al-centro-del-design-system-del-paese-5e3599170099) il 5 luglio 2022

<div class="popout img">
{% image "cover.webp", "Apertura e collaborazione" %}
<small>Photo <a href="https://unsplash.com/@johnschno">John Schnobrich</a>, <a href="https://unsplash.com/@tvschaitanya">Chaitanya Tvs</a></small>
</div>

Caselle di testo, spunte, pulsanti, menù a tendina: a prima vista un _form_, una scheda da compilare online, è quanto di più elementare il web possa offrire. Eppure nel contesto della trasformazione digitale, in particolare nella progettazione e nello sviluppo di servizi pubblici digitali, i **componenti dell’interfaccia digitale** che permettono di costruire moduli per lo scambio di informazioni tra utente e Pubblica Amministrazione svolgono una funzione fondamentale: **abilitano esperienze di cittadinanza**, ovvero consentono alle persone di esercitare i propri diritti e adempiere ai propri doveri completamente _online_, senza alcuna preclusione.

L’**accessibilità** è prima di tutto una questione di attenzione: al significato delle scelte, ai dettagli tecnologici, ma anche e soprattutto agli altri, alle persone e ai loro bisogni. In quest’ottica, **un progetto digitale accessibile è un progetto digitale di qualità**, un progetto _“fatto bene”_. Ed è per questo che, negli ultimi mesi, per tornare ai _form_ ad esempio, nell’aggiornamento del design system del Paese sono state fatte scelte tecniche che favoriscono l’utilizzo di codice _markup_ HTML semantico standard, anziché sovrascrivere i componenti con oggetti più “eleganti”, al solo scopo decorativo. Questo per garantire che le interfacce, che sono tra le più importanti per l’interazione con i servizi digitali, siano il più possibile compatibili con qualunque ambiente, e con il maggior numero di casi d’uso.

Ma si tratta solo di un dettaglio dell’approccio e di quanto realizzato nei mesi scorsi: come, e soprattutto perché, siamo arrivati fino a qui? E che direzione abbiamo intrapreso? Quello che segue è il racconto di una parte dell’avventura, [iniziata a dicembre 2021](https://designers.italia.it/notizie/Per-un-2022-ricco-di-sfide/), dal [Dipartimento per la trasformazione digitale](https://innovazione.gov.it/) e [AgID](https://agid.gov.it) per **aggiornare il design system del Paese**. Un’iniziativa che mira a ottimizzare le risorse digitali messe a disposizione dei cittadini da parte della Pubblica Amministrazione, rendendole semplici, accessibili e inclusive.

-----

**Indice dei contenuti:**

[toc]

-----

## Progettare interfacce è un atto di responsabilità

Progettare e sviluppare interfacce digitali significa decidere continuamente chi includere, o escludere, dall’esperienza d’uso e fruizione, a seconda delle proprie caratteristiche, conoscenze, capacità o condizioni di disabilità, temporanee o meno. Nel caso di servizi pubblici digitali, è una scelta che porta con sé una grande responsabilità: **tutte le cittadine e i cittadini devono poter avere un’esperienza d’uso piena e soddisfacente**, potendone usufruire in modo semplice e chiaro, senza discriminazione e senza lasciare indietro nessuno. Non solo perché lo dicono le norme sull’accessibilità, le linee guida o perché ci sono tecniche e tecnologie che lo permettono.

L’aggiornamento del design system del Paese, uno strumento _open_, aperto, sia come codice sorgente sia come progetto, ha così **l’obiettivo di aiutare la Pubblica Amministrazione** italiana a soddisfare i requisiti normativi, ma soprattutto a progettare e sviluppare interfacce ed esperienze d’uso dei servizi pubblici digitali coerenti e inclusive, su una pluralità di dispositivi. In una parola a realizzare progetti di qualità.

Ma cosa si intende quando parliamo di _qualità_?

> La Qualità… sappiamo cos’è, eppure non lo sappiamo. Questo è contraddittorio. Alcune cose sono meglio di altre cioè hanno più Qualità. Ma quando provi a dire in cosa consiste la Qualità astraendo dalle cose che la posseggono, paff, le parole ti sfuggono di mano. Ma se nessuno sa cos’è, ai fini pratici non esiste per niente. Invece esiste eccome. Su cos’altro sono basati i voti, se no? Perché mai la gente pagherebbe una fortuna per certe cose, e ne getterebbe altre nella spazzatura? Ovviamente alcune cose sono meglio di altre… Ma in cosa consiste il “meglio”? 

<small>— Lo zen e l’arte della manutenzione della motocicletta, Robert M. Pirsig</small>

L’accessibilità è un tema di cultura del fare, e fare bene. Non è solo considerare l’accessibilità tra le priorità progettuali, ma _“fare”_, perché è solo così che si scoprono le necessità reali e i compromessi necessari della qualità manifesta di cui parla Robert Pirsig. È il **cambio culturale** che stiamo cercando di affermare: non ratificare a valle uno stato di conformità, ma *fare accessibile*. Semplificare, togliere un passaggio, partire da soluzioni già validate (_by default_) che possano essere curate nel corso di un progetto (_by design_), per poi scoprire, paradossalmente, che si tratta di opzioni economiche ed efficaci.

-----

## Dieci punti per fare meglio

<div class="feature img">
{% image "dieci-punti.webp", "Cos’è la qualità?" %}
<small>Image <a href="https://unsplash.com/@seanwsinclair">Sean Sinclair</a></small>
</div>

Per definire cosa sia la qualità, che cosa voglia dire “fatto bene” nel contesto di oltre 22.000 enti pubblici, in particolar modo sul tema accessibilità, il Dipartimento per la trasformazione digitale e AgID, supportati dai progetti [Designers Italia](https://designers.italia.it) e [Developers Italia](https://developers.italia.it), oltre che da un fornitore tecnico ad hoc, hanno definito una serie di principi, un’agenda in 10 punti, per collegare l’ideale con il pratico. Principi all’interno dei quali il design system del Paese si colloca in maniera importante e trasversale.

### 1. Fatto bene guarda oltre l’oggi

Se noi prendessimo un sito internet accessibile nel ‘95/’96 (ovvero rispetto ai pochi standard disponibili all’epoca), probabilmente ancora oggi sarebbe accessibile. Ecco perché bisogna fare bene, e **fare accessibile**, perché significa **progettare servizi pubblici digitali pronti per il futuro**.

[Progettando](https://medium.com/designers-italia/dietro-le-quinte-del-sito-mitd-dalla-ricerca-alla-pubblicazione-online-2a-parte-da691f8dc063#72e1) il sito [innovazione.gov.it](https://innovazione.gov.it), ad esempio, abbiamo provato a prevenire criticità futuribili di accessibilità, fin dai requisiti del progetto. Un’attenzione che ci ha permesso di **approfondire l’esperienza d’uso della redazione** che ne avrebbe curato i contenuti, e scegliere quindi di predisporre automatismi, come quello a supporto dell’inserimento corretto dei collegamenti esterni ([poche righe di codice](https://github.com/teamdigitale/innovazione.gov.it-site/blob/main/source/partials/links/_link_external.html.slim)), che contribuissero ad aumentare accessibilità e qualità generale del progetto nel tempo.

### 2. Fatto bene è by design e by default

Il tema accessibilità non può rispondere solo a meri, anche se necessari, adempimenti burocratici. Dall’inizio e per tutte le fasi del progetto se ne deve tener conto, _by design_: dalla raccolta requisiti al progetto di contenuti e dell’esperienza utente, dalla prototipazione e sviluppo _software_ fino all’uso, alla validazione e alla manutenzione, e per tutti i profili coinvolti.

E **ogni fase del progetto deve avere i suoi automatismi predefiniti, _by default_**: è importante l’uso di kit, componenti, _template_, _framework_, documentazione, come le risorse messe già a disposizione grazie al design system del Paese, che permetta di risparmiare tempo e soldi pubblici, partendo con delle componenti già accessibili.

L’accessibilità costa? Aspettare segnalazioni e sanzioni per correggere progetti in corsa, oppure ampiamente conclusi, è sicuramente più oneroso per una Pubblica Amministrazione, mentre fare le cose bene **è un investimento che si ripaga da solo nel breve e medio periodo**. “Fare accessibile” deve essere il mantra della PA e dei suoi fornitori, sulla falsariga del principio che si applica alla sicurezza e alla privacy, altri due temi della progettazione dei servizi digitali da affrontare _by design_ e _by default_.

### 3. Fatto bene è open e partecipazione

Mettere attenzione nel progettare per il pubblico significa prima di tutto aprirsi: ricerca e ascolto dei bisogni dell’utente, ma anche sviluppo _open source_ e licenze aperte, _open data_, _open design_, apertura alla partecipazione e ai _feedback_.

> Soldi pubblici, codice e progetto pubblico.

Non solo codice pubblico, come chiede ad esempio la [campagna omonima](https://publiccode.eu/) della [FSFE](https://fsfe.org/index.it.html) (Free Software Foundation Europe), e come portato avanti da anni nella Pubblica Amministrazione con il Catalogo e le linee guida sul riuso e sulle licenze dal progetto [Developers Italia](https://developers.italia.it/); non solo codice pubblico, dicevamo, ma anche iniziare a porsi il problema di come nel mondo del design, del progetto, si debba **fare _open design_ e partecipazione con modalità più strutturali**.

Il concetto e le strategie dell’accessibilità nascono nell’organizzazione internazionale [W3C](https://www.w3.org/) (World Wide Web Consortium), che stabilisce le regole tecniche con cui si fanno i prodotti accessibili. **Il processo di lavoro del W3C è un ottimo esempio di _open by default_**, un processo che prevede il coinvolgimento di gruppi di lavoro eterogenei e contributori esterni, e che è reso possibile solo grazie alla partecipazione e al miglioramento continuo. Non c’è un punto di arrivo ultimo, se non ideale, ma **un processo in divenire**, iterazione dopo iterazione, aprendo a cercare feedback e contributi, verso il meglio.

La scelta di usare strumenti aperti e collaborativi per l’aggiornamento del design system del Paese va esattamente in questa direzione: _repository_ GitHub per le lavorazioni di sviluppo, e **rilasci delle versioni intermedie** di lavorazione dei kit di progettazione interfaccia, per cercare commenti, segnalazioni e contributi. Nelle prossime settimane saranno inoltre rilasciati su Designers Italia diversi altri strumenti di questo aggiornamento: documenti di analisi, liste di cose da fare, censimenti e report che vogliamo far diventare patrimonio della _community_.

### 4. Fatto bene è a norma

L’Italia è all’avanguardia rispetto alla normativa sull’accessibilità, la **Legge n. 4/2004** fu promulgata quando a livello europeo l’accessibilità era un tema ancora poco rilevante, e il recente **European Accessibility Act** non era nei sogni dei legislatori. Gli [aggiornamenti successivi](https://www.agid.gov.it/it/design-servizi/accessibilita/normativa), così come le [linee guida sull’accessibilità degli strumenti informatici](https://www.agid.gov.it/it/design-servizi/accessibilita/linee-guida-accessibilita-strumenti-informatici), messe a disposizione da AgID rispetto alla Direttiva UE 2016/2012, sono i riferimenti normativi da tener presenti quando si parla di accessibilità.

Il livello di conformità [richiesto](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/stabile/doc/service-design/accessibilita.html#linee-guida-e-criteri-di-successo) per i siti della Pubblica Amministrazione italiana, dalla norma tecnica europea armonizzata UNI EN 301 549, corrisponde **ai livelli “A” e “AA” della W3C Recommendation WCAG 2.1**. La specifica WCAG 2.1 è disponibile in [lingua italiana](https://www.w3.org/Translations/WCAG21-it/).

Ma la normativa sull’accessibilità, con il Decreto Legge 76/2020, è stata **estesa anche ai soggetti privati che offrono servizi al pubblico attraverso siti web o applicazioni mobili** e che abbiano un fatturato medio superiore a cinquecento milioni di euro negli ultimi tre anni di attività. Si è voluto insomma anticipare alle grandi organizzazioni private il percorso verso l’accessibilità che comunque verrà attivato per tutti i soggetti privati con l’European Accessibility Act a partire dal 2025.

Sono inoltre prossime alla pubblicazione anche **le nuove linee guida di design per i siti internet e i servizi digitali della Pubblica Amministrazione**, previste ai sensi dell’art. 53 del CAD (Codice Amministrazione Digitale), dove ad esempio i concetti di _by default_ e _by design_ saranno ben evidenti. Contestualmente alla loro uscita verrà rilasciato un corposo “Manuale operativo di design”, tramite Designers Italia, con casi d’uso e indicazioni a supporto.

### 5. Fatto bene è aiutato dal design system del Paese

Il design system del Paese è un insieme di principi, risorse e «pezzi già pronti», pensato per progettare e sviluppare esperienze utente, di cittadinanza. A parità di qualità, grazie al riuso e alla condivisione di buone pratiche, è possibile anche raggiungere l’obiettivo del minore costo. Da dicembre 2021 **stiamo aggiornando questa risorsa dalle fondamenta**, in termini tecnologici e di accessibilità, ma anche di visione e gestione. Abbiamo infatti affiancato al cuore delle attività pratiche una serie di attività di più alto livello, come l’inizio di un’articolata ricerca utente su utilizzatori e contributori, e una pianificazione di epiche e obiettivi di medio-lungo periodo.

Il design system del Paese è oggi composto da un kit per progettare interfacce (kit UI), un kit per sviluppare interfacce (il _framework_ Bootstrap Italia in primis) e un insieme di modelli standard per progettare e realizzare siti web e servizi digitali per diverse tipologie di Enti. Queste **risorse aggiornate**, man mano che le nuove versioni diventeranno stabili nelle prossime settimane, saranno **messe a disposizione di tutti** tramite il sito web [Designers Italia](https://designers.italia.it/), che ci auspichiamo ospiti presto, come riferimento ufficiale, la documentazione di tutto il design system del Paese: dai principi al design, dallo sviluppo alle indicazioni sull’accessibilità, dai componenti ai pattern validati con gli utenti.

### 6. Fatto bene è immaginato con il kit UI

<div class="feature img">
{% image "ui-kit-italia.webp", "UI Kit Italia" %}
<small><a href="https://www.figma.com/@designersitalia">Profilo</a> di Designers Italia nella community Figma e <a href="https://www.figma.com/community/file/1105848677422572920">kit UI</a></small>
</div>

Il kit per la progettazione di interfacce del design system del Paese lo abbiamo ricostruito da zero usando le ultime tecnologie disponibili e in coordinamento con il kit di sviluppo, con un occhio attento al tema _open design_. **Fin dai primi rilasci ha indicazioni di accessibilità utili ai designer** per comprendere le caratteristiche legate alla specificità della prototipazione, come ad esempio l’uso dei colori. Stiamo anche immaginando di integrare strumenti per favorire l’utilizzo della semantica corretta degli oggetti e per etichettare i _mockup_.

Questa nuova versione, costruita utilizzando Figma e cercando di sfruttare tutte le potenzialità di collaborazione e automazione, **ha numeri importanti: si tratta di oltre 600 componenti**, comprese le varianti, **divisi nelle tre macrocategorie** _foundations_ (fondamenta intese per esempio come griglie, tipografia e icone), _components_ (componenti intesi come “pezzi” dell’interfaccia come pulsanti, liste e testata) e _forms_ (tutti i componenti utili allo sviluppo di moduli).

Un occhio di riguardo è stato messo nel sincronizzare tutti i componenti con i kit di sviluppo, per avere prototipi più realistici e per **semplificare il passaggio agli sviluppatori**. In prospettiva, e in un’ottica open, è previsto che avvengano rilasci interoperabili verso altri strumenti, come Sketch o Adobe XD, con esportazioni sulla _repository_ GitHub dedicata.

Una parte importante delle lavorazioni è stata dedicata all’**integrazione di _design token_**: piccoli elementi “di verità” utili a rappresentare decisioni di stile applicabili in modo coerente tra diversi progetti, _framework_ e strumenti — un esempio di _design token_: `color-blue-a06: #0066cc` (valore) e `color-primary:color-blu-a06` (decisione) — , che nelle prossime versioni di tutte le risorse afferenti al design system del Paese, siano di design o di sviluppo, ci auspichiamo rendano **tutto più coerente, più facilmente aggiornabile, migliorabile e scalabile**. I _design token_ rispondono inoltre alle esigenze di personalizzazione emerse dalla ricerca.

<div data-service="youtube" data-id="1UKjfSyox-k"></div>

<p class="embedCaption">Community lab: a che punto siamo con UI kit e design token?</p>

### 7. Fatto bene è realizzato con Bootstrap Italia

<div class="feature img">
{% image "bootstrap-italia.webp", "Bootstrap Italia" %}
<small><a href="https://github.com/italia/bootstrap-italia">Repository</a>, foglio validazione componenti e <a href="https://italia.github.io/bootstrap-italia/">Documentazione</a> di Bootstrap Italia</small>
</div>

Bootstrap Italia è il kit per lo sviluppo di interfacce del design system del Paese. A distanza di anni, da quando fu rilasciata una prima versione, è evidente quanto sia stato importante pensare a un **_framework_ unico di sviluppo, basato sulle esigenze della Pubblica Amministrazione**. Fu realizzato con quello che allora era il riferimento, il più utilizzato ma anche il più vicino ai requisiti di accessibilità: Bootstrap. E oggi, dopo aver inizialmente tolto la ruggine all’ultima versione basata su Bootstrap 4, anche integrando molti contributi della _community_, è in dirittura d’arrivo la **nuova versione 2.0** portata su Bootstrap 5.

In questa nuova versione, oltre ad ereditare tutte le nuove caratteristiche di Bootstrap 5, Bootstrap Italia è ottimizzato per molti aspetti che riguardano specificatamente la Pubblica Amministrazione e l’accessibilità. Abbiamo validato, o per meglio dire, stiamo validando e **continueremo a migliorare ogni componente**, cercando anche di fornire documentazione con indicazioni per l’implementazione laddove necessario.

Durante queste lavorazioni sono state fatte scelte di rottura, consapevoli che la semplicità sia un valore, che sia più facile cioè da manutenere e realizzare, come il dettaglio con cui si apre l’articolo sull’usare markup HTML semantico standard per molti componenti dei _form_ o, altro esempio interessante, come scegliere di **integrare la soluzione dei colleghi inglesi** [Accessible autocomplete](https://alphagov.github.io/accessible-autocomplete/), un plugin che permette di cercare e scegliere risposte da una lunga lista, progettato e sviluppato per l’accessibilità.

<div data-service="youtube" data-id="dQVy8DLPJbY"></div>

<p class="embedCaption">Community lab: scopriamo Bootstrap Italia 2.0</p>

**Bootstrap Italia 2.0 è stato progettato per essere scalabile** come richiesto dalle risultanze della ricerca: basti citare come esempi l’uso di Javascript puro per tutte le funzionalità, e l’integrazione di Rollup, che permette di integrare nel proprio progetto solo le parti necessarie del _framework_, con vantaggi di peso e velocità come si può approfondire in [questo articolo](https://medium.com/@Developers_Italia/af92a8bba9d2). Anche in questo caso si tratta di **un lavoro aperto**, e vi invitiamo a partecipare ai lavori in corso provando o contribuendo all’ultima versione rilasciata di [Bootstrap Italia 2.0](https://github.com/italia/bootstrap-italia/releases) su GitHub.

### 8. Fatto bene segue modelli standard

<div class="feature img">
{% image "modelli.webp", "Modelli di design" %}
<small>Modelli standard per i siti e i servizi digitali dei <a href="https://designers.italia.it/modelli/comuni/">Comuni</a> e delle <a href="https://designers.italia.it/modelli/scuole/">scuole</a></small>
</div>

La progettazione di esperienze digitali semplici ed efficaci richiede tempo, risorse e molta ricerca. **I modelli di siti e servizi digitali per gli enti** (oggi scuole e Comuni) permettono di rispondere ai bisogni dei cittadini in modo rapido e a minor costo, sfruttando flussi e funzionalità validate dalla ricerca.

I [modelli](https://designers.italia.it/modello/comuni/) proposti da Designers Italia, comprendono l’architettura dell’informazione, i _template_ HTML e i temi per CMS (_Content Management System_), su cui sono stati effettuati in questi mesi importanti lavori, anche per migliorarne l’accessibilità, corredati da una serie di guide pratiche a supporto. **I modelli rappresentano precisamente il concetto della creazione di servizi digitali accessibili _by default_**: partire con un intero modello validato e radicato nella ricerca utente.

I modelli per le scuole e i Comuni sono oggetto della [misura 1.4.1 del PNRR “Esperienza dei servizi pubblici”](https://padigitale2026.gov.it/misure/#esp-serv-pubb). Seguire un modello non significa creare siti uniformi, ma coerenti. Il modello infatti nasce **nel rispetto delle esigenze del cittadino e delle necessità di flessibilità degli enti**, in questo ordine. Gli enti possono adattare il modello al contesto specifico rispettando comunque i criteri di conformità.

### 9. Fatto bene a volte… non basta

I «pezzi» del design system del Paese non sono tutto: l’accessibilità è principalmente una questione semantica, di significato degli elementi e dei comportamenti. **L’utilizzo di componenti accessibili non rende automaticamente un applicativo accessibile**, tuttavia sono un aiuto fondamentale per compiere _by default_ un processo nel modo più ottimale possibile.

Il percorso costruito attraverso il design system è proprio incentrato sul concetto di **accessibilità _by default_**. Per ogni attività devono essere utilizzabili elementi, strutture, procedure, che sono già passati attraverso i necessari processi di validazione (documentazione, _mockup_, _framework_, _template_, ecc). Al termine del processo le attività di verifica e di ottimizzazione potranno essere più limitate, per poi liberare risorse per la gestione di casi più complessi o attivare supporti più innovativi.

### 10. Fatto bene ha bisogno di test e feedback

Nei prossimi anni ci aspettano molte sfide per scalare, dare _governance_ chiara, rendere sostenibile e curare con efficacia il design system del Paese. **Per raggiungere questo obiettivo abbiamo bisogno di tutta la _community_**: l’ambiente in cui si muovono e vivono le persone non è quello ideale di utilizzo di un applicativo. Tutti noi utilizziamo applicativi in ambienti i più strani, mentre camminiamo, con il gelato in mano, con tecnologie assistive, magari con tecnologie assistive che oggi neanche immaginiamo.

<div data-service="youtube" data-id="jBE_cUQuWxI"></div>

<p class="embedCaption">La partecipazione agli Accessibility Days 2022: <a href="https://www.youtube.com/watch?v=jBE_cUQuWxI">parte 1</a> e <a href="https://www.youtube.com/watch?v=DlBbsVGi_TQ">parte 2</a></p>

Durante la partecipazione agli [Accessibility Days](https://accessibilitydays.it/), ci è stato ricordato il motto dei diritti delle persone con condizioni di disabilità: **“Niente su di Noi, senza di Noi”**. In autunno, proprio con l’aiuto del team degli Accessibility Days, ci siamo ripromessi di creare occasioni di confronto e test di usabilità, con particolare attenzione all’accessibilità, per **raccogliere dati e migliorare piattaforme, siti e servizi pubblici digitali** che utilizzano il design system del Paese. Con l’auspicio di riuscirci, e che diventi un’abitudine, per migliorare continuamente, insieme, con partecipazione e responsabilità.

-----

## Il futuro appartiene alle persone

<div class="popout img">
{% image "futuro-persone.webp", "Mani che collaborano per il meglio" %}
<small>Photo <a href="https://unsplash.com/es/@hannahbusing">Hannah Busing</a>, <a href="https://unsplash.com/@lazycreekimages">Michael Dziedzic</a></small>
</div>

**Il design system del Paese è un progetto di interesse pubblico, aperto e partecipato.** Ci piace pensare che questo progetto appartenga soprattutto a voi che state leggendo, che possiate farlo vostro, ognuno con le proprie competenze e livello di coinvolgimento, nella Pubblica Amministrazione centrale e sul territorio, e nei suoi fornitori. Partecipando alle lavorazioni, segnalando o proponendo miglioramenti, provandone le risorse e partecipando a test e presentazioni, rilasciando soluzioni alternative o analisi e revisioni, allo stesso modo pubbliche e _open_ con le licenze aperte corrette, facendo domande e aiutandoci a diffondere consapevolezza sul progettare e sviluppare interfacce di cittadinanza di qualità, a tutti i livelli.

## Il futuro è una questione culturale

<div class="popout img">
{% image "futuro-culturale.webp", "Palloncini e bambina con occhiali VR" %}
<small>Photo <a href="https://unsplash.com/@giuvicente">Giu Vicente</a>, <a href="https://unsplash.com/@olesia_bahrii">Olesia Bahrii</a></small>
</div>

C’è ancora una domanda, però, che rimane forse irrisolta: **chi sta insegnando a “fare accessibile” alla prossima generazione di designer e sviluppatori?** Non vorremmo aprire un piccolo vaso di Pandora, ma nelle Università italiane dedicate all’ITC, alle discipline informatiche, o al design, quanti e quali corsi sono dedicati all’accessibilità? **Siamo sicuri che in Italia ci siano molte eccellenze**, ma la domanda, e la questione culturale che porta con sé, rimane d’importanza capitale: nei prossimi mesi troviamo un’occasione per parlarne, valorizzare esperienze virtuose e rilanciare?

-----

[Alcuni diritti riservati](https://creativecommons.org/licenses/by/4.0/)