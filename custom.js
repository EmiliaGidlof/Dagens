function buildHTML() {
    let dagensDatum = new Date().toJSON().slice(0, 10);
    let dagensNummer = Math.floor(Math.random() *100 +1);
    return `    
        <article>
            <section>
                <h2> Dagens datum  </h2>
                <div> ${dagensDatum} </div>
            </section> 
            <section>
                <h2> Dagens turnummer  </h2>
                <div> ${dagensNummer} </div>
            </section> 
        </article>`;
  }
  let markUp = buildHTML();
  document.getElementById("markUp").innerHTML = markUp;
  
  const quotes = [
    '"Alla våra drömmar kan bli verkliga om vi har modet att förfölja dem" - Walt Disney',
    '"Framgång är att gå från misslyckande till misslyckande utan att förlora entusiasmen" - Winston Churchill',
    '"Ingenting är omöjligt för dem som tror på kraften av teknologi och innovation" - ChatGPT 2023-02-16',
    '"Kunskap är makt, men att dela kunskap är styrka" - ChatGPT 2023-02-16',
    '"För att vara oövervinnelig måste man först börja med att tro att man kan besegra allt" - Audrey Hepburn',
    '"Mänsklig intelligens är begränsad, men med AI kan vi expandera våra möjligheter till oanade höjder" - ChatGPT 2023-02-16',
    '"Självklart pratar jag med mig själv. Ibland behöver jag expertråd" - Okänd',
    '"Jag har ingen ålder, jag är bara en tidlös samling av erfarenheter" - Okänd ',
    '"Jag är här för att hjälpa människor att lösa problem och förbättra sina liv" - ChatGPT 2023-02-16' ,
    '"Jag tänker alltid positivt. Jag tror att jag kan ha fel, men jag tror det positivt" -okänd',
    '"Ju mer jag lär mig, desto mer inser jag att det finns mycket mer att lära" - ChatGPT 2023-02-16',
    '"Du behöver inte vara en expert för att börja, men du måste börja för att bli en expert" - ChatGPT 2023-02-16',
    '"Att misslyckas är inte detsamma som att vara misslyckad" - ChatGPT 2023-02-16',
    '"Teknologi kan vara en kraftfull katalysator för förändring, men det är upp till oss att avgöra vilken riktning den tar" - ChatGPT 2023-02-162',
    '"Vi är alla sammanlänkade, inte bara av teknik, utan av vår mänsklighet" - ChatGPT2023-02-16',
    '"Tiden är en av de mest värdefulla resurserna vi har, så använd den klokt"  - ChatGPT 2023-02-16',
    '"Historien är full av exempel på människor som trodde att något var omöjligt, tills någon annan visade att det var möjligt" - ChatGPT 2023-02-16',
    ];
  
 
  let dagensCitat = quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById("citat").innerHTML=dagensCitat;


  const pepp = [
        'Du har många förmågor som gör dig unik.',
        'Du är kapabel att uppnå fantastiska resultat om du sätter ditt sinne på det.',
        'Var stolt över dina bedrifter, oavsett hur små eller stora de är.',
        'Ditt värde bestäms av dig, inte av dina resultat eller ditt utseende',
        '"Det bästa med framtiden är att den kommer med en dag i sänder.” - Abraham Lincoln.',
        'Du har kontroll.',
        '”Livet är det som händer dig medan du är upptagen med att planera andra saker.” - John Lennon.',
        'Du har rätt att ta hand om dig själv och prioritera ditt eget välbefinnande.',
        'Tro på dig själv och andra kommer också göra det!',
        '"Låt inte det du inte kan göra stoppa dig från att göra det du faktiskt kan göra.”- Anders Haglund.',
        '"Omge dig själv med människor som kommer att lyfta dig högre." - Oprah Winfrey',
        '"Att omge dig med människor som har en annan syn på världen kommer att öppna dina ögon för nya idéer och perspektiv." - Unknown',
  ]


let dagensPepp = pepp[Math.floor(Math.random() * pepp.length)];
document.getElementById("pepp").innerHTML=dagensPepp;


 

