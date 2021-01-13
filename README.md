# Final-FED-Jasmijnschenk
Readme proces verslag

Week 2
Ik had de HTML goed gedaan
Enkel kwam ik er uiteindelijk achter dat mijn website helemaal niet responsive was en ik dus helemaal opnieuw moest beginnen met mijn css
Hier is mijn CSS code, ik ben al verder gegaan met een responsive css in mijn document, volgende keer even netjes bijhouden op github!
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
body { font-family: 'Titillium Web', sans-serif; color: #333; line-height: 1.6; padding: 0; margin: 0; text-align: center; }
h1, h2, h3 { font-weight: 300; margin: .5em; line-height: 1.2; }
p { text-align: center; margin: .5em; }
img, video { width: 100%; }
video { position: relative; z-index: -1; }
/* Header */
/* logo */ header img { position: absolute; text-align:center; width: 40%;
}
header h1, p{ color: white; position: absolute; }
header h1 { top: 4em; left: 2em; font-weight: 600; text-transform: uppercase; }
/* cta */ .button1 { background-color: cornflowerblue; padding: 0 1em 0; border-radius: 1em; position: absolute; top: 5.8em; left: 8em; }
/* First timer & holy workouts */ #firsttimer h3 { font-weight: 600; color: white; text-transform: uppercase; }
#firsttimer h3:first-of-type { position: absolute; top: 42%; left: 35%; }
#firsttimer h3:last-of-type { position: absolute; top: 70%; left: 15%; text-align: center; }
#firsttimer { margin: 3em 0; background: black; }
#firsttimer img { opacity: .5; }
/* This is our tribe */
#tribe { margin: 3em; text-align: center; }
#tribe p { color: black; }
CODE nr 2 (deze heb ik ook vervangen omdat hij niet responsive genoeg was)
/* even wat standaard css dingetjes */
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
{ box-sizing: border-box; } body { font-family: 'Titillium Web', sans-serif; color: #333; line-height: 1.6; padding: 0; margin: 0; text-align: center; width: 100vw; }
h1, h2, h3 { font-weight: 300; line-height: 1.2; }
p { text-align: center; }
img, video { width: 100%; }
video { position: relative; z-index: -1; }
/* Header */
header div{ position: absolute; width: 100vw; padding: 2em; }
header img { margin-top: 10%; text-align:center; width: 40%; }
header h1 { font-weight: 600; text-transform: uppercase; }
header p,h1 { color:white; }
/* CTA */
.button1 { background-color: cornflowerblue; border-radius: 1em; margin-top: 7%; }

Week 3
Ik moet mijn code nog door de valitatie gooien
stand van zaken
Dit ging goed:
HTML
Opdrachten tijdens de les (positioneren en flexbox, okal ging dit ook niet altijd soepel. Het voelde wel fijn om daar even een lichtpuntje te hebben)
content verzamelen van de website die ik ga namaken
Breakdownschets heeft mij heel erg geholpen met hoe ik mijn website nou moest opzetten
Dit vond ik lastig:
Responsive design, ik heb mijn code een aantal keer moeten omgooien
Moeite met parent en child elementen, als ik iets in css doe op welke heeft die dan precies effect
Mijn Flexbox werkt niet in mijn eigen code, iets wat ik heel raar vind en ik zou niet weten wat ik verkeerd heb gedaan waardoor die niet werkt
onderscheid maken: gebruik ik voor responsive design allemaal de zelfde foto's en videos, ook als ze een andere viewport hebben (bijvoorbeeld een langwerpige video voor mobiel en een brede video voor web)
screenshots
hoe voeg ik screenshots aan een read me toe? dit lukt mij niet
agenda team
50 min voor het gesprek Gezamenlijke vragen (20 min) dit eerst? jup! Student individuele probleempjes (5-7 min)
GEZAMENLIJK (uitleg voor iedereen) Responsive design! Moet voor responsive design gewoon schalen met me browser, of inspect en een telefoon scherm bekijken voor mijn code? RESPONSIVE … Gebruik afbeelding: hoe kan je ‘m ‘kaderen’? (Responsive) Welke eenheden gebruik ik voor responsive design? Kun je ze allemaal benoemen en voor welk element het handig is. Foto: 100% is bijvoorbeeld heel duidelijk. En met het positioneren! Welke eenheden Is met pixels werken voor responsive design wel handig?
Sliders Hoe maak ik op een overzichtelijke manier een goede slider? Hoe kan ik het beste een slider maken, mag ik gebruik maken van Li items om dingen makkelijk te ordenen?
H1/H6 + ptjes Headings (h1 - h6), wanneer pas je welke toe? Ik heb veel losse p’tjes en h1 t/m h6 als ik die wil bewerken in css, klopt het dan dat ik allemaal id geef? Wat is beter? Div’s/class/ID?
Hamburger menu, heeft u een goeie bron hiervoor
Student 1 - Ellen Headings (h1 - h6), wanneer pas je welke toe? Gebruik afbeelding: hoe kan je ‘m ‘kaderen’?
Student 2 - Jasmijn Op de originele website staat een video over de volle schermbreedte, op de desktop lijkt dit een andere video te zijn, moet ik hier nu 2 aparte video elementen voor maken en de ene dus overflow: hidden; geven? Mag ik een div gebruiken voor mijn header? Door een div te gebruiken bespaar ik mezelf zo ongeveer 30+ regels css en dat lijkt mij dus wel overzichtelijker Is het een probleem als ik pas later met de NAV begin, en mij voornu focus op hoe de website er in zijn geheel uit ziet, aangezien de NAV een hamburger wordt die uitklapt met JS Transparante zwarte overlay over een afbeelding > voorbeeld? ME FLEXBOX WERKT NIET HELP, kijk github.
Student 3 - Amy Hoe maak ik op een overzichtelijke manier een goede slider? Hoe maak ik een goed werkende hamburger menu? Ik heb veel losse p’tjes en h1 t/m h6 als ik die wil bewerken in css, klopt het dan dat ik allemaal id geef? Ik ben een webshop aan het namaken, maar die verandert wel bijna elke week.. Wat moet ik daaraan doen? Responsive Ik heb een div gebruikt, is dat handig? Student 4 - Beyza Hoe pas ik text-shadow toe en bepaal ik de waarden? Hoe zorg ik ervoor dat transform: skewY alleen toegepast wordt op de tekst?
bronnenlijst
Geen externe bronnen gebruikt.

Week 5
Het begint eindelijk ergens op te lijken! Deze week hadden we weer een gesprek met ons groepje om vragen te stellen. Ik merk wel vaak dat ik dan vragen heb, en tijdens de les deze snel beantwoord worden en me dat dan ook heel logisch lijkt, maar zodra ik dit in mijn code toepas werkt het niet. Het lijkt alsof ik dan te makkelijk gerust word gesteld en het probleem wat ik wilde oplossen niet helemaal is opgelost. 

Ondertussen ben ik wel heel trots op mijn huidige site. Alle teksten staan er in en ze staan op de juiste grote en positie, en alle elementen zijn responive. 

Het enige probleem wat ik nu heb is dat mijn eerste box niet helemaal werkt zoals ik zou willen, de foto’s bewegen nu wel (gedaan met css) maar ik denk dat ik hier een betere oplossing voor moet zoeken. 

Ik moet nu eigenlijk alleen nog de knoppen interactief maken en dan ben ik zo goed als klaar!

Voortgangsgesprek Frontend.
Algemene vragen:
-

Amy:
Ik heb een slider gemaakt met css maar hoe zorg ik ervoor dat de tekst kan mee sliden?
Hoe zorg ik ervoor dat de tekst op de afbeelding ook meegaat met de slider.
Hoe werkt het met divjes en een slider met css en/of een slider met javascript.
Responsive 


Beyza:
-	

Jasmijn:
Mijn 1e slider/animatie werkt niet goed, hoe zou u dit oplossen? Als het niet lukt zal ik het dan zonder hover animatie maken: dus niet actief..
Hoe zorg ik er voor dat me knop van links naar rechts transition heeft met de kleur van fill (background-color knop)
De knop lijkt een paar pixels groter te worden als ik er overheen hover, maar hoe kan dit en is het erg als ik dit soort bugs heb?


Ellen:
background-image > cover. Hoe zorg ik ervoor dat ik de afbeelding kan verplaatsen zoals ik wil? Hij zit nog steeds vast aan de linkerzijde en ik krijg ‘m niet in het midden.
Z-index, wat zijn logische waarden daarvoor?

Bronnen
Ik heb over het algemeen weinig gebruik gemaakt van bronnen, de lessen en hulp van klasgenoten was voor mij in dit geval beter dan de codes die op internet stonden, vaak waren deze semantisch niet correct en had ik er uit eindelijk vrij weinig aan. 

Ik heb natuurlijk wel gebruik gemaakt van hier en daar wat dingetjes opzoeken om wat kennis op te doen, maar geen code van internet werkelijk gebruikt. 

https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

https://htmlcolorcodes.com/

https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

https://cssgradient.io/

https://css-tricks.com/basics-css-blend-modes/

https://www.w3schools.com/cssref/css3_pr_background-size.asp

https://codepen.io/shooft/pen/wvGyvRQ

https://tympanus.net/Development/CreativeButtons/





