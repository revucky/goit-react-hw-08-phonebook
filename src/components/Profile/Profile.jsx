import s from "./Profile.module.css";

const Profile = ({ user }) => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <div className={s.Profilewrap}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.colorTitle}>{"@" + tag}</p>
        <p className={s.colorTitle}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.Profileitem}>
          <span className={(s.label, s.colorTitle)}>Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </li>
        <li className={s.Profileitem}>
          <span className={(s.label, s.colorTitle)}>Views</span>
          <span className="quantity"> {stats.views}</span>
        </li>
        <li className={s.Profileitem}>
          <span className={(s.label, s.colorTitle)}>Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
