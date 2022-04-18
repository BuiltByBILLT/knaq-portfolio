import Header from "./components/Header";
import ProtectedRoute from './components/ProtectedRoute'
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RoomsScreen from "./screens/RoomsScreen";
import ExploreScreen from "./screens/ExploreScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import WalletScreen from "./screens/WalletScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import 'animate.css'
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ForgotScreen from "./screens/ForgotScreen";
import UserScreen from "./screens/UserScreen";
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
          <Route path="/home" exact component={HomeScreen} />
          <Route path="/privacy" exact component={PrivacyScreen} />
          <Route path="/terms" exact component={TermsScreen} />
          <Route path="/faq" exact component={FaqScreen} />
          <ProtectedRoute path="/" exact component={PromoScreen} />
          {/* <ProtectedRoute path="/" exact component={Home} /> */}
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/signup" exact component={SignupScreen} />
          <Route path="/forgot" exact component={ForgotScreen} />
          <ProtectedRoute path="/profile" exact component={ProfileScreen} />
          <ProtectedRoute path="/user/:id" exact component={UserScreen} />
          <ProtectedRoute path="/rooms" exact component={RoomsScreen} />
          <ProtectedRoute path="/explore" exact component={ExploreScreen} />
          <ProtectedRoute path="/notifications" exact component={NotificationsScreen} />
          <ProtectedRoute path="/wallet" exact component={WalletScreen} />
          <ProtectedRoute path="/test" exact component={TestScreen} />
          <Route><NotFoundScreen /></Route>
        </Switch>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
