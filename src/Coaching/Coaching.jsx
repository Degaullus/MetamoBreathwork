import styles from "./Coaching.module.css";

export default function Coaching() {
  return (
    <div>
      <div className={styles.header}>
        <h1>1:1 BEGLEITUNG</h1>
        <h1>COACHING</h1>
      </div>
      <div>
        <p>
          Die 1:1 Coaching Angebote sind individuell abgestimmte Programme, um
          deine persönlichen Bedürfnisse und Herausforderungen anzusteuern.
          <br />
          <br />
          In der Begleitung konzentriere ich mich ganz auf dich, deine
          einzigartige Situation und Muster, um dir effizient dabei zu helfen,
          Fortschritte auf deinem Weg zu machen
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
        <p>Womit ich dir helfen kann</p>
      </div>
      <div>
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
          <ul className="dot-list">
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
      </div>
    </div>
  );
}
