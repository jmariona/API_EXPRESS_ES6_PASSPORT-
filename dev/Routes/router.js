// Import Controlelrs
import GetProductsController from '../Controllers/Products/GetProductsController';

const ENDPOINTS = async app => {
	// Route Home
	await app.get(`${process.env.API_URL}`, (req, res) => {
		res.json({
			message: 'Success!',
			endpoint: process.env.ENDPOINT,
			error: false
		});
	});

	// Route Products
	await app.get(`${process.env.API_URL}/products`, GetProductsController);
};

export default ENDPOINTS;
