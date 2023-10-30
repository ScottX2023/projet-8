import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../sass/modules/banner.scss';

function Banner() {
  // verification du chemin afin d'afficher différentes classes
  const [isAboutPage, setIsAboutPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAboutPage(location.pathname === '/about');
  }, [location.pathname]);

  return (
    <section className={`banner ${isAboutPage ? 'banner_about' : 'banner_home'}`}>
      {!isAboutPage && <p>Chez vous, partout et ailleurs</p>}
    </section>
  );
}

export default Banner;
