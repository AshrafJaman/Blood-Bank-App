const testController = (req,res) => {
    res.status(200).send({
        message: "Welcome Boss",
        success: true,
    });
};

module.exports = { testController };