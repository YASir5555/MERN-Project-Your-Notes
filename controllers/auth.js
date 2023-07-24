import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';

class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

const register = async (req, res, next) => {
  const { email, password, password2, username, phone, birthdayYear } =
    req.body;

  const user = await User.create({
    email,
    password,
    password2,
    username,
    phone,
    birthdayYear,
  });
  const token = await user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      password: user.password,
      password2: user.password2,
      username: user.username,
      phone: user.phone,
      birthdayYear: user.birthdayYear,
    },
    token: token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};
const updateUser = async (req, res) => {
  const { email, password, username, phone, birthdayYear } = req.body;
  if (!email || !password || !username || !phone || !birthdayYear) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.password = password;
  user.username = username;
  user.phone = phone;
  user.birthdayYear = birthdayYear;

  await user.save();

  const token = user.createJWT();
  attachCookie({ res, token });

  res.status(StatusCodes.OK).json({ user });
};

export { register, login, updateUser };
