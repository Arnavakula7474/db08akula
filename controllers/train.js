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

// Handle train create on POST.
exports.train_create_post = async function(req, res) {
    console.log(req.body)
    let document = new train();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.type = req.body.type;
    document.compartments = req.body.compartments;
    document.destination = req.body.destination;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
   };
};
// Handle train delete form on DELETE.
exports.train_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: train delete DELETE ' + req.params.id);
};
// Handle train update form on PUT.
exports.train_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: train update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.train_view_all_Page = async function(req, res) {
    try{
    thetrains = await train.find();
    res.render('train', { title: 'train Search Results', results: thetrains });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };

    exports.train_detail = async function(req, res) {
        console.log("detail"  + req.params.id)
        try {
            result = await train.findById( req.params.id)
            res.send(result)
        } catch (error) {
            res.status(500)
            res.send(`{"error": document for id ${req.params.id} not found`);
        }
    };