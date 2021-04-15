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
    // {"traintype":"goat", "cost":12, "size":"large"}
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
exports.train_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await train.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }

};
// Handle train update form on PUT.
//exports.train_update_put = function(req, res) {
 //res.send('NOT IMPLEMENTED: train update PUT' + req.params.id);
//};

// Handle Pen update form on PUT.
exports.train_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await train.findById( req.params.id)
        // Do updates of properties
        if(req.body.type) toUpdate.type = req.body.type;
        if(req.body.compartments) toUpdate.compartments = req.body.compartments;
        if(req.body.destination) toUpdate.destination = req.body.destination;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

    // Handle a show one view with id specified by query
exports.train_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await train.findById( req.query.id)
        res.render('traindetail', 
{ title: 'train Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a train.
// No body, no in path parameter, no query.
// Does not need to be async
exports.train_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('traincreate', { title: 'train Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a train.
// query provides the id
exports.train_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await train.findById(req.query.id)
        res.render('trainupdate', { title: 'train Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.train_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await train.findById(req.query.id)
        res.render('traindelete', { title: 'train Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
