---
title: "Progettare con qualità: l’accessibilità al centro del design system del Paese"
tags: [Accessibility,Design System,.Italia]
---

<p class="lead">Dieci suggerimenti ideali e pratici per realizzare servizi pubblici digitali semplici, accessibili e inclusivi</p>

**[Daniele Tabellini](https://fupete.medium.com/)** del [Dipartimento per la trasformazione digitale](https://medium.com/@trasformazione_digitale)  
**[Fabrizio Caccavello](https://medium.com/@fabrizio.caccavello)** di [AGID - Agenzia per l'Italia Digitale](https://medium.com/@AgidGov)

[Prima edizione su Medium](https://medium.com/designers-italia/progettare-con-qualita-accessibilita-al-centro-del-design-system-del-paese-5e3599170099) 

<div class="img">
{% image "cover.webp", "Apertura e collaborazione" %}
<small>Photo <a href="https://unsplash.com/@johnschno">John Schnobrich</a>, <a href="https://unsplash.com/@tvschaitanya">Chaitanya Tvs</a></small>
</div>

Caselle di testo, spunte, pulsanti, menù a tendina: a prima vista un _form_, una scheda da compilare online, è quanto di più elementare il web possa offrire. Eppure nel contesto della trasformazione digitale, in particolare nella progettazione e nello sviluppo di servizi pubblici digitali, i **componenti dell’interfaccia digitale** che permettono di costruire moduli per lo scambio di informazioni tra utente e Pubblica Amministrazione svolgono una funzione fondamentale: **abilitano esperienze di cittadinanza**, ovvero consentono alle persone di esercitare i propri diritti e adempiere ai propri doveri completamente _online_, senza alcuna preclusione.

L’**accessibilità** è prima di tutto una questione di attenzione: al significato delle scelte, ai dettagli tecnologici, ma anche e soprattutto agli altri, alle persone e ai loro bisogni. In quest’ottica, **un progetto digitale accessibile è un progetto digitale di qualità**, un progetto _“fatto bene”_. Ed è per questo che, negli ultimi mesi, per tornare ai _form_ ad esempio, nell’aggiornamento del design system del Paese sono state fatte scelte tecniche che favoriscono l’utilizzo di codice _markup_ HTML semantico standard, anziché sovrascrivere i componenti con oggetti più “eleganti”, al solo scopo decorativo. Questo per garantire che le interfacce, che sono tra le più importanti per l’interazione con i servizi digitali, siano il più possibile compatibili con qualunque ambiente, e con il maggior numero di casi d’uso.

Ma si tratta solo di un dettaglio dell’approccio e di quanto realizzato nei mesi scorsi: come, e soprattutto perché, siamo arrivati fino a qui? E che direzione abbiamo intrapreso? Quello che segue è il racconto di una parte dell’avventura, [iniziata a dicembre 2021](https://designers.italia.it/notizie/Per-un-2022-ricco-di-sfide/), dal [Dipartimento per la trasformazione digitale](https://innovazione.gov.it/) e [AgID](https://agid.gov.it) per **aggiornare il design system del Paese**. Un’iniziativa che mira a ottimizzare le risorse digitali messe a disposizione dei cittadini da parte della Pubblica Amministrazione, rendendole semplici, accessibili e inclusive.

[toc]

## Progettare interfacce è un atto di responsabilità

Progettare e sviluppare interfacce digitali significa decidere continuamente chi includere, o escludere, dall’esperienza d’uso e fruizione, a seconda delle proprie caratteristiche, conoscenze, capacità o condizioni di disabilità, temporanee o meno. Nel caso di servizi pubblici digitali, è una scelta che porta con sé una grande responsabilità: **tutte le cittadine e i cittadini devono poter avere un’esperienza d’uso piena e soddisfacente**, potendone usufruire in modo semplice e chiaro, senza discriminazione e senza lasciare indietro nessuno. Non solo perché lo dicono le norme sull’accessibilità, le linee guida o perché ci sono tecniche e tecnologie che lo permettono.

L’aggiornamento del design system del Paese, uno strumento _open_, aperto, sia come codice sorgente sia come progetto, ha così **l’obiettivo di aiutare la Pubblica Amministrazione** italiana a soddisfare i requisiti normativi, ma soprattutto a progettare e sviluppare interfacce ed esperienze d’uso dei servizi pubblici digitali coerenti e inclusive, su una pluralità di dispositivi. In una parola a realizzare progetti di qualità.

Ma cosa si intende quando parliamo di _qualità_?

> La Qualità… sappiamo cos’è, eppure non lo sappiamo. Questo è contraddittorio. Alcune cose sono meglio di altre cioè hanno più Qualità. Ma quando provi a dire in cosa consiste la Qualità astraendo dalle cose che la posseggono, paff, le parole ti sfuggono di mano. Ma se nessuno sa cos’è, ai fini pratici non esiste per niente. Invece esiste eccome. Su cos’altro sono basati i voti, se no? Perché mai la gente pagherebbe una fortuna per certe cose, e ne getterebbe altre nella spazzatura? Ovviamente alcune cose sono meglio di altre… Ma in cosa consiste il “meglio”? 

<small>— Lo zen e l’arte della manutenzione della motocicletta, Robert M. Pirsig</small>

L’accessibilità è un tema di cultura del fare, e fare bene. Non è solo considerare l’accessibilità tra le priorità progettuali, ma _“fare”_, perché è solo così che si scoprono le necessità reali e i compromessi necessari della qualità manifesta di cui parla Robert Pirsig. È il **cambio culturale** che stiamo cercando di affermare: non ratificare a valle uno stato di conformità, ma *fare accessibile*. Semplificare, togliere un passaggio, partire da soluzioni già validate (_by default_) che possano essere curate nel corso di un progetto (_by design_), per poi scoprire, paradossalmente, che si tratta di opzioni economiche ed efficaci.

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

_Continua_