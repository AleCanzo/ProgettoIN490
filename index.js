//dichiarazioni librerie
const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
//la classe client è la classe dove troviamo tutte le funzioni e i metodi che serviranno per il bot
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS", "GUILD_MESSAGES"]} //categorie di dati a cui il bot ha accesso
)

//Colleghiamo il client al bot tramite il link generato su Developers
client.login("OTc2NDcxMzE0NDM5MjM3NjUy.GzvzeS.47KD_GPDcE1n-ZPFbshElZjuaj48azz5sG2_EM")

//mex per terminale
client.on("ready", () =>{
    console.log("Bot Online")
})

//mex embed per introduzione

var embed = new Discord.MessageEmbed()
    .setColor("#0000ff")
    .setDescription('Sono qui per scoprire che tipo di persona sei attraverso i tuoi gusti musicali. Mettimi alla prova con 5 di queste domande e ti dirò chi sei!')
    .setTitle("BOT per progetto IN490")
    .addFields(
        {name: 'Domande:', value: '1.	Come nasce il genere metal? \n 2.	Quali sono i gruppi più rappresentativi del metal? \n 3.	Quanta gente ascolta metal nel mondo? \n 4.	Cosa caratterizza la musica metal? \n 5.	Quanti sottogeneri del rock ci sono? \n 6.	Come nasce il rock? \n 7.	Quali sono i gruppi più importanti nel rock moderno? \n 8.	Quali strumenti vengono usati nel rock? \n 9.	Come nasce il blues? \n 10.	Quali sono gli artisti più importanti del blues? \n 11.	Come nasce il jazz? \n 12.	Com’è formato un gruppo jazz? \n 13.	Quali sono i compositori di musica classica più famosi? \n 14.	Cos’è la musica classica? \n 15.	Quali strumenti sono usati nella musica classica? \n 16.	Perché è importante la musica classica? \n 17.	Come nasce il rap? \n 18.	Quali sono i rapper più influenti in Italia? \n 19.	Cos’è la trap? \n 20.	Cosa caratterizza la trap? \n 21.	Chi sono i primi 3 classificati su spotify? \n 22.	Qual è la definizione di musica pop? \n 23.	Quando è nata la musica pop? \n 24.	Cosa caratterizza la musica pop?'},
        {name: 'Altri comandi:', value:'!clear (cancello gli ultimi 10 messaggi)'}
    )
    .setThumbnail("https://media-assets.vanityfair.it/photos/614c3cc702067009fc617828/3:4/w_642,h_856,c_limit/facebook-bot-02.jpg")
    .setFooter({ text: 'Autore: Alessandro Canzoneri', iconURL: 'https://i.imgur.com/IgtpnQ9.jpg'})
    .setTimestamp();

client.on("messageCreate", (message) => {
    if(message.content == "!presentati") {
        message.channel.send({embeds: [embed]});
    }
});


//contatori tipi di domande

let counter=0
let counter1=0
let counter2=0
let counter3=0

//domande e risposte

client.on("messageCreate", (message) =>{
    if(message.content == "Come nasce il genere metal?") {
        message.channel.send("Le origini dell'heavy metal possono essere ritrovate all'interno del movimento british blues degli anni sessanta, in particolare tra quelle band che trovarono difficile riadattare il proprio sound a quello del classico blues americano. Durante questo periodo, le ritmiche divennero più essenziali, e gli strumenti elettrici amplificati cominciarono ad assumere maggiore importanza, soprattutto grazie alle innovazioni dei primi gruppi hard rock dei metà anni sessanta come the Kinks, the Who, Jimi Hendrix, Cream, the Jeff Beck Group, Yardbirds e Eric Clapton, i quali anticiparono il genere sia nel sound che nell'attitudine.")
        counter1++
        counter++
    }
    if(message.content == "Quali sono i gruppi più rappresentativi del metal?") {
        message.channel.send("I gruppi più rappresentativi del metal sono Judas Priest, Black Sabbath, Ozzy Osbourne, Metallica e Motorhead.")
        counter1++
        counter++
    }
    if(message.content == "Quanta gente ascolta metal nel mondo?") {
        message.channel.send("Come mostrano i dati di Spotify il metal è un business globale, e i metallari sono ovunque")
        counter1++
        counter++
    }
    if(message.content == "Cosa caratterizza la musica metal?") {
        message.channel.send("Il metal è caratterizzato da ritmi fortemente aggressivi e da un suono potente, ottenuto attraverso l'enfatizzazione dell'amplificazione e della distorsione delle chitarre, dei bassi, e, talvolta, persino delle voci.")
        counter1++
        counter++
    }
    if(message.content == "Quanti sottogeneri del rock ci sono?") {
        message.channel.send("I sottoggeneri del rock sono veramente tanti! Consulta questo link: https://it.wikipedia.org/wiki/Categoria:Generi_musicali_rock")
        counter1++
        counter++
    }
    if(message.content == "Come nasce il rock?") {
        message.channel.send("Le basi della musica rock sono nel rock and roll, che ha avuto origine negli Stati Uniti tra la fine degli anni Quaranta e l'inizio degli anni Cinquanta e si è rapidamente diffuso in gran parte del resto del mondo. Le sue origini immediate risiedono in una fusione di vari generi musicali neri dell'epoca, inclusi rhythm and blues e musica gospel, con la musica country. Il rock and roll ha rappresentato non solamente un nuovo genere musicale, ma anche un vero e proprio fenomeno sociale.")
        counter1++
        counter++
    }
    if(message.content == "Quali sono i gruppi più importanti nel rock moderno?") {
        message.channel.send("Secondo il sito R3M, i gruppi più importanti adesso sono i Larkin Poe, Hands Off Gretel, Jinjer, Tyler Bryant & The Shakedown e In This Moment.")
        counter1++
        counter++
    }
    if(message.content == "Quali strumenti vengono usati nel rock?") {
        message.channel.send("Le sonorità del rock sono caratterizzate prevalentemente dall'utilizzo di strumenti elettrici, in particolare la chitarra elettrica,[4] che in genere viene accompagnata da una sezione ritmica costituita da basso elettrico[5] e batteria.[6] Frequente negli anni sessanta fu la presenza dell'organo elettronico, come il Vox Continental e l'Hammond. Dagli anni settanta in poi, sempre più frequentemente, hanno iniziato a fare la loro comparsa anche i sintetizzatori.[7] La strumentazione rock di base è stata derivata dalla strumentazione di base delle band blues (chitarra solista di spicco, secondo strumento a corda, basso e batteria).")
        counter1++
        counter++
    }
    if(message.content == "Come nasce il blues?") {
        message.channel.send("Come avviene per altre forme di musica popolare, le origini del blues, in quanto poco documentate e oscure, sono oggetto di tante discussioni.In particolare non c'è una precisa data di nascita per questo genere musicale: la traccia più antica di una forma musicale simile al blues è il racconto che, nel 1901, fece un archeologo del Mississippi, descrivendo il canto di lavoratori neri che sembra avere affinità melodiche e liriche con il blues di oggi. Non è, dunque, possibile stabilire con esattezza una data che segni l'origine del genere, tuttavia un anno fondamentale fu il 1865, anno dell'abolizione della schiavitù negli Stati Uniti d'America: ottenuta la libertà, numerosi ex schiavi-musicisti iniziarono a portare la loro musica fuori dalle piantagioni e, nel giro di qualche decennio, questo genere fu noto ai più fino a giungere alle prime attestazioni che ci sono pervenute.")
        counter2++
        counter++
    }
    if(message.content == "Quali sono gli artisti più importanti del blues?") {
        message.channel.send("Gli artisti blues più importanti sono B.B. King, Eric Clapton, Robert Johnson, Muddy Waters e altri ancora... Guarda qui: https://www.debaser.it/main/classifica_generale.aspx?idGen=36&idAgg=1&idAnn=0&idOgg=2")
        counter2++
        counter++
    } 
    if(message.content == "Come nasce il jazz?") {
        message.channel.send("La musica che originariamente sarebbe stata chiamata, con termine di origine incerta jazz, nasce quasi certamente a New Orleans all'inizio del XX secolo. Il musicista cui è attribuito il titolo di 'padre del jazz', Buddy Bolden, è attivo a New Orleans nel 1904. Nel 1906 il pianista Jelly Roll Morton compose il brano King Porter Stomp, che fu uno dei primi brani jazz a godere di vasta notorietà, e negli anni seguenti a New Orleans furono attive molte formazioni jazz: tra le più importanti, quella capeggiata dal cornettista Joe 'King' Oliver. La parola 'jazz' venne stampata da un quotidiano, per la prima volta, nel 1913.")
        counter2++
        counter++
    } 
    if(message.content == "Com'è formato un gruppo jazz?") {
        message.channel.send("La formazione jazzistica moderna tipica è costituita da un gruppo musicale di dimensioni limitate. La combinazione più frequente è il quartetto, quasi invariabilmente costituito da una sezione ritmica composta da batteria, basso o contrabbasso, pianoforte e da uno strumento solista, generalmente un sassofono o una tromba.")
        counter2++
        counter++
    } 
    if(message.content == "Quali sono i compositori di musica classica più famosi?") {
        message.channel.send("Secondo il sito IBS.it, i 'magnifici 8' della musica classica sono Johann Sebastian Bach, Ludwig van Beethoven, Fryderyk Chopin, Wolfgang Amadeus Mozart, Pëtr Il'ič Čajkovskij, Claude Debussy, Richard Wagner e Giuseppe Verdi")
        counter2++
        counter++
    } 
    if(message.content == "Cos'è la musica classica?") {
        message.channel.send("Col termine musica classica ci si riferisce alla musica colta, sacra e profana, composta o avente radici nel contesto della cultura occidentale. Essa abbraccia approssimativamente un arco di tempo che comincia dall'XI secolo e si estende fino al XX secolo[1] o, a seconda delle convenzioni, fino all'età contemporanea. Tale periodo include, in particolare, il periodo caratterizzato dallo sviluppo e impiego prevalente dell'armonia tonale, codificata tra il XVII e il XIX secolo[2]. In contesti più specializzati il termine 'musica classica' può essere anche riferito, in senso più restrittivo, al periodo musicale detto Classicismo[3], ma nel linguaggio comune l'espressione è intesa nel suo significato più esteso (in opposizione a musica leggera o a musica popolare).")
        counter2++
        counter++
    } 
    if(message.content == "Quali strumenti sono usati nella musica classica?") {
        message.channel.send("Gli strumenti utilizzati più comunemente nel repertorio della musica classica sono stati in buona parte inventati prima della metà del XIX secolo (spesso molto prima), e hanno sviluppato la loro forma moderna tra XVI e XIX secolo. Gli strumenti più comuni sono presenti nell'orchestra o nella banda, insieme a numerosi altri strumenti ad uso principalmente solistico (come il pianoforte, il clavicembalo e l'organo). L'orchestra sinfonica è la formazione musicale d'insieme più conosciuta al grande pubblico per l'esecuzione della musica classica[12] e comprende le famiglie degli archi, fiati (legni e ottoni) e percussioni. La banda è un altro complesso musicale che spesso esegue musica classica; è composta da strumenti appartenenti alle famiglie dei legni, ottoni e percussioni. Essa ha in genere una varietà più ampia (soprattutto tra gli ottoni) e una maggiore quantità di strumenti a fiato rispetto all'orchestra, ma non ha una sezione di archi.")
        counter2++
        counter++
    } 
    if(message.content == "Perchè è importante la musica classica?") {
        message.channel.send("Teorie neurologiche dimostrano e avvalorano la tesi dell’Effetto Mozart, secondo cui, oltre che per sviluppare il ragionamento spazio-temporale, favorire la concentrazione, ottimizzare i tempi di apprendimento e permettere il rilassamento, ascoltare la musica del grande maestro aiuta a compensare e restituire carenze dovute a danni subiti: su tutto ciò si basa l’odierna musicoterapia che riesce a curare molte patologie.")
        counter2++
        counter++
    } 
    if(message.content == "Come nasce il rap?") {
        message.channel.send("In origine il rap nasce dalle performance dei dj, che avevano l’abitudine di parlare su una base musicale per coinvolgere il pubblico. È una forma di improvvisazione che si è evoluta nel tempo, e che prevede anche la manipolazione del piatto dei dischi per produrre ritmi e l’uso di campionamenti sonori.")
        counter3++
        counter++
    } 
    if(message.content == "Quali sono i rapper più influenti in Italia?") {
        message.channel.send("I rapper italiani più influenti sono salmo, Marracash e… https://www.esquire.com/it/cultura/musica/a23560495/rapper-italiani-famosi/")
        counter3++
        counter++
    } 
    if(message.content == "Cos'è la trap?") {
        message.channel.send("La trap è un sottogenere musicale dell'hip hop, derivante dal southern hip hop, nato nel Sud degli Stati Uniti e sviluppatosi tra la fine degli anni novanta e l'inizio degli anni 2000. Con il termine trap si può anche indicare il genere di musica EDM nato negli anni 2010 dalla fusione di trap e dubstep: la cosiddetta EDM Trap.")
        counter3++
        counter++
    } 
    if(message.content == "Cosa caratterizza la trap?") {
        message.channel.send("Questa musica, alle origini, era molto legata ad ambienti e tematiche relative a vendita e dipendenza da droghe e da alcool: inizialmente non era un genere vero e proprio, fino ai primi anni del 2000 il termine indicava semplicemente un luogo (le trap house, appunto) ma successivamente comincia a essere utilizzato per indicare la musica legata a quel contesto. Le trap houses erano appartamenti abbandonati e degradati nei sobborghi di Atlanta in cui si spacciavano sostanze stupefacenti, inoltre la parola trapping in slang significa 'spacciare'. ")
        counter3++
        counter++
    } 
    if(message.content == "Chi sono i primi 3 classificati su spotify?") {
        message.channel.send("Scoprilo tu: https://open.spotify.com/playlist/37i9dQZEVXbNG2KDcFcKOF?si=4b5cb16a60e24563")
        counter3++
        counter++
    } 
    if(message.content == "Qual è la definizione di musica pop?") {
        message.channel.send("Nella lingua inglese, i termini popular music e pop music sono spesso usati impropriamente in modo intercambiabile. Il termine popular music è un termine generico che si riferisce alla musica di gradimento generale nell'epoca moderna, mentre la notazione di pop music si riferisce ad uno specifico genere musicale. Secondo Gianni Sibilla, la musica pop «indica un campo più ristretto e definito rispetto a quello di popular music».")
        counter3++
        counter++
    } 
    if(message.content == "Quando è nata la musica pop?") {
        message.channel.send("La musica pop moderna nasce nella metà degli anni cinquanta negli Stati Uniti e nel Regno Unito. Se negli anni sessanta in Italia il termine era poco usato in favore del più generico 'musica leggera', sul finire del decennio veniva usato per indicare genericamente tutti quei gruppi che uscivano dalle forme imposte dalla canzonetta, e che vedevano nel Festival di Sanremo il loro motore principale. Venivano quindi inseriti senza distinzione nella definizione di pop gruppi musicali che andavano dalla musica beat al rock psichedelico e al rock progressivo. Solo in seguito il termine 'pop' fu usato con l'accezione con cui ci si riferisce a livello internazionale, con la classificazione e distinzione del rock come specifico genere.")
        counter3++
        counter++
    } 
    if(message.content == "Cosa caratterizza la musica pop?") {
        message.channel.send("La musica pop, secondo Gianni Sibilla, è «contraddistinta da alcuni aspetti specifici che riguardano il periodo storico di produzione, le forme testuali e linguistiche, gli attori sociali coinvolti, il modo in cui essi costruiscono la propria identità e, soprattutto, il rapporto con i mezzi di comunicazione di massa. In altre parole, la musica pop è un macrogenere musicale contemporaneo che comprende tutti i sottogeneri specifici della canzone popolare sviluppatisi a partire dall'avvento del rock and roll, contraddistinti dalla diffusione intermediale su supporti fonografici e mezzi di comunicazione».")
        counter3++
        counter++
    } 
    if(counter == 5) {
        message.channel.send("**Ho capito chi sei!**")
        if(counter1 > counter2 && counter1 > counter3){
            message.channel.send("Creativo, difficilmente hai cali di autostima e tendi ad essere introverso. Sei un tipo rock!")
        }
        if(counter2 > counter1 && counter2 > counter3){
            message.channel.send("Sei creativo, introverso e ti piace tanto riflettere. Che classe! ")
        }
        if(counter3 > counter2 && counter3 > counter1){
            message.channel.send("Sei estroverso e socievole. Sei un tipo alla moda!")
        }
        if(counter1 == counter2 == 2){
            message.channel.send("Sei creativo, sicuro di te e pensi fuori dagli schemi!")
        }
        if(counter1 == counter3 == 2){
            message.channel.send("A volte sei introverso, a volte sei estroverso… Ma sappiamo che sei sicuro di te!")
        }
        if(counter2 == counter3 == 2){
            message.channel.send("Un occhio al passato ed uno al presente… Ci sai fare!")
        }
        counter1=counter2=counter3=0
        counter=0
    }
})

//comando clear

client.on("messageCreate", message => {
    if (message.content == "!clear") {

        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            message.channel.send('Non hai il permesso');
            return;
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            message.channel.send('Non ho il permesso');
            return;
        }
        message.channel.bulkDelete(10, true)
    }
})