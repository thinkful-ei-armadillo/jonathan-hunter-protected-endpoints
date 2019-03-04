'use strict';

function requireAuth(req, res, next) {
  const authToken = req.get('Authorization') || '';

  if (!authToken.toLowerCase().startsWith('bearer ')) {
    return res.status(401).json({ error: 'Missing bearer token' });
  }
  next();
  
  
}

module.exports = {
  requireAuth
};