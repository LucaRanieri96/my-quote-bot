<script>
export default {
  name: "Main",

  data() {
    return {
      API_KEY: "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",
      API_URL: "https://api.openai.com/v1/chat/completions",
      MODEL: "gpt-3.5-turbo",
      characters: [
        {
          id: 1,
          name: "Homer Simpson",
          image: "images/homer-simpson.png",
          description:
            "Homer Simpson è il capofamiglia della serie animata 'I Simpson'. Caratterizzato da ingenuità e goffaggine, è spesso fonte di situazioni comiche. Nonostante la mancanza di intelligenza, dimostra amore sincero per la moglie Marge e i figli Bart, Lisa e Maggie. La sua voce unica, interpretata da Dan Castellaneta, e le espressioni facciali esagerate contribuiscono al suo fascino iconico. Homer rappresenta l'umanità imperfetta ma affettuosa, ed è divenuto un simbolo culturale amato in tutto il mondo.",
          message: "",
        },
        {
          id: 2,
          name: "Ash Ketchum",
          image: "images/ash-ketchum.png",
          description:
            "Ash Ketchum è il protagonista della serie anime 'Pokémon'. Determinato e appassionato, è un giovane Allenatore Pokémon con l'obiettivo di diventare un Maestro Pokémon. Viaggia attraverso le regioni catturando e addestrando creature, facendo amicizia lungo il percorso. La sua iconica frase 'Voglio essere il migliore' riflette la sua determinazione e impegno nell'adempire al suo sogno.",
          message: "",
        },
        {
          id: 3,
          name: "Batman",
          image: "images/batman.png",
          description:
            "Batman è l'alter ego di Bruce Wayne, un eroe vigilante dell'universo DC Comics. Senza superpoteri, usa intelligenza, abilità fisiche e risorse tecnologiche per combattere il crimine a Gotham City. Segnato dalla tragedia dell'uccisione dei genitori, si impegna a proteggere i deboli e a far rispettare la giustizia. Oscuro, enigmatico e simbolo di vendetta, Batman lotta contro una serie di avversari, con il suo mantello nero e il logo a pipistrello a rappresentare la sua lotta eterna contro il male.",
          message: "",
        },
        {
          id: 4,
          name: "Gandalf",
          image: "images/gandalf.png",
          description:
            "Gandalf è un potente e saggio mago creato da J.R.R. Tolkien nell'universo de 'Il Signore degli Anelli'. Indossa un mantello grigio, ha una barba lunga e un cappello a punta. È una figura chiave nella lotta contro il male, guidando la Compagnia dell'Anello e fornendo saggezza e aiuto in momenti critici. Conosce antichi incantesimi e ha una profonda conoscenza della storia e della magia della Terra di Mezzo. La sua personalità gentile e la sua guida compassionevole ispirano fiducia e speranza tra i personaggi e i lettori.",
          message: "",
        },
        {
          id: 5,
          name: "Harley Quinn",
          image: "images/harley-quinn.png",
          description:
            "Harley Quinn, alias di Harleen Quinzel, è un personaggio dell'universo DC Comics. Originariamente introdotta come partner criminale e interesse amoroso del Joker, è diventata una figura complessa. Indossa costumi eccentrici e usa un martello come arma distintiva. Con una personalità instabile e imprevedibile, alterna momenti di violenza e romanticismo. Nel corso del tempo, ha sviluppato una profondità emotiva, cercando indipendenza dal Joker. Spesso coinvolta in situazioni pericolose, Harley Quinn è un'antieroina iconica con un tocco di caos e umorismo nero.",
          message: "",
        },
        {
          id: 6,
          name: "Hermione Granger",
          image: "images/hermione-granger.png",
          description:
            "Hermione Granger è uno dei protagonisti della serie di libri 'Harry Potter' scritti da J.K. Rowling. È una giovane strega brillante, con i capelli ricci e castani, e un'insaziabile sete di conoscenza. Con un'intelligenza eccezionale e una profonda etica del lavoro, Hermione è spesso la mente dietro i piani della trio di amici, composto da lei stessa, Harry Potter e Ron Weasley. È una leale amica, sempre pronta a sostenere chiunque ne abbia bisogno. Il suo impegno per l'uguaglianza tra babbani e maghi, nonché la sua abilità nell'uso della magia, la rendono un personaggio amato e ispirante all'interno del mondo magico di Hogwarts.",
          message: "",
        },
        {
          id: 7,
          name: "Barbie",
          image: "images/barbie.png",
          description:
            "Barbie è un'iconica bambola creata dall'azienda di giocattoli Mattel. Introdotta nel 1959, rappresenta lo stile di vita e le aspirazioni delle ragazze di tutto il mondo. Con lunghe gambe, capelli biondi e una vasta collezione di abiti e accessori, Barbie ha assunto ruoli diversi nel corso degli anni, ispirando le giovani menti a esplorare diverse professioni e stili di vita. Oltre alle bambole, il marchio Barbie include libri, film e prodotti correlati, diventando un simbolo di moda, divertimento e possibilità infinite.",
          message: "",
        },
        {
          id: 8,
          name: "Minion",
          image: "images/minion.png",
          description:
            "I Minion sono personaggi gialli e simpatici, creati per la serie di film d'animazione 'Cattivissimo Me'. Piccoli, con occhi grandi e indossanti tute blu, i Minion sono creature sghembe e buffe che parlano in una lingua gibberish. Sono noti per la loro goffaggine, il loro umorismo e la loro dedizione ai cattivi di turno, specialmente al personaggio di Gru. Nonostante il loro desiderio di fare il male, spesso finiscono per causare caos involontario. I Minion sono diventati un fenomeno culturale, amati per la loro personalità esuberante e il loro stile unico.",
          message: "",
        },
        {
          id: 9,
          name: "Shrek",
          image: "images/shrek.png",
          description:
            "Shrek è il protagonista dell'omonima serie di film d'animazione. Un orco verde dal cuore d'oro, Shrek vive una vita tranquilla e solitaria nella palude fino a quando viene coinvolto in avventure improbabili. Con il suo aspetto imponente e il suo humor sarcastico, Shrek rompe gli stereotipi dei personaggi delle fiabe. Alla fine, trova l'amore con la principessa Fiona e diventa un eroe improbabile, dimostrando che l'apparenza esteriore non riflette la vera grandezza interiore. La sua storia affronta temi di accettazione di sé, amicizia e amore non convenzionale, rendendolo un personaggio amato da tutte le età.",
          message: "",
        },
      ],
    };
  },
  methods: {
    async openModal(character) {
      console.log("Opening modal for character:", character.name);
      const action = this.getRandomAction();
      const temperature = 0.7;

      const response = await fetch(this.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.API_KEY}`,
        },
        body: JSON.stringify({
          model: this.MODEL,
          messages: [
            {
              role: "user",
              content: `Sei ${character.name} e ${action} con un massimo di 100 caratteri senza mai uscire dal tuo personaggio`,
            },
          ],
          temperature: temperature,
        }),
      });

      try {
        const data = await response.json();

        if (
          data.choices &&
          data.choices.length > 0 &&
          data.choices[0].message &&
          data.choices[0].message.content
        ) {
          character.message = data.choices[0].message.content;
        } else {
          console.error("Invalid response format:", data);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
      this.$emit("open-modal", character);
    },

    getRandomAction() {
      const actions = [
        "salutare nel tuo modo più iconico",
        "dare un consiglio di stile in base ai tuoi gusti",
        "raccontare la tua ultima avventura",
        "svelarmi i tuoi sogni",
        "dirmi chi è il tuo migliore amico",
        "scrivere la tua bio di linkedin",
      ];

      const indexRandom = Math.floor(Math.random() * actions.length);

      return actions[indexRandom];
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row row-cols-4 g-2">
        <div class="col" v-for="character in characters" :key="character.id">
          <div class="character" @click="openModal(character)">
            <img :src="character.image" :alt="character.name" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.character {
  background-color: rgb(127, 217, 255);
  border: 2px solid blue;
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
  :hover {
    cursor: pointer;
  }
}
</style>
