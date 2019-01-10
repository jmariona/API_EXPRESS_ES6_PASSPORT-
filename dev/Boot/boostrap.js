const BOOT = app => {
	const { PORT } = process.env;
	app.listen(PORT, () =>
		console.log(`Server Runnig On http://localhost:${PORT}`)
	);
};

export default BOOT;
