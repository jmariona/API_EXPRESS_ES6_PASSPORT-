const BOOT = app => {
	const PORT = 4000;
	app.listen(4000, () =>
		console.log(`Server Runnig On http://localhost:${PORT}`)
	);
};

export default BOOT;
