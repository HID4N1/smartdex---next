import Link from 'next/link'
import { createPageMetadata } from '../../lib/seo'
import './page.css'

const canonicalPath = '/politique-de-confidentialite'

// TODO compliance: ajouter ici les references CNDP applicables une fois les formalites confirmees.
const cndpComplianceStatus = {
  processingDeclarationReference: null,
  foreignTransferReference: null,
}

export const metadata = createPageMetadata({
  path: canonicalPath,
  title: 'Politique de confidentialité | SmartDex',
  description:
    'Comment SmartDex collecte, utilise, protège et conserve les données personnelles liées au site, aux formulaires, au chatbot et aux devis.',
  ogDescription:
    'Informations sur la collecte, l’utilisation, la protection et la conservation des données personnelles par SmartDex.',
  type: 'article',
})

export default function PolitiqueDeConfidentialitePage() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="container privacy-hero-inner">
          <p className="privacy-eyebrow">Information légale</p>
          <h1>Politique de confidentialité</h1>
          <p>
            Cette politique explique comment SMARTDEX SARL AU collecte, utilise,
            protège et conserve les données personnelles traitées sur le site
            smartdex.ma, les formulaires de contact, le parcours de devis et le
            chatbot.
          </p>
          <div className="privacy-version">
            <span>Dernière mise à jour : 8 septembre 2026</span>
          </div>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container privacy-layout">
          <aside className="privacy-summary" aria-label="Résumé de la politique">
            <h2>En bref</h2>
            <p>
              SmartDex traite les données nécessaires pour répondre aux demandes,
              préparer des devis, maintenir le chatbot et mesurer l’audience
              uniquement lorsque les cookies analytiques sont acceptés.
            </p>
            <a href="mailto:contact@smartdex.ma">contact@smartdex.ma</a>
          </aside>

          <article className="privacy-article">
            <section>
              <h2>1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement est SMARTDEX SARL AU, société
                immatriculée au Maroc.
              </p>
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
                  <dt>Contact données personnelles</dt>
                  <dd>
                    <a href="mailto:contact@smartdex.ma">contact@smartdex.ma</a>
                  </dd>
                </div>
              </dl>
            </section>

            <section>
              <h2>2. Cadre applicable</h2>
              <p>
                Les traitements décrits dans cette politique sont présentés au
                regard de la loi marocaine n° 09-08 relative à la protection des
                personnes physiques à l’égard du traitement des données à
                caractère personnel, ainsi que des orientations publiques de la
                Commission Nationale de contrôle de la protection des Données à
                caractère Personnel (CNDP).
              </p>
              <p>
                À la date de publication de cette page, le statut des
                formalités CNDP de SmartDex n’a pas encore été confirmé. Aucun
                numéro de déclaration, d’autorisation ou d’autorisation de
                transfert hors du Maroc n’est donc affiché.
              </p>
              {cndpComplianceStatus.processingDeclarationReference && (
                <p>Référence CNDP : {cndpComplianceStatus.processingDeclarationReference}</p>
              )}
            </section>

            <section>
              <h2>3. Données personnelles collectées</h2>
              <h3>Formulaire de contact</h3>
              <p>
                Le formulaire de contact peut collecter le nom, l’adresse email,
                l’entreprise, le type de projet, le budget, le sujet et le
                message. Les demandes sont conservées par SmartDex afin de les
                recevoir, les comprendre, répondre à la personne et assurer un
                suivi commercial manuel directement lié à la demande initiée.
              </p>

              <h3>Parcours de devis</h3>
              <p>
                Le parcours de devis peut collecter la description du projet, le
                nom du client, l’adresse email, le téléphone, le budget, le
                calendrier, le type de projet, les fonctionnalités demandées et
                les informations pertinentes communiquées sur le projet. Ces
                données servent à comprendre le besoin, préparer un devis,
                générer et fournir l’estimation, répondre à la demande
                commerciale et conserver les éléments commerciaux pertinents.
              </p>

              <h3>Chatbot</h3>
              <p>
                Le chatbot peut traiter les messages saisis par le visiteur et
                conserver temporairement certaines informations de conversation
                afin de maintenir la continuité de l’échange. Ces conversations
                ne doivent pas être considérées comme anonymes dans tous les cas :
                un visiteur peut volontairement saisir des informations
                identifiantes dans les messages libres.
              </p>
            </section>

            <section>
              <h2>4. Finalités des traitements</h2>
              <ul>
                <li>Répondre aux demandes envoyées via le formulaire de contact.</li>
                <li>Analyser les besoins exprimés par les prospects et clients.</li>
                <li>Préparer, générer et transmettre des devis.</li>
                <li>Maintenir la continuité des conversations avec le chatbot.</li>
                <li>Assurer un suivi commercial manuel lié à une demande initiée.</li>
                <li>Conserver les dossiers commerciaux utiles aux obligations contractuelles, comptables, probatoires ou légales.</li>
                <li>Mesurer l’audience du site lorsque le visiteur accepte les cookies analytiques.</li>
              </ul>
              <p>
                L’envoi d’un formulaire de contact ou de devis ne vaut pas
                inscription à une newsletter, à une liste promotionnelle ou à une
                campagne marketing automatisée.
              </p>
            </section>

            <section>
              <h2>5. Données obligatoires et facultatives</h2>
              <p>
                Les informations marquées comme obligatoires dans un formulaire
                sont nécessaires pour traiter la demande concernée. Les champs
                facultatifs peuvent être laissés vides ; ils permettent seulement
                de mieux comprendre le contexte du projet ou de faciliter la
                réponse.
              </p>
              <p>
                Les formulaires de contact et de devis affichent la mention :
                « En envoyant ce formulaire, vous reconnaissez avoir pris
                connaissance de notre Politique de confidentialité. » Cette
                mention confirme la présentation de l’information relative à la
                confidentialité. Elle ne constitue pas un consentement à des
                communications publicitaires, à une newsletter ou aux cookies.
              </p>
            </section>

            <section>
              <h2>6. Conditions des traitements</h2>
              <p>
                Les traitements sont réalisés lorsque les informations sont
                nécessaires à la réponse à une demande, à la préparation d’un
                devis, à la gestion d’une relation commerciale initiée par la
                personne concernée, à la conservation d’éléments requis ou
                justifiés par des obligations commerciales, contractuelles,
                comptables, probatoires ou légales, ou lorsque la personne a
                accepté les cookies analytiques optionnels.
              </p>
              <p>
                SmartDex limite les données collectées aux informations utiles au
                traitement de la demande et ne demande pas d’informations sans
                lien avec les services proposés sur le site.
              </p>
            </section>

            <section>
              <h2>7. Chatbot et intelligence artificielle</h2>
              <p>
                SmartDex utilise des services OpenAI pour certaines
                fonctionnalités assistées par intelligence artificielle,
                notamment le traitement du chatbot, l’extraction ou la
                structuration des besoins projet et l’aide à la rédaction du
                contenu des devis.
              </p>
              <p>
                SmartDex applique des mesures de minimisation avant certains
                traitements OpenAI. Les informations qui ne sont pas nécessaires
                à la tâche d’IA, notamment certaines coordonnées ou informations
                administratives, sont exclues ou réduites lorsque cela est
                possible. Pour le chatbot, SmartDex cherche également à limiter
                les informations sensibles transmises au strict nécessaire.
              </p>
              <p>
                Ces protections ne permettent pas d’affirmer qu’aucune donnée
                personnelle n’est jamais transmise à OpenAI : un visiteur peut
                saisir librement des informations identifiantes, et une
                rédaction automatisée ne peut pas être présentée comme parfaite.
              </p>
            </section>

            <section>
              <h2>8. Destinataires et prestataires</h2>
              <p>
                Les données peuvent être accessibles aux personnes habilitées de
                SmartDex lorsque cela est nécessaire au traitement des demandes
                et au suivi commercial correspondant.
              </p>
              <div className="privacy-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Prestataire</th>
                      <th>Rôle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vercel</td>
                      <td>Hébergement du site et, le cas échéant, mesure d’audience Vercel si acceptée.</td>
                    </tr>
                    <tr>
                      <td>Railway</td>
                      <td>Hébergement de services nécessaires au traitement des demandes.</td>
                    </tr>
                    <tr>
                      <td>Supabase</td>
                      <td>Stockage sécurisé de certaines données nécessaires aux services SmartDex.</td>
                    </tr>
                    <tr>
                      <td>OpenAI</td>
                      <td>Fonctionnalités assistées par IA décrites ci-dessus.</td>
                    </tr>
                    <tr>
                      <td>Google Analytics 4</td>
                      <td>Mesure d’audience uniquement après acceptation des cookies analytiques.</td>
                    </tr>
                    <tr>
                      <td>Microsoft Clarity</td>
                      <td>Analyse d’usage uniquement après acceptation des cookies analytiques.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>9. Transferts éventuels hors du Maroc</h2>
              <p>
                Certains prestataires de SmartDex peuvent traiter ou
                héberger des informations hors du Maroc, notamment Vercel,
                Railway, Supabase, OpenAI, Google et Microsoft. Ces opérations
                dépendent des lieux de traitement propres à chaque prestataire.
              </p>
              <p>
                À ce stade, SmartDex ne confirme pas qu’une formalité CNDP
                applicable aux transferts hors du Maroc a été finalisée. Cette
                section devra être actualisée lorsque l’analyse et les formalités
                requises auront été confirmées.
              </p>
              {cndpComplianceStatus.foreignTransferReference && (
                <p>
                  Référence CNDP transfert hors du Maroc :{' '}
                  {cndpComplianceStatus.foreignTransferReference}
                </p>
              )}
            </section>

            <section>
              <h2>10. Durées de conservation</h2>
              <ul>
                <li>Demandes de contact : jusqu’à 365 jours selon la politique actuelle, sauf conservation plus longue justifiée par une relation en cours ou une obligation légale.</li>
                <li>Devis abandonnés, en attente ou échoués : 365 jours.</li>
                <li>Conversations chatbot : 60 jours.</li>
                <li>Devis temporaires générés : 24 heures.</li>
                <li>Devis traités ou commercialement pertinents : jusqu’à 2555 jours, soit environ 7 ans, lorsque cela est approprié pour des besoins commerciaux, contractuels, comptables, probatoires, de litige ou légaux.</li>
              </ul>
              <p>
                Certains devis traités peuvent être conservés plus longtemps
                lorsqu’ils doivent être préservés pour des raisons commerciales,
                contractuelles, comptables, probatoires, de litige ou légales.
                Les durées indiquées sont donc des durées maximales ou
                approximatives, sous réserve des obligations applicables et des
                besoins légitimes de conservation.
              </p>
            </section>

            <section>
              <h2>11. Cookies et mesure d’audience</h2>
              <p>
                Le site utilise des cookies nécessaires au fonctionnement du
                service et des cookies analytiques optionnels. Les analytics sont
                désactivés par défaut et ne sont activés qu’après acceptation.
                Les outils optionnels actuellement prévus sont Google Analytics
                4, Microsoft Clarity et Vercel Analytics.
              </p>
              <p>
                Le visiteur peut accepter, refuser ou modifier son choix via
                « Gérer les cookies ». Le refus des analytics n’empêche pas la
                navigation sur le site, l’utilisation du formulaire de contact,
                du parcours de devis ou du chatbot.
              </p>
              <p>
                Pour le détail, consultez la{' '}
                <Link href="/politique-de-cookies">Politique de cookies</Link>.
              </p>
            </section>

            <section>
              <h2>12. Sécurité</h2>
              <p>
                SmartDex met en œuvre des mesures techniques et
                organisationnelles raisonnables destinées à protéger les données
                personnelles contre l’accès non autorisé, l’altération, la
                divulgation, la perte ou la destruction. Ces mesures comprennent
                notamment des communications sécurisées, des contrôles d’accès,
                la minimisation des données et des garanties adaptées aux
                traitements réalisés.
              </p>
              <p>
                Aucune méthode de transmission ou de stockage ne peut être
                garantie comme totalement sûre. SmartDex évite de publier les
                détails techniques qui pourraient réduire la sécurité du service.
              </p>
            </section>

            <section>
              <h2>13. Vos droits</h2>
              <p>
                Conformément à la loi 09-08, les personnes concernées disposent
                notamment d’un droit à l’information, d’un droit d’accès, d’un
                droit de rectification et d’un droit d’opposition au traitement
                de leurs données personnelles. Une suppression ou un effacement
                peut aussi être demandé lorsque cela est applicable, en
                particulier lorsque les données sont inexactes, incomplètes,
                périmées ou traitées contrairement aux exigences applicables.
              </p>
              <p>
                SmartDex peut demander des informations raisonnables pour
                vérifier l’identité du demandeur avant de traiter une demande de
                droits, sans exiger par défaut des justificatifs excessifs.
              </p>
            </section>

            <section>
              <h2>14. Exercice de vos droits</h2>
              <p>
                Vous pouvez exercer vos droits en contactant SmartDex par email
                ou par courrier :
              </p>
              <address>
                <a href="mailto:contact@smartdex.ma">contact@smartdex.ma</a>
                <br />
                SMARTDEX SARL AU
                <br />
                BUR N° 2 EL CHORAFAA B HADIKA AIN SEBAA
                <br />
                CASABLANCA, MAROC
              </address>
            </section>

            <section>
              <h2>15. Réclamation auprès de la CNDP</h2>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous
                pouvez contacter ou saisir la Commission Nationale de contrôle de
                la protection des Données à caractère Personnel (CNDP). La CNDP
                présente ses informations pour les personnes concernées et ses
                canaux de plainte sur son site officiel.
              </p>
              <p>
                <a href="https://www.cndp.ma/personnes-concernees/" rel="noreferrer">
                  Informations CNDP pour les personnes concernées
                </a>
                <br />
                <a href="https://www.cndp.ma/deposer-une-plainte/" rel="noreferrer">
                  Déposer une plainte auprès de la CNDP
                </a>
              </p>
            </section>

            <section>
              <h2>16. Modification de la politique</h2>
              <p>
                SmartDex peut mettre à jour cette politique lorsque les
                traitements, les prestataires, les durées de conservation, les
                mesures de sécurité ou les exigences légales et réglementaires
                évoluent. Les changements importants doivent donner lieu à une
                mise à jour de la date affichée sur cette page.
              </p>
            </section>

            <section>
              <h2>17. Action de conformité à finaliser</h2>
              <p>
                SmartDex doit confirmer les formalités CNDP applicables aux
                traitements décrits et aux éventuels transferts de données hors
                du Maroc avant d’ajouter toute référence officielle dans cette
                politique ou dans les mentions de collecte.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  )
}
