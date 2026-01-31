import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3333;

const imgPath = path.join(process.cwd(), "images");

app.use("/images", (req, res, next) => {
	res.on("finish", () => {
		if (res.statusCode === 200) {
			console.log(`sent img: ${req.path}`);
		} else if (res.statusCode === 404) {
			console.log(`image not find: ${req.path}`);
		}
	});
	next();
});

app.use("/images", express.static(imgPath));

app.listen(PORT, () => console.log(`server running on port ${PORT}`)
);
