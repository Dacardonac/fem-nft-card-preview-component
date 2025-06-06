import u from './User.module.scss';

const User = () => {
  return (
    <div className={u.user}>
      <figure className={u['user__figure']}>
        <img
          className={u['user__figure-img']}
          src="images/image-avatar.webp"
          alt="User avatar image"
        />
      </figure>
      <p className={u['user__name']}>
        <span className={u['user__name-creation']}>Creation of</span>{' '}
        <span className={u['user__name-author']}>Jules Wyvern</span>
      </p>
    </div>
  );
};

export default User;
