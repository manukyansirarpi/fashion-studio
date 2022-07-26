import { rest } from "msw";

export const handlers = [
	rest.get("https://fashionstudio-2c756-default-rtdb.firebaseio.com/items.json", (req, res, ctx) => {
		return res(
			ctx.json({
				i1: {
					description: "Knit Top",
					img: "https://static.zara.net/photos///2022/V/0/1/p/4331/069/500/2/w/438/4331069500_2_1_1.jpg?ts=1652193855444",
					name: "Top",
					price: 22.39
				},
				i2: {
					description: "High raise jeans",
					img: "https://static.zara.net/photos///2022/V/0/1/p/6688/212/400/2/w/438/6688212400_15_1_1.jpg?ts=1644341433641",
					name: "Jeans",
					price: 59.69
				},
				i3: {
					description: "Evening Dress",
					img: "https://i.pinimg.com/736x/11/bb/e8/11bbe83417425c90bd6a136d516b365c.jpg",
					name: "Dress",
					price: 98.99
				}
			})
		);
	})
]