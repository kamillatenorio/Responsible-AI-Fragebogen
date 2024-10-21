// Information content for each question
const informationalContent = [
    {
        title: "Umweltauswirkungen",
        imageSrc: "EnvironmentImpact.svg", 
        imageAlt: "AI Energy Consumption Illustration",
        caption: "Vincent, James. “How Much Electricity Does AI Consume?” The Verge, February 16, 2024. <a href='https://www.theverge.com/24066646/ai-electricity-energy-watts-generative-consumption' target='_blank'>Quelle</a>.“",
        mainText: "Ja, das stimmt! Laut einem kürzlich erschienenen Artikel [1] <strong>kann die <em>Erzeugung eines Bildes mithilfe von KI fast so viel Energie verbrauchen wie das Aufladen Ihres Smartphones.</strong><br><br>",
        secondaryText: "Nicht nur das Training von KI-generativen Systemen, sondern auch die Nutzung von KI-generativen Systemen kann den Stromverbrauch erhöhen.</strong>",
        reference: "[1] Luccioni, Sasha, Yacine Jernite, and Emma Strubell. 'Power Hungry Processing: Watts Driving the Cost of AI Deployment?' In Proceedings of the 2024 ACM conference on Fairness, Accountability, and Transparency, 85–99. FAccT '24, New York, NY, USA: Association for Computing Machinery, 2024. <a href='https://dl.acm.org/doi/10.1145/3630106.3658542' target='_blank'>https://dl.acm.org/doi/10.1145/3630106.3658542</a>."
    },
    {
        title: "Fehlinformation",
        imageSrc: "Misinformation.svg",
        imageAlt: "Generative AI Misinformation",
        caption: "Mit KI können sofort realistische Bilder und Botschaften erzeugt werden, bei denen nur subtile Details ihre künstliche Natur verraten. | © Bild: erstellt mit einer KI.",
        mainText: "Ja, es ist wahr! Einige KI-generative Systeme können von Menschen genutzt werden, die absichtlich Schaden anrichten wollen.  Diese Systeme können eine kostengünstigere Möglichkeit bieten, Desinformationen in großem Umfang zu erstellen und sind schwieriger zu erkennen.<br><br>",
        secondaryText: "Zum Beispiel zeigt das von der KI erstellte Bild von Papst Franziskus, das viral ging, wie KI genutzt werden kann, um die Erstellung von Fake News zu beschleunigen.",
        reference: ""
    }, 
    {
        title: "Bedrohungen für Demokratie und Bürgerrechte",
        imageSrc: "Politic.svg",
        imageAlt: "Generative AI Misinformation",
        caption: "Rosenberg, M., Confessore, N., & Cadwalladr, C. (2018, March 17). How Trump consultants exploited the Facebook data of millions. The New York Times.  <a href='https://www.nytimes.com/2018/03/17/us/politics/cambridge-analytica-trump-campaign.html' target='_blank'> Quelle</a>.",
        mainText: "Der Einsatz von KI-adaptiven Systemen, um Lesenden personalisierte Nachrichten auf der Grundlage ihres bisherigen Leseverhaltens zu präsentieren, kann die gesellschaftliche Polarisierung verstärken.<br><br>",
        secondaryText: "Ein berühmtes Beispiel war der Fall Cambridge Analytica, bei dem Daten, die von Facebook gestohlen wurden, verwendet wurden, um Nutzerprofile auf der Grundlage ihres Verhaltens zu erstellen. Unter Berücksichtigung dieser Profile wurden automatisch Entscheidungen getroffen, um Inhalte für politische Manipulationszwecke zu personalisieren.",
        reference: ""
    },
    {
        title: "Überwachung",
        imageSrc: "Surveillance.svg",
        imageAlt: "Generative AI Misinformation",
        caption: "In J. Delcker, Clearview AI controversy highlights rise of high-tech surveillance. DW. <a href='https://www.dw.com/en/clearview-ai-controversy-highlights-rise-of-high-tech-surveillance/a-57890435' target='_blank'>Quelle</a>.",
        mainText: "KI-Bilderkennungssysteme können, wenn sie in öffentlich zugänglichen Räumen installiert werden, die Privatsphäre einer großen Anzahl von Menschen verletzen und ein Gefühl der ständigen Überwachung erzeugen.<br><br>",
        secondaryText: "Zum Beispiel wurde eine Gesichtserkennungssoftware, die auf der Grundlage von Milliarden von Fotos aus dem Internet entwickelt wurde, von der Polizei in verschiedenen Ländern eingesetzt und  löst bei Menschenrechtsforschenden Bedenken hinsichtlich der Überwachung von Bürgern aus.",
        reference: ""
    }
];

// Get the current question index from the URL
const params = new URLSearchParams(window.location.search);
const currentQuestionIndex = parseInt(params.get('questionIndex')) || 0;

// Function to load the correct informational content
function loadInformationalContent() {
    const content = informationalContent[currentQuestionIndex];
    
    // Set dynamic content
    document.querySelector('.title').textContent = content.title;
    document.querySelector('.info-image').src = content.imageSrc;
    document.querySelector('.info-image').alt = content.imageAlt;
    document.querySelector('.image-caption').innerHTML = content.caption;
    document.querySelector('.text-main').innerHTML = content.mainText;
    document.querySelector('.text-secondary').innerHTML = content.secondaryText;
    document.querySelector('.reference').innerHTML = content.reference;
}

// Load the informational content when the page loads
window.onload = function() {
    loadInformationalContent();
};

// When "Next" is clicked, return to the game with the next question or end the game
document.querySelector('.next-button').addEventListener('click', function() {
    const nextQuestionIndex = currentQuestionIndex + 1;

    // If there are no more questions, redirect to the end page
    if (nextQuestionIndex >= informationalContent.length) {
        window.location.href = 'end.html'; // Redirect to the end of game page
    } else {
        // Otherwise, continue to the next question
        window.location.href = `game.html?questionIndex=${nextQuestionIndex}`;
    }
});
