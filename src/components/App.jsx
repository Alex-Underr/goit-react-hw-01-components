import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
import Profile from './Profile/Profile';
import user from '../data/user.json';
import Statistic from './Statistics/Statistic';
import data from '../data/data.json';
import TransactionHistory from './TransactionHistory/TransactionHistory ';
import transactions from '../data/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic stats={data} title="Statistic" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
