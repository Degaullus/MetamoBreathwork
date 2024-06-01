import styles from "./Coaching.module.css";

export default function Coaching() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="./Coaching.png"></img>
        <h1 className={styles.begleitung}>1:1 BEGLEITUNG</h1>
        <h1 className={styles.coaching}>COACHING</h1>
      </div>
      <div className={styles.content}>
        <div>
          <p>
            <strong>
              Die 1:1 Coaching Angebote sind individuell abgestimmte Programme,
              um deine persönlichen Bedürfnisse und Herausforderungen
              anzusteuern.
              <br />
              <br />
              In der Begleitung konzentriere ich mich ganz auf dich, deine
              einzigartige Situation und Muster, um dir effizient dabei zu
              helfen, Fortschritte auf deinem Weg zu machen
            </strong>
          </p>
          <p>
            Dieses persönliche und intensive Setting im 1:1 ist sicherlich die
            effektivste Art und Weise, um Veränderung und Heilung zu
            verwirklichen.
            <br />
            <br />
            Wer nach langfristiger Unterstützung und Beratung sucht, ist mit
            beiden meiner Angebote gut beraten.
          </p>
          <p>
            <strong>Womit ich dir helfen kann</strong>
          </p>
        </div>

        <div className={styles.listcontainer}>
          <ul className={styles.dotlist}>
            <li>Atemprobleme</li>
            <li>Chronic Fatigue</li>
            <li>Long Covid, Asthma, CPTSD</li>
            <li>Umgang mit Stress</li>
            <li>chronischem Stress und Burn-Out</li>
            <li>
              in der Stressreaktion feststeckenden Nervensystemen (Freeze oder
              Fight & Flight)
            </li>
            <li>Wutanfälle</li>
            <li>Panikattacken und Angstzuständen</li>
            <li>
              leichter Anfälligkeit für emotionale Trigger und reaktivem
              Verhalten
            </li>
            <li>Konzentrationsfähigkeit</li>
          </ul>
          <ul className={styles.dotlist}>
            <li>Schlafstörungen und Schlafapnoe</li>
            <li>Asthma, Long Covid und CPTSD</li>
            <li>PTSD Symptomen</li>
            <li>
              dem Gefühl, abgetrennt von deinem Körper und deinen Emotionen zu
              sein
            </li>
            <li>Verdauungs- und Darmprobleme</li>
            <li>Hautprobleme (z.B. Neurodermitis, Rosacea, Acne, Ekzeme)</li>
            <li>Schlafprobleme, Schnarchen und Schlafapnoe</li>
            <li>der Neigung, unangenehme Gefühle zu unterdrücken</li>
            <li>körperlicher (sportlicher) Leistungsfähigkeit</li>
          </ul>
        </div>
        <div className={styles.wieicharbeite}>
          <h3>
            <strong>Wie ich arbeite?</strong>
          </h3>
          <p>
            Meine Arbeit setzt sich aus mehreren Modalitäten zusammen, in denen
            ich professionell ausgebildet wurde. Jede Sitzung wird entlang
            deiner persönlichen Bedürfnisse und Wünsche auf Basis dieser
            Ressourcen auf dich zugeschnitten:
          </p>
          <ul>
            <li>Funktionale Atmung nach Oxygen Advantage und Buteyko</li>
            <li>Conscious Connected Breathing und Transformative Atmung</li>
            <li>IFS Anteile Arbeit</li>
            <li>Emotional Embodiment</li>
            <li>
              Nervensystem Regulation und Stressreaktion nach klinischer
              Psycho-Neuro-Immunologie, Polyvagal Theorie
            </li>
            <li>Bindungsmuster nach John Bowlby</li>
          </ul>
          <h3>
            <strong>
              <i>Option 1</i>
            </strong>
          </h3>
          <h1>HEALING BREATH</h1>
          <h3>
            <strong>Format</strong>{" "}
          </h3>
          <p>
            HealingBreath ist ein intensives,{" "}
            <strong> 9-Wochen Programm</strong>, das sich je nach Person
            unterschiedlich gestaltet.
            <br />
            Die Grundstruktur sieht wie folgt aus:
          </p>
          <div className={styles.boxoptions}>
            <img
              className={styles.icons}
              src="./Coaching/messages.png"
              alt="messagepic"
            />
            <p>
              <strong>6 x private 90 Minuten Trainings-Sessions // </strong>In
              den Sessions gehen wir gemeinsam auf deine Fragen und
              Herausforderungen ein, besprechen relevante Inhalte und die
              medizinischen Hintergründe. Ich zeige dir neue Atemtechniken und
              andere Übungen, die wir zusammen praktizieren. Die Sessions können
              per Video-Call oder persönlich stattfinden. Du bekommst Zugang zu
              einer Online-Plattform (Notion), auf der du die Aufzeichnungen,
              Inhalte und Ressourcen wie Atemmeditationen, Präsentationen und
              Playlists finden kannst.
            </p>
          </div>
          <div className={styles.boxoptions}>
            <img
              className={styles.icons}
              src="./Coaching/messages.png"
              alt="messagepic"
            />
            <p>
              <strong> Stetiger Austausch via Whatsapp/Telegram //</strong> Wir
              checken von Mo-Fr per Text oder Sprachnachricht miteinander ein,
              um deine Praxis konstant zu halten, eventuelle Fragen und
              Herausforderungen zu klären und dich zu motivieren.
            </p>
          </div>
          <div className={styles.boxoptions}>
            <img
              className={styles.icons}
              src="./Coaching/messages.png"
              alt="messagepic"
            />
            <p>
              <strong>Teilnahme an allen Formaten //</strong> Du erhältst Zugang
              zu all meinen Webinaren, den regelmäßigen transformativen Atem
              Sessions im Gruppen-Setting, meinen online Seminaren und Workshops
              zu den Themen Stressreduktion, Trauma, Nervensystem und Atmung.
              Außerdem erhältst du ein Paket an allen geführten Atemmeditationen
              und Praxis-Videos.
            </p>
          </div>
          <div className={styles.boxoptions}>
            <img
              className={styles.icons}
              src="./Coaching/messages.png"
              alt="messagepic"
            />
            <p>
              <strong>Individuelle Buch-und Ressourcen-Empfehlungen // </strong>
              Eine Liste an von mir empfohlenen Büchern, Videos, ExpertInnen,
              Tools und anderen Ressourcen, um dich bei dem Erreichen deiner
              Ziele bestmöglich und nachhaltig zu unterstützen.
            </p>
          </div>
          <p>
            Die Investition für das 6-Session Trainingsprogramm beträgt:
            <br />
            <strong>990 €</strong>
            990 € (Ratenzahlung möglich)
            <br />
            <br />{" "}
            <strong>
              Die Arbeit mit dem Atem und dem Nervensystem muss langsam
              vonstatten gehen
            </strong>{" "}
            - deshalb ist meine Arbeit mit Klient*innen meist längerfristig. Es
            ist nicht ratsam, Einzel-Sessions zu machen, weil ein Nervensystem
            Zeit dafür braucht, sich an neue Zustände zu gewöhnen und Änderungen
            zu internalisieren.
            <br />
            <br />
            Ich arbeite mit meinen Klient*innen deshalb für mindestens 9 Wochen
            innerhalb dieses Trainings, wobei die meisten die Zusammenarbeit
            danach noch verlängern
            <br />
            <br />
            <br /> Wenn du breit bist, hinterlasse mir eine Nachricht für einen{" "}
            <strong>30-minütigen kostenlosen Kennenlern-Call (Zoom)</strong>.
            Dabei stellen wir fest, ob ich dich mit meiner Arbeit unterstützen
            kann und beantworten jegliche deiner Fragen.
          </p>
          <button>SCHREIB MIR</button>
        </div>
      </div>
    </div>
  );
}
