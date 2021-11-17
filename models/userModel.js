'use strict';
const pool = require('../database/db');
const { httpError } = require('../utils/errors');
const promisePool = pool.promise();

const getAllUsers = async (next) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.execute('SELECT user_id, name, email, role FROM wop_user');
    return rows;
  } catch (e) {
    console.error('getAllUsers error', e.message);
    next(httpError('Database error', 500));
  }
};

//TODO tee funktio joka plauttaa yhden userin idn perusteella
const getUser = async (id, next) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.execute('SELECT user_id, name, email, role FROM wop_user WHERE user_id = ?', [id] );
    return rows;
  } catch (e) {
    console.error('getUser error', e.message);
    next(httpError('Database error', 500));
  }
};
const addUser = async (name, email, password, next) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.execute(
      'INSERT INTO wop_user (name, email, password) VALUES (?,?,?)',
      [name, email, password]);
    return rows;
  } catch (e) {
    console.error('getUser error', e.message);
    next(httpError('Database error', 500));
  }
};
const getUserLogin = async (params) => {
  try {
    console.log('getUserLogin', params);
    const [rows] = await promisePool.execute(
      'SELECT * FROM wop_user WHERE email = ?;',
      params);
    return rows;
  } catch (e) {
    console.log('getUserLogin error', e.message);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  getUserLogin
};
