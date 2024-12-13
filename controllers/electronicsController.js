const Electronics = require('../models/electronicsModel');


electronicsModel.find({ type: req.params.type })
  .then(items => {
    if (items.length === 0) {
      return res.status(404).json({ message: `No items found for type: ${req.params.type}` });
    }
    res.json(items);
  })
  .catch(error => {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  });

module.exports = {
    getElectronicsByType
};
