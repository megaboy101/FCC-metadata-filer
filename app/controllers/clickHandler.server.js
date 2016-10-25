function clickHandler () {
	this.analyzeFile = function(req, res){
		var fileSize = req.file.size;

		res.json({size: fileSize});
	};
}

module.exports = clickHandler;
