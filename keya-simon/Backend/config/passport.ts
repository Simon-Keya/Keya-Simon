// passport.ts

import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { JWT_SECRET } from '.';
import User from '../models/User'; // Adjust the import based on your actual file structure

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

const passportConfig = (passport: any) => {
  passport.use(
    new Strategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.id);

        if (!user) {
          return done(null, false);
        }

        // Assuming 'validatePassword' is a method in your User model
        const isValid = await user.validatePassword('passwordToCheck'); // Adjust this based on your actual implementation

        if (isValid) {
          return done(null, user);
        }
        
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};

export default passportConfig;
