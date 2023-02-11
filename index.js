const svelteViewEngine = require("svelte-view-engine");

let dir = "./pages";
let type = "html";

app.engine(type, svelteViewEngine({
	template: "./template.html", // see Root template below
	dir,
	type,
	init: true,
	watch: true,
	liveReload: true,
	svelte: {
		// rollup-plugin-svelte config
	},
}));
	
app.set("view engine", type);
app.set("views", dir);

// ...

app.get("/", (req, res) => {
	res.render("Home", {
		name: "callum" // renders ./pages/Home.html with props {name: "world"}
	});
});