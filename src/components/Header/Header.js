import * as MENUS from 'constants/menus';

import { useState } from 'react';
import { client } from 'client';
import Link from 'next/link';
import { NavigationMenu, Button, Image } from 'components';
import { classNames as cn } from 'utils';

/**
 * A Header component
 * @param {Props} props The props object.
 * @param {string} props.className An optional className to be added to the container.
 * @return {React.ReactElement} The FeaturedImage component.
 */
export default function Header() {
/*
  const [isNavShown, setIsNavShown] = useState(false);

  const headerClasses = cn(['header', className]);
  const navClasses = cn([
    'menu',
    isNavShown ? 'show' : undefined,
  ]);
*/
  const { useQuery } = client;
  const settings = useQuery().acfOptionsThemeSettings.themeSettings;
  const [mobileActive, setMobileActive] = useState(false);

  const menuClassnames = cn([
    'menu-item',
    mobileActive ? 'active' : ''
  ])

  return (
    <header className="header">
      <div className="container">
        
        <div className="header-mobile">
            <div className="row">
                <div className="col-11 col-sm-7 d-flex align-items-center">
                    <div className="logo">
                      <Link href="/">
                        <a>
                          <Image image={settings.header.logo} alt={settings.header.logo.altText} />
                        </a>
                      </Link>
                    </div>
                    <div 
                    className='menu' onClick={() => setMobileActive(!mobileActive)}>
                        <a className={menuClassnames} data-target=".mobile-menu">Menu</a>
                    </div>
                </div>
                <div className="col-sm-5 d-none d-sm-block align-self-center text-end">
                  <Button href="/book" styleType="primary" outlineOption="true">Get the Book</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                  <NavigationMenu
                    id="primary-navigation"
                    className={cn(['mobile-menu', mobileActive ? 'active' : ''])}
                    menuLocation={MENUS.PRIMARY_LOCATION}
                  >
                  </NavigationMenu>
                </div>
            </div>
        </div>

        <div className="header-desktop">
            <div className="row">
                <div className="col-9 d-flex align-items-center">
                    <div className="logo">
                        <Link href="/">
                          <a>
                            <Image image={settings.header.logo} alt={settings.header.logo.altText} />
                          </a>
                        </Link>
                    </div>
                      <NavigationMenu
                        id="primary-navigation"
                        className={['menu']}
                        menuLocation={MENUS.PRIMARY_LOCATION}
                      >
                      </NavigationMenu>
                </div>
                <div className="col-3 align-self-center text-end">
                  <Button href="/book" styleType="primary" outlineOption="true">Get the Book</Button>
                </div>
            </div>
        </div>

    </div>
</header>
  );
}
