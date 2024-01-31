import * as MENUS from 'constants/menus';

import Link from 'next/link';
import Script from 'next/script'
import { client } from 'client';
import { NavigationMenu, Image } from 'components';

/**
 * The Blueprint's Footer component
 * @return {React.ReactElement} The Footer component.
 */
export default function Footer() {
  const { useQuery } = client;
  const settings = useQuery().acfOptionsThemeSettings.themeSettings;

  return (
        <footer className="footer">
            <div className="container">
              <div className="logo">
                <div className="row">
                  <div className="col">
                    <Link href="/">
                      <a>
                        <Image image={settings.footer.logo} alt={settings.footer.logo.altText} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="menu">
                <div className="row">
                  <div className="col-lg-2 col-sm-4">
                    <NavigationMenu
                      className="nav"
                      menuLocation={MENUS.FOOTER_LOCATION}
                    />
                  </div>
                  <div className="col-lg-3 col-sm-5">
                    <NavigationMenu
                      className="nav"
                      menuLocation={MENUS.FOOTER_LOCATION_2}
                    />
                  </div>
                </div>
              </div>

              <div className="copyright">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-5">
                        <div className="small-links">
                            <small><Link href="https://mblm.com/privacy-policy/">PRIVACY POLICY</Link></small>
                            <small>ALL RIGHTS RESERVED</small>
                            <small>&copy; EMBLEM LLC 2022</small>
                        </div>
                    </div>
                </div>
              </div>

          </div>
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></Script>
          <Script src="https://player.vimeo.com/api/player.js"></Script>
        </footer>
  );
}
