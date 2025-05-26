import Stats from '../stats/Stats';
import User from '../user/User';
import c from './Card.module.scss';

const Card = () => {
  return (
    <article className={c.card}>
      <figure className={c['card__figure']}>
        <img
          className={c['card__figure-img']}
          src="/images/image-equilibrium.webp"
          alt="Equilibrium image"
        />
        <div className={c['card__overlay']}>
          <img
            className={c['card__overlay-img']}
            src="/images/icon-view.svg"
            alt="Eye icon"
          />
        </div>
      </figure>

      <h1 className={c['card__title']}>Equilibrium #3429</h1>
      <p className={c['card__paragraph']}>
        Our Equilibrium collection promotes balance and calm.
      </p>
      <Stats />
      <User />
    </article>
  );
};

export default Card;
