import Link from 'next/link'
import { createPageMetadata } from '../../lib/seo'
import '../politique-de-confidentialite/page.css'

const canonicalPath = '/politique-de-cookies'

export const metadata = createPageMetadata({
  path: canonicalPath,
  title: 'Politique de cookies | SmartDex',
  description:
    'Découvrez comment SmartDex utilise les cookies strictement nécessaires et les outils optionnels de mesure d’audience, ainsi que vos choix de consentement.',
  ogDescription:
    'Informations sur les cookies nécessaires, les analytics optionnels et la gestion du consentement sur smartdex.ma.',
  type: 'article',
})

export default function PolitiqueDeCookiesPage() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="container privacy-hero-inner">
          <p className="privacy-eyebrow">Information cookies</p>
          <h1>Politique de cookies</h1>
          <p>
            Cette politique explique comment SMARTDEX SARL AU utilise les
            cookies et technologies similaires sur smartdex.ma, notamment pour
            assurer le fonctionnement du site, mémoriser votre choix et mesurer
            l’audience lorsque vous l’acceptez.
          </p>
          <div className="privacy-version">
            <span>Dernière mise à jour : 9 septembre 2026</span>
          </div>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container privacy-layout">
          <aside className="privacy-summary" aria-label="Résumé de la politique cookies">
            <h2>En bref</h2>
            <p>
              Les analytics sont désactivés par défaut. Vous pouvez les accepter,
              les refuser ou modifier votre choix à tout moment via « Gérer les
              cookies ».
            </p>
            <a href="mailto:contact@smartdex.ma">contact@smartdex.ma</a>
          </aside>

          <article className="privacy-article">
            <section>
              <h2>1. Éditeur du site</h2>
              <p>Le site smartdex.ma est opéré par SMARTDEX SARL AU.</p>
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
                  <dt>Contact</dt>
                  <dd>
                    <a href="mailto:contact@smartdex.ma">contact@smartdex.ma</a>
                  </dd>
                </div>
              </dl>
            </section>

            <section>
              <h2>2. Catégories utilisées</h2>
              <h3>Cookies strictement nécessaires</h3>
              <p>
                Ces technologies sont nécessaires au fonctionnement du site, à la
                sécurité et à la mémorisation de votre choix concernant les
                cookies. Elles ne dépendent pas de votre acceptation des
                analytics et ne peuvent pas toujours être désactivées depuis le
                bandeau SmartDex.
              </p>

              <h3>Mesure d’audience</h3>
              <p>
                Les outils de mesure d’audience sont optionnels. Ils sont
                désactivés par défaut tant que vous n’avez pas fait de choix et
                ne sont activés que si vous cliquez sur « Tout accepter ».
                Cliquer sur « Refuser » maintient ces outils désactivés.
              </p>
              <p>
                Le refus des analytics n’empêche pas la navigation sur le site,
                l’utilisation du formulaire de contact, le parcours de devis, le
                chatbot ou les téléchargements.
              </p>
            </section>

            <section>
              <h2>3. Votre choix</h2>
              <p>
                Lors de votre première visite, SmartDex vous propose de refuser
                ou d’accepter les analytics. Le consentement ne résulte pas de la
                poursuite de la navigation, du défilement de la page ou de la
                fermeture du bandeau : il repose sur votre choix explicite.
              </p>
              <p>
                Votre préférence est mémorisée par un cookie SmartDex nommé{' '}
                <code>smartdex_cookie_consent</code>, pour une durée
                approximative de 6 mois. Ce cookie sert uniquement à retenir si
                vous avez accepté ou refusé les analytics optionnels ; il n’a pas
                vocation à contenir des informations de profil identifiantes.
              </p>
            </section>

            <section>
              <h2>4. Outils de mesure d’audience</h2>
              <p>
                Lorsque vous acceptez les analytics, SmartDex peut utiliser
                Google Analytics 4, Microsoft Clarity et Vercel Analytics afin de
                comprendre l’utilisation du site, mesurer les visites et
                interactions, améliorer les performances, le contenu et
                l’ergonomie.
              </p>
              <p>
                Google Analytics 4 et Microsoft Clarity peuvent déposer des
                cookies de mesure d’audience. Vercel Analytics est décrit par
                Vercel comme un service de mesure orienté confidentialité, sans
                cookies tiers et fondé sur des statistiques agrégées.
              </p>
            </section>

            <section>
              <h2>5. Tableau des cookies et technologies</h2>
              <div className="privacy-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Cookie / technologie</th>
                      <th>Fournisseur</th>
                      <th>Finalité</th>
                      <th>Catégorie</th>
                      <th>Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>smartdex_cookie_consent</code></td>
                      <td>SmartDex</td>
                      <td>Mémoriser votre choix d’acceptation ou de refus des analytics.</td>
                      <td>Nécessaire</td>
                      <td>Environ 6 mois</td>
                    </tr>
                    <tr>
                      <td><code>_ga</code></td>
                      <td>Google Analytics 4</td>
                      <td>Distinguer les visiteurs à des fins de statistiques d’audience.</td>
                      <td>Analytics optionnel</td>
                      <td>2 ans par défaut selon Google</td>
                    </tr>
                    <tr>
                      <td><code>_ga_*</code></td>
                      <td>Google Analytics 4</td>
                      <td>Maintenir l’état de session à des fins de statistiques d’audience.</td>
                      <td>Analytics optionnel</td>
                      <td>2 ans par défaut selon Google</td>
                    </tr>
                    <tr>
                      <td><code>_clck</code></td>
                      <td>Microsoft Clarity</td>
                      <td>Associer les pages vues et interactions au même identifiant pseudonyme propre au site.</td>
                      <td>Analytics optionnel</td>
                      <td>Variable selon Microsoft et les paramètres du navigateur</td>
                    </tr>
                    <tr>
                      <td><code>_clsk</code></td>
                      <td>Microsoft Clarity</td>
                      <td>Relier plusieurs pages vues dans une même session Clarity.</td>
                      <td>Analytics optionnel</td>
                      <td>Variable selon Microsoft et les paramètres du navigateur</td>
                    </tr>
                    <tr>
                      <td>Vercel Analytics</td>
                      <td>Vercel</td>
                      <td>Mesure agrégée des visites et performances du site.</td>
                      <td>Analytics optionnel</td>
                      <td>Pas de cookie tiers annoncé par Vercel pour Web Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Les fournisseurs peuvent faire évoluer leurs cookies, finalités
                ou durées. SmartDex mettra cette page à jour lorsque ces
                informations changent de manière pertinente.
              </p>
            </section>

            <section>
              <h2>6. Modifier ou retirer votre choix</h2>
              <p>
                Vous pouvez modifier votre choix à tout moment en cliquant sur
                « Gérer les cookies » dans le pied de page du site. Si vous
                passez de l’acceptation au refus, les analytics optionnels ne
                doivent plus être activés pour les visites suivantes selon le
                mécanisme de consentement du site.
              </p>
              <p>
                Lorsque cela est possible, les cookies analytiques contrôlés par
                SmartDex sont supprimés après le retrait du consentement. Ce
                retrait n’entraîne pas nécessairement la suppression des données
                déjà traitées par un fournisseur tiers avant le changement de
                choix.
              </p>
            </section>

            <section>
              <h2>7. Paramètres du navigateur</h2>
              <p>
                Vous pouvez également gérer, bloquer ou supprimer les cookies
                depuis les paramètres de votre navigateur. La désactivation de
                certains cookies strictement nécessaires peut toutefois affecter
                le fonctionnement normal du site ou la mémorisation de vos choix.
              </p>
            </section>

            <section>
              <h2>8. Informations des fournisseurs</h2>
              <p>
                Pour plus d’informations sur les outils mentionnés, vous pouvez
                consulter les pages officielles suivantes :
              </p>
              <ul>
                <li>
                  <a href="https://support.google.com/analytics/answer/11397207" rel="noreferrer">
                    Utilisation des cookies par Google Analytics 4
                  </a>
                </li>
                <li>
                  <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies" rel="noreferrer">
                    Cookies Microsoft Clarity
                  </a>
                </li>
                <li>
                  <a href="https://vercel.com/docs/analytics/privacy-policy" rel="noreferrer">
                    Confidentialité de Vercel Web Analytics
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2>9. Lien avec la politique de confidentialité</h2>
              <p>
                Cette page concerne les cookies et technologies similaires. Pour
                les autres traitements de données personnelles réalisés par
                SmartDex, consultez la{' '}
                <Link href="/politique-de-confidentialite">
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2>10. Mise à jour</h2>
              <p>
                SmartDex peut mettre à jour cette politique si les outils
                analytics, les finalités des cookies ou les exigences légales
                évoluent. La date de mise à jour affichée en haut de cette page
                indique la version actuellement publiée.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  )
}
