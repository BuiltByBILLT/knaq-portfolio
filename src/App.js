import Header from "./components/Header";
import ProtectedRoute from './components/ProtectedRoute'
import Home from "./screens/HomeScreen";
import Profile from "./screens/ProfileScreen";
import Rooms from "./screens/RoomsScreen";
import Explore from "./screens/ExploreScreen";
import Notifications from "./screens/NotificationsScreen";
import Wallet from "./screens/WalletScreen";
import NotFound from "./screens/NotFoundScreen";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import 'animate.css'
import Login from "./screens/LoginScreen";
import Signup from "./screens/SignupScreen";
import Forgot from "./screens/ForgotScreen";
import User from "./screens/UserScreen";
import UploadPhoto from "./components/UploadPhoto";
import TestScreen from "./screens/TestScreen";
import PromoScreen from "./screens/PromoScreen";
import PrivacyScreen from "./screens/PrivacyScreen";
import TermsScreen from "./screens/TermsScreen";
import FaqScreen from "./screens/FaqScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          {/* <ProtectedRoute path="/" exact component={Home} /> */}
          <Route path="/promo" exact component={PromoScreen} />
          <Route path="/privacy" exact component={PrivacyScreen} />
          <Route path="/terms" exact component={TermsScreen} />
          <Route path="/faq" exact component={FaqScreen} />
          <ProtectedRoute path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forgot" exact component={Forgot} />
          <ProtectedRoute path="/profile" exact component={Profile} />
          <ProtectedRoute path="/user/:id" exact component={User} />
          <ProtectedRoute path="/rooms" exact component={Rooms} />
          <ProtectedRoute path="/explore" exact component={Explore} />
          <ProtectedRoute path="/notifications" exact component={Notifications} />
          <ProtectedRoute path="/wallet" exact component={Wallet} />
          {/* <Route path="/test" exact component={UploadPhoto} /> */}
          <ProtectedRoute path="/test" exact component={TestScreen} />
          <Route><NotFound /></Route>
        </Switch>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
