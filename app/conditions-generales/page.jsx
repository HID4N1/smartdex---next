import Link from 'next/link'
import { getCanonicalUrl } from '../../lib/seo'
import '../politique-de-confidentialite/page.css'

/* eslint-disable react/no-unescaped-entities */

const canonicalPath = '/conditions-generales'

export const metadata = {
  title: "Conditions générales d'utilisation | SmartDex",
  description:
    "Consultez les conditions générales d'utilisation du site SmartDex : accès au site, formulaire de contact, demandes de devis, chatbot, propriété intellectuelle et règles d'usage.",
  alternates: {
    canonical: getCanonicalUrl(canonicalPath),
  },
  openGraph: {
    title: "Conditions générales d'utilisation | SmartDex",
    description:
      "Règles applicables à l'accès et à l'utilisation du site SmartDex, de ses formulaires, du chatbot et du parcours de devis.",
    url: getCanonicalUrl(canonicalPath),
    type: 'article',
    locale: 'fr_MA',
  },
}

export default function ConditionsGeneralesPage() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="container privacy-hero-inner">
          <p className="privacy-eyebrow">Information légale</p>
          <h1>Conditions générales d'utilisation</h1>
          <p>
            Les présentes conditions générales d'utilisation encadrent l'accès et
            l'utilisation du site smartdex.ma, ainsi que des fonctionnalités
            publiques proposées par SMARTDEX SARL AU, notamment le formulaire de
            contact, le chatbot et le parcours de demande ou de génération de
            devis.
          </p>
          <div className="privacy-version">
            <span>Dernière mise à jour : 9 septembre 2026</span>
          </div>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container privacy-layout">
          <aside className="privacy-summary" aria-label="Résumé des conditions générales">
            <h2>En bref</h2>
            <p>
              Ces CGU concernent l'utilisation du site public SmartDex. Les
              projets confiés à SmartDex peuvent être encadrés par un devis, une
              proposition, un contrat ou tout autre document commercial accepté
              séparément.
            </p>
            <a href="mailto:contact@smartdex.ma">contact@smartdex.ma</a>
          </aside>

          <article className="privacy-article">
            <section>
              <h2>1. Objet</h2>
              <p>
                Les présentes Conditions Générales d'Utilisation, ci-après les
                « CGU », définissent les règles applicables à l'accès, à la
                consultation et à l'utilisation du site internet accessible à
                l'adresse <a href="https://smartdex.ma">https://smartdex.ma</a>,
                ci-après le « Site ».
              </p>
              <p>
                Le Site permet notamment de consulter des informations sur les
                services et réalisations de SmartDex, d'envoyer une demande de
                contact, d'utiliser un chatbot, de demander ou générer un devis
                indicatif et, lorsque la fonctionnalité est disponible, de
                télécharger un devis généré.
              </p>
              <p>
                Les CGU ne constituent pas les conditions commerciales complètes
                des prestations SmartDex. La conclusion d'une relation
                commerciale peut nécessiter l'acceptation séparée d'une
                proposition, d'un devis, d'un bon de commande, d'un contrat ou
                de conditions particulières.
              </p>
            </section>

            <section>
              <h2>2. Identification de l'éditeur</h2>
              <p>Le Site est édité par SMARTDEX SARL AU.</p>
              <dl className="privacy-identity">
                <div>
                  <dt>Adresse enregistrée</dt>
                  <dd>
                    BUR N° 2 EL CHORAFAA B HADIKA AIN SEBAA
                    <br />
                    CASABLANCA, MAROC
                  </dd>
                </div>
                <div>
                  <dt>ICE</dt>
                  <dd>003834468000083</dd>
                </div>
                <div>
                  <dt>RC</dt>
                  <dd>705443</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:contact@smartdex.ma">contact@smartdex.ma</a>
                  </dd>
                </div>
                <div>
                  <dt>Site internet</dt>
                  <dd>
                    <a href="https://smartdex.ma">https://smartdex.ma</a>
                  </dd>
                </div>
              </dl>
            </section>

            <section>
              <h2>3. Accès et utilisation du Site</h2>
              <p>
                L'utilisation des fonctionnalités disponibles sur le Site est
                soumise aux présentes CGU. Le simple accès à une page publique ne
                crée pas, à lui seul, un contrat commercial portant sur une
                prestation SmartDex.
              </p>
              <p>
                SmartDex fournit sur le Site des informations relatives à ses
                services, domaines d'intervention, capacités et contenus
                publics. SmartDex s'efforce de maintenir ces informations
                exactes, compréhensibles et à jour, mais peut les modifier, les
                corriger, les actualiser ou les retirer lorsque cela est utile.
              </p>
            </section>

            <section>
              <h2>4. Formulaire de contact</h2>
              <p>
                L'envoi d'un formulaire de contact transmet une demande à
                SmartDex. Cette demande permet à SmartDex de comprendre le sujet,
                d'y répondre et, le cas échéant, de recontacter la personne ou
                l'organisation concernée au sujet de sa demande.
              </p>
              <p>
                L'envoi d'un formulaire ne crée pas automatiquement un contrat
                commercial, ne garantit pas l'acceptation d'un projet et ne vaut
                pas inscription à une communication marketing automatisée.
              </p>
            </section>

            <section>
              <h2>5. Demandes et génération de devis</h2>
              <p>
                Le Site peut permettre aux visiteurs de demander ou de générer
                un devis indicatif ou préliminaire à partir des informations
                qu'ils fournissent sur leur projet, leurs besoins, leurs
                priorités et leur contexte.
              </p>
              <p>
                Les estimations ou devis générés via le Site peuvent nécessiter
                une validation par SmartDex avant de constituer un engagement
                commercial définitif. Sauf indication explicite contraire de
                SmartDex, un devis généré automatiquement n'est pas
                nécessairement une offre commerciale finale et ferme.
              </p>
              <p>
                Le prix, le périmètre, les livrables, les délais et les
                conditions propres à un projet peuvent devoir être validés ou
                précisés dans une proposition, un devis accepté, un contrat, un
                bon de commande ou tout autre document commercial convenu entre
                les parties.
              </p>
            </section>

            <section>
              <h2>6. Chatbot et fonctionnalités automatisées</h2>
              <p>
                Le Site peut proposer des fonctionnalités assistées par
                intelligence artificielle, notamment un chatbot destiné à
                informer les visiteurs, répondre à certaines questions, orienter
                une demande ou aider à préparer une estimation.
              </p>
              <p>
                Les réponses générées automatiquement peuvent être incomplètes,
                imprécises ou dépendre fortement des informations fournies par
                l'utilisateur. Elles ne doivent pas être considérées comme un
                conseil définitif en matière juridique, financière, comptable,
                sécurité informatique ou dans tout autre domaine réglementé.
              </p>
              <p>
                Lorsque des informations commerciales ou projet importantes sont
                en jeu, SmartDex peut les confirmer séparément. Les informations
                relatives au traitement des données personnelles sont présentées
                dans la{' '}
                <Link href="/politique-de-confidentialite">
                  Politique de confidentialité
                </Link>
                .
              </p>
            </section>

            <section>
              <h2>7. Obligations des utilisateurs</h2>
              <p>
                Les utilisateurs s'engagent à utiliser le Site de manière
                raisonnable, loyale et conforme à la législation applicable. Les
                informations fournies via le formulaire de contact, le chatbot ou
                le parcours de devis doivent être suffisamment exactes et
                complètes pour permettre une réponse pertinente.
              </p>
              <p>
                Des informations inexactes, incomplètes ou trompeuses peuvent
                affecter la pertinence d'une réponse, d'une recommandation ou
                d'une estimation générée.
              </p>
              <ul>
                <li>Tenter d'accéder sans autorisation à une zone, un compte ou un système.</li>
                <li>Perturber, dégrader ou interrompre le fonctionnement du Site.</li>
                <li>Contourner ou tenter de contourner des mesures de sécurité.</li>
                <li>Soumettre du code, des fichiers ou des contenus malveillants.</li>
                <li>Envoyer des requêtes automatisées abusives ou disproportionnées.</li>
                <li>Utiliser le Site à des fins frauduleuses ou illicites.</li>
              </ul>
            </section>

            <section>
              <h2>8. Disponibilité du Site</h2>
              <p>
                SmartDex s'efforce de maintenir le Site accessible et
                fonctionnel. Toutefois, l'accès peut être temporairement
                interrompu ou dégradé, notamment en raison d'opérations de
                maintenance, de mises à jour, d'incidents techniques,
                d'interruptions de services tiers ou de circonstances échappant
                au contrôle raisonnable de SmartDex.
              </p>
              <p>
                Les présentes CGU ne constituent pas un engagement de niveau de
                service applicable au Site public.
              </p>
            </section>

            <section>
              <h2>9. Propriété intellectuelle</h2>
              <p>
                Les éléments du Site, notamment le nom SmartDex, le logo, les
                signes distinctifs, la charte visuelle, les textes, graphismes,
                interfaces, documents, contenus originaux, études de cas et
                éléments logiciels ou visuels, peuvent être protégés par des
                droits de propriété intellectuelle.
              </p>
              <p>
                Les visiteurs peuvent consulter et utiliser le Site pour un
                usage normal, légitime et personnel ou professionnel lié à la
                découverte des services SmartDex. Toute reproduction,
                adaptation, extraction substantielle ou réutilisation non
                autorisée d'éléments protégés peut nécessiter l'accord préalable
                du titulaire des droits concerné.
              </p>
            </section>

            <section>
              <h2>10. Contenus et éléments de tiers</h2>
              <p>
                Lorsque le Site présente des références clients, études de cas,
                noms, marques, logos ou contenus appartenant à des tiers, ces
                éléments demeurent la propriété de leurs titulaires respectifs.
                Leur présentation ne doit pas être interprétée comme une
                approbation, un partenariat ou une autorisation allant au-delà
                de ce que SmartDex est autorisée à communiquer.
              </p>
              <p>
                Les utilisateurs conservent leurs droits sur les informations et
                documents qu'ils transmettent à SmartDex. En fournissant des
                informations nécessaires à une demande, ils autorisent SmartDex à
                les utiliser dans la mesure nécessaire pour traiter la demande,
                analyser le projet, préparer la réponse ou le devis demandé et
                fournir les fonctionnalités sollicitées.
              </p>
            </section>

            <section>
              <h2>11. Données personnelles et cookies</h2>
              <p>
                Le traitement des données personnelles réalisé via le Site est
                décrit dans la{' '}
                <Link href="/politique-de-confidentialite">
                  Politique de confidentialité
                </Link>
                .
              </p>
              <p>
                L'utilisation des cookies, des technologies similaires et des
                outils de mesure d'audience optionnels est décrite dans la{' '}
                <Link href="/politique-de-cookies">Politique de cookies</Link>.
              </p>
            </section>

            <section>
              <h2>12. Responsabilité</h2>
              <p>
                Dans les limites permises par la législation applicable,
                SmartDex ne garantit pas que le Site sera disponible sans
                interruption, exempt de toute erreur, compatible avec tous les
                environnements ou que les contenus générés automatiquement
                seront toujours complets et exacts.
              </p>
              <p>
                SmartDex peut s'appuyer sur des services tiers pour certaines
                fonctionnalités ou informations accessibles depuis le Site.
                SmartDex ne contrôle pas les sites tiers ni l'ensemble des
                incidents pouvant affecter des services externes.
              </p>
              <p>
                Aucune stipulation des présentes CGU n'a pour objet d'exclure ou
                de limiter une responsabilité qui ne pourrait pas l'être en
                vertu du droit applicable.
              </p>
            </section>

            <section>
              <h2>13. Relations commerciales</h2>
              <p>
                Les présentes CGU encadrent l'utilisation du Site public. Les
                prestations réalisées par SmartDex pour un client peuvent être
                régies par des documents commerciaux distincts, tels qu'un devis
                accepté, une proposition, un contrat, un bon de commande ou des
                conditions spécifiques.
              </p>
              <p>
                En cas de contradiction concernant un projet contracté, le
                document commercial spécifiquement accepté pour ce projet prévaut
                dans la mesure applicable.
              </p>
            </section>

            <section>
              <h2>14. Liens externes</h2>
              <p>
                Le Site peut contenir des liens vers des sites ou services de
                tiers. SmartDex ne contrôle pas ces sites externes. Leur accès et
                leur utilisation peuvent être soumis à leurs propres conditions
                d'utilisation, politiques de confidentialité et règles de
                cookies.
              </p>
            </section>

            <section>
              <h2>15. Droit applicable et règlement des différends</h2>
              <p>
                Les présentes CGU sont régies par le droit marocain. En cas de
                difficulté relative à l'utilisation du Site, les parties sont
                invitées à rechercher d'abord une solution amiable.
              </p>
              <p>
                À défaut de résolution amiable, tout différend relevant des
                présentes CGU pourra être porté devant les juridictions
                marocaines compétentes conformément aux règles procédurales
                applicables.
              </p>
            </section>

            <section>
              <h2>16. Modification des CGU</h2>
              <p>
                SmartDex peut mettre à jour les présentes CGU afin de tenir
                compte de l'évolution du Site, de ses fonctionnalités publiques,
                des services proposés via le Site ou des exigences légales
                applicables.
              </p>
              <p>
                Les modifications s'appliquent à l'utilisation du Site à compter
                de leur publication, sans remettre en cause les documents
                commerciaux déjà acceptés pour un projet spécifique.
              </p>
            </section>

            <section>
              <h2>17. Contact</h2>
              <p>
                Pour toute question concernant le Site ou les présentes CGU,
                vous pouvez contacter SmartDex à l'adresse suivante :
              </p>
              <address>
                SMARTDEX SARL AU
                <br />
                BUR N° 2 EL CHORAFAA B HADIKA AIN SEBAA
                <br />
                CASABLANCA, MAROC
                <br />
                <a href="mailto:contact@smartdex.ma">contact@smartdex.ma</a>
              </address>
            </section>
          </article>
        </div>
      </section>
    </main>
  )
}
