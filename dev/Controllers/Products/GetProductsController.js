const GetProductsController = async (req, res) => {
	await res.status(200).json({
		sucess: true,
		error: false,
		products: [],
		endpoint: `${process.env.ENDPOINT}/products`
	});
};

export default GetProductsController;
