import styles from './profile.module.css';

export default function userProfile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
          width="350"
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>
            Followers<br></br>
          </span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>
            Views<br></br>
          </span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>
            Likes<br></br>
          </span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
