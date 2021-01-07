import Link from 'next/link'

import Footer from 'components/Footers/Footer.js'
import IndexNavbar from 'components/Navbars/IndexNavbar.js'
import Navbar from 'components/Navbars/AuthNavbar.js'

export default function privacy_policy() {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <section className="relative py-20 border-b">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            bg-gray-300
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto pt-20 mx-2">
            <div className="items-center flex flex-wrap">
              <div className="w-full  ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <h2 className="text-3xl font-semibold uppercase text-center">
                      Politique de confidentialité ?
                    </h2>
                    <div class="w-10 h-1 bg-blue-600 rounded mt-2"></div>
                  </div>
                  <h5 className="text-xl font-semibold uppercase mt-10 mb-5">
                    Politique de confidentialité et données personnelles
                  </h5>
                  <p className="text-md leading-relaxed text-gray-700">
                    Les droits à la protection de vos informations – L'essentiel
                    des Règles de confidentialité ainsi que des conditions
                    d'utilisation de vos informations par Xarala.co
                  </p>
                  <h5 className="text-xl font-semibold uppercase mt-10 mb-5">
                    1. Introduction :
                  </h5>
                  <p className="text-md leading-relaxed text-gray-700 mb-4">
                    Dans le cadre de son activité de formation professionnelle
                    et pratique Xarala est amenée à traiter des informations
                    vous concernant.
                  </p>
                  <p className="text-md leading-relaxed text-gray-700 mb-4">
                    Par exemple, en remplissant un formulaire d'inscription, en
                    achetant une formation, en vous inscrivant à un événement
                    que nous organisons, en participant à une formation, en
                    naviguant sur nos sites Internet ou nos applications mobiles
                    et numériques, vous nous transmettez des informations dont
                    certaines sont de nature à vous identifier (« données
                    personnelles »).
                  </p>
                  <h5 className="text-xl font-semibold uppercase mt-10 mb-5">
                    2. Application :
                  </h5>
                  <p className="text-md leading-relaxed text-gray-700 mb-4">
                    Les présentes règles de confidentialité s'appliquent à toute
                    information que nous collectons ou utilisons sur les sites
                    et dans les applications. Données que nous collectons :
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 mr-8">
                            <i className="fas fa-angle-right text-base text-blue-600"></i>
                          </span>
                        </div>
                        <div>
                          <h6 className="text-gray-800">
                            Noms, prénoms, civilité, date de naissance ;
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 mr-8">
                            <i className="fas fa-angle-right text-base text-blue-600"></i>
                          </span>
                        </div>
                        <div>
                          <h6 className="text-gray-800">
                            Adresse postale, adresse e-mail, numéro de téléphone
                            ;
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 mr-8">
                            <i className="fas fa-angle-right text-base text-blue-600"></i>
                          </span>
                        </div>
                        <div>
                          <h6 className="text-gray-800">
                            Identifiant et mot de passe crypté utilisés pour
                            vous identifier sur nos sites ou nos applications ;
                            Informations cryptées relatives à vos moyens de
                            paiement (notamment numéro de carte bancaire, compte
                            OM etc...) ;
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 mr-8">
                            <i className="fas fa-angle-right text-base text-blue-600"></i>
                          </span>
                        </div>
                        <div>
                          <h6 className="text-gray-800">
                            Toute autre information que vous souhaitez porter à
                            notre connaissance.
                          </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <h5 className="text-xl font-semibold uppercase mt-10 mb-5">
                    3. Utilisation des cookies :
                  </h5>
                  <p className="text-md leading-relaxed text-gray-700">
                    Un cookie est un fichier texte déposé lors de la
                    consultation d’un site, d’une application ou d’une publicité
                    en ligne et stocké dans un espace spécifique du disque dur
                    de votre ordinateur ou de votre appareil mobile. Les cookies
                    sont gérés par votre navigateur Internet et seul l’émetteur
                    d’un cookie peut décider de la lecture ou de la modification
                    des informations qui y sont contenues.
                  </p>
                  <p className="text-md leading-relaxed text-gray-700">
                    Nous utilisons des cookies afin de personnaliser et
                    d'optimiser votre expérience en ligne. Vous avez la
                    possibilité de désactiver les cookies, toutefois, cela peut
                    limiter votre utilisation de certaines fonctionnalités ou
                    fonctions de nos sites et applications.{' '}
                  </p>
                  <h5 className="text-xl font-semibold uppercase mt-10 mb-5">
                    4. Informations de contact
                  </h5>
                  <p className="text-md leading-relaxed text-gray-700 mb-4">
                    Vous pouvez nous contacter en ligne, si vous avez des
                    questions ou des observations à propos de nos pratiques de
                    confidentialité. Vous pouvez également nous écrire à
                    l'adresse suivante : contact@xarala.co
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
