var train = require('../models/train');
// List of all trains
//exports.train_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: train list');
//};
exports.train_list = async function(req, res) {
    try{
        thetrains = await train.find();
        res.send(thetrains);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
};
// for a specific train.
exports.train_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: train detail: ' + req.params.id);
};
// Handle train create on POST.
exports.train_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: train create POST');
};
// Handle train delete form on DELETE.
exports.train_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: train delete DELETE ' + req.params.id);
};
// Handle train update form on PUT.
exports.train_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: train update PUT' + req.params.id);
};