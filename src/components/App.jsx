import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistic from './Statistics/Statistic';
import data from './Statistics/data.json';
import TransactionsList from './TransactionHistory/TransactionsList';
import transactions from './TransactionHistory/transactions.json';
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
      <Statistic stats={data} />
      <FriendList friends={friends} />
      <TransactionsList items={transactions} />
    </div>
  );
};
